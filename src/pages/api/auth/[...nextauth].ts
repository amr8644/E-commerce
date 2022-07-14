import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],

  // session: {
  //   jwt: true,
  // },

  debug: true,
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
