import FacebookProvider from "next-auth/providers/facebook";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient({
   datasources: { db: { url: process.env.DATABASE_URL } },
});

export const authOptions: NextAuthOptions = {
   adapter: PrismaAdapter(prisma),
   providers: [
      GoogleProvider({
         clientId: process.env.GOOGLE_ID as string,
         clientSecret: process.env.GOOGLE_SECRET as string,
      }),

      CredentialsProvider({
         name: "Credentials",
         credentials: {
            email: { label: "Email", type: "email", placeholder: "Email" },
            password: { label: "Password", type: "password" },
         },

         async authorize(credentials: any) {
            const password =
               credentials?.password !== undefined
                  ? credentials?.password
                  : ""!;

            // Check if user exists
            const userData = await prisma.user.findFirst({
               where: { email: credentials?.email },
               select: {
                  password: true,
                  id: true,
                  email: true,
                  name: true,
                  image: true,
               },
            });

            // Compare Password
            if (
               userData &&
               (await bcrypt.compare(
                  password,
                  userData.password !== null ? userData.password : ""!
               ))
            ) {
               return {
                  name: userData.name,
                  email: userData.email,
                  image: userData.image,
               };
            } else {
               return null;
            }
         },
      }),
   ],

   session: {
      strategy: "jwt",
      maxAge: 30 * 24 * 60 * 60,
   },

   callbacks: {
      session: async ({ session, token }: any) => {
         if (session?.user) {
            session.user.id = token.uid;
         }
         return session;
      },
      jwt: async ({ user, token }: any) => {
         if (user) {
            token.uid = user.id;
         }
         return token;
      },
   },

   pages: {
      error: "/error",
   },

   debug: true,
   secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
