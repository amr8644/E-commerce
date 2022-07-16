import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";
import bcrypt from "bcryptjs";

type UserType = {
  name: string;
  email: string;
  password: string;
  image: string;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    // ADDING USER DATA

    if (req.method == "post") {
      const { name, email, password, image } = req.body;

      // Check if user exists
      const userExists = await prisma.user.count({ where: { email: email } });

      if (userExists) {
        return res.status(400).json("Already Exists");
      }

      // Hash Password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Create User
      const userData: UserType = {
        name: name,
        email: email,
        password: hashedPassword,
        image: image,
      };
      const users = await prisma.user.create({
        data: userData,
      });

      return res.status(201).json(users);
    }

    // GETTING USER DATA
    else if (req.method == "get") {
      const { name, email, image } = req.body;

      // Check if user exists
      const userExists = await prisma.user.count({ where: { email: email } });

      if (!userExists) {
        return res.status(400).json("User does not exist");
      }
      // Get User
      const user = await prisma.user.findMany();
      return res.status(200).json(user);
    } else {
      return res.status(400);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
}
