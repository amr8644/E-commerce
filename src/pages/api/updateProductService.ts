import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";
import { getSession } from "next-auth/react";

// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    let price1: any, id1: any, quantity1: any;
    // Update Products

    req.body.map(async (e: any) => {
      const { price, id, quantity } = e;
      console.log(id);

      price1 = price;
      id1 = id;
      quantity1 = quantity;
    });
    const products = await prisma.product.update({
      where: { id: id1 },
      data: {
        price: price1 * quantity1,
        quantity: quantity1,
      },
    });

    console.log(products);

    return res.status(201).json(products);
  } catch (error) {
    console.log(error);

    return res.status(400).send(error);
  }
}
