/*
  Warnings:

  - You are about to drop the column `user_id` on the `sessions` table. All the data in the column will be lost.
  - Added the required column `users_id` to the `sessions` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_sessions" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "session_token" TEXT NOT NULL,
    "users_id" TEXT NOT NULL,
    "expires" DATETIME NOT NULL
);
INSERT INTO "new_sessions" ("expires", "id", "session_token") SELECT "expires", "id", "session_token" FROM "sessions";
DROP TABLE "sessions";
ALTER TABLE "new_sessions" RENAME TO "sessions";
CREATE UNIQUE INDEX "sessions_session_token_key" ON "sessions"("session_token");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
