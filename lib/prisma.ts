import { PrismaClient } from "@prisma/client";

const { DATABASE_URL = "" } = process.env;

declare global {
   var prisma: PrismaClient | undefined;
}

const client =
   globalThis.prisma ||
   new PrismaClient({
      datasources: { db: { url: DATABASE_URL } },
   });
if (process.env.NODE_ENV !== "production") globalThis.prisma = client;

export default client;
