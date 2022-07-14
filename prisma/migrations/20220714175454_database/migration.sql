/*
  Warnings:

  - You are about to drop the column `user_id` on the `Account` table. All the data in the column will be lost.
  - Added the required column `users_id` to the `Account` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Account" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "users_id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "provider_account_id" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,
    "oauth_token_secret" TEXT,
    "oauth_token" TEXT
);
INSERT INTO "new_Account" ("access_token", "expires_at", "id", "id_token", "oauth_token", "oauth_token_secret", "provider", "provider_account_id", "refresh_token", "scope", "session_state", "token_type", "type") SELECT "access_token", "expires_at", "id", "id_token", "oauth_token", "oauth_token_secret", "provider", "provider_account_id", "refresh_token", "scope", "session_state", "token_type", "type" FROM "Account";
DROP TABLE "Account";
ALTER TABLE "new_Account" RENAME TO "Account";
CREATE UNIQUE INDEX "Account_provider_provider_account_id_key" ON "Account"("provider", "provider_account_id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
