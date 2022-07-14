/*
  Warnings:

  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "users";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT,
    "email" TEXT,
    "password" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "emailVerified" DATETIME,
    "image" TEXT
);

-- CreateTable
CREATE TABLE "_AccountToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_AccountToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Account" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_AccountToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new__ProductToUser" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_ProductToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Product" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ProductToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
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
    CONSTRAINT "_SessionToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new__SessionToUser" ("A", "B") SELECT "A", "B" FROM "_SessionToUser";
DROP TABLE "_SessionToUser";
ALTER TABLE "new__SessionToUser" RENAME TO "_SessionToUser";
CREATE UNIQUE INDEX "_SessionToUser_AB_unique" ON "_SessionToUser"("A", "B");
CREATE INDEX "_SessionToUser_B_index" ON "_SessionToUser"("B");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_AccountToUser_AB_unique" ON "_AccountToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_AccountToUser_B_index" ON "_AccountToUser"("B");
