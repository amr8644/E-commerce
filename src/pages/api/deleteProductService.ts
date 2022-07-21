import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    const deleteProduct = await prisma.product.delete({
      where: { id: parseInt(req.body) },
    });

    return res.status(201).json(deleteProduct);
  } catch (error) {
    console.log(error);

    return res.status(400).send(error);
  }
}
