import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import { getSession } from "next-auth/react";

// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req: NextApiRequest, res: NextApiResponse) {
   const session = await getSession({ req });
   const { title, description, image, quantity, price, id } = req.body;
   // let id = id.toString();

   // Check if user is logged in
   if (!session) {
      return res.send("You need to login first");
   }

   // Check if product is in the cart
   const productExists = await prisma.products.count({
      where: { title: title },
   });

   if (productExists) {
      return res.send("Already Exists");
   }

   // Create Products
   const products = await prisma.products.create({
      data: {
         id,
         title,
         description,
         image,
         quantity,
         price,
         user: {
            connect: {
               email: session?.user?.email !== null ? session?.user?.email : "",
            },
         },
      },
      include: {
         user: true,
      },
   });

   return res.status(201).json(products);
}
