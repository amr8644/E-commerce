import { NextApiRequest,NextApiResponse } from "next"
import { PrismaClient } from "@prisma/client"
import { getSession } from "next-auth/react"
import { type } from "os"


const prisma = new PrismaClient()

// type User={
//     username:string
//     email:string
//    password:string
// }

// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req:NextApiRequest,res:NextApiResponse ) {
  try {

    const userData = JSON.parse(req.body)
    const session = await getSession({req});
    if (!session) {
        return res.status(401)
    }

    const users = await prisma.user.create({data:userData})

    return res.status(201).json(users)
  } catch (error) {
    console.log(error);
    return res.status(500).send(error)
    
  }
}

