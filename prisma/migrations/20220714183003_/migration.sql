/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_AccountToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "User_email_key";

-- DropIndex
DROP INDEX "_AccountToUser_B_index";

-- DropIndex
DROP INDEX "_AccountToUser_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "User";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_AccountToUser";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "accountId" TEXT,
    CONSTRAINT "users_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new__ProductToUser" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_ProductToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Product" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ProductToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new__ProductToUser" ("A", "B") SELECT "A", "B" FROM "_ProductToUser";
DROP TABLE "_ProductToUser";
ALTER TABLE "new__ProductToUser" RENAME TO "_ProductToUser";
CREATE UNIQUE INDEX "_ProductToUser_AB_unique" ON "_ProductToUser"("A", "B");
CREATE INDEX "_ProductToUser_B_index" ON "_ProductToUser"("B");
CREATE TABLE "new__SessionToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_SessionToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "sessions" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_SessionToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new__SessionToUser" ("A", "B") SELECT "A", "B" FROM "_SessionToUser";
DROP TABLE "_SessionToUser";
ALTER TABLE "new__SessionToUser" RENAME TO "_SessionToUser";
CREATE UNIQUE INDEX "_SessionToUser_AB_unique" ON "_SessionToUser"("A", "B");
CREATE INDEX "_SessionToUser_B_index" ON "_SessionToUser"("B");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
