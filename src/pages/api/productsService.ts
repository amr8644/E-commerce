import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    const products = await prisma.product.findMany();
    if (req.method == "get") {
      return res.status(200).json(products);
    }
  } catch (error) {
    console.log(error);
  }
}
