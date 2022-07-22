import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";
import { getSession } from "next-auth/react";

// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    // Update Products
    console.log(req.body);
    const { e, price, quantity } = req.body;

    const products = await prisma.product.update({
      where: { id: e },
      data: {
        price: price * quantity,
        quantity: quantity,
      },
    });

    return res.status(201).json(products);
  } catch (error) {
    console.log(error);

    return res.status(400).send(error);
  }
}
