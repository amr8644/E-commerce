import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";
import { getSession } from "next-auth/react";

// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    const session = await getSession({ req });
    const { name, description, image, quantity, price } = req.body;

    // Check if product is in the cart
    const productExists = await prisma.product.count({ where: { name: name } });

    if (productExists) {
      return res.status(401).send("Already Exists");
    }

    // Create Products
    const products = await prisma.product.create({
      data: {
        name,
        description,
        image,
        quantity,
        price,
        users: {
          connect: {
            email: session?.user?.email !== null ? session?.user?.email : "",
          },
        },
      },
      include: {
        users: true,
      },
    });

    return res.status(201).json(products);
  } catch (error) {
    return res.status(400).send(error);
  }
}
