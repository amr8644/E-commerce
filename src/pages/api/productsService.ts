import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

type ProductsType = {
  id: number;
  name: string;
  description: string;
  image: string;
  quantity: number;
  price: number;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    const { name, description, image, quantity, price } = req.body;

    // Create Products
    const products = await prisma.product.create({
      data: {
        name,
        description,
        image,
        quantity,
        price,
      },
    });

    return res.status(201).json(products);
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
}
