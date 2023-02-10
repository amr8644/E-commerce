import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";
import { getSession } from "next-auth/react";

interface ID {
   id: string;
}
// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req: NextApiRequest, res: NextApiResponse) {
   const session = await getSession({ req });
   const { id } = req.query!;
   // const idnum: number = Number(id);

   // console.log(typeof parseInt(id));

   // Check if user is logged in
   if (!session) {
      return res.status(401).send("You need to login first");
   }

   // Delete Products
   const products = await prisma.products.delete({
      where: {
         id: Number(id),
      },
   });

   return res.status(201).json(products);
}
