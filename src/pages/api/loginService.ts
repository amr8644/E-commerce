import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";
import bcrypt from "bcryptjs";

// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const userData = await prisma.user.findUnique({
      where: { email: email },
    });

    // Compare Password
    if (userData && (await bcrypt.compare(password, userData.password!))) {
      return res.status(200).json({
        id: userData.id,
        name: userData.name,
        email: userData.email,
        image: userData.image,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
}
