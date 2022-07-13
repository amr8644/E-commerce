import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";
import bcrypt from "bcryptjs";

type UserType = {
  username: string;
  email: string;
  password: string;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    const { username, email, password } = req.body;

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
      username: username,
      email: email,
      password: hashedPassword,
    };
    const users = await prisma.user.create({ data: userData });

    return res.status(201).json(users);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
}
