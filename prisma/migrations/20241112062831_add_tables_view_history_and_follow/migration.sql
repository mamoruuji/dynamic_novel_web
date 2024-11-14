/*
  Warnings:

  - You are about to drop the column `image_id` on the `dynamics` table. All the data in the column will be lost.
  - You are about to drop the column `image_id` on the `sections` table. All the data in the column will be lost.
  - You are about to drop the column `image_id` on the `terms` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `marks` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "dynamics" DROP CONSTRAINT "dynamics_image_id_fkey";

-- DropForeignKey
ALTER TABLE "marks" DROP CONSTRAINT "marks_dynamic_id_fkey";

-- DropForeignKey
ALTER TABLE "marks" DROP CONSTRAINT "marks_user_id_fkey";

-- DropForeignKey
ALTER TABLE "sections" DROP CONSTRAINT "sections_image_id_fkey";

-- DropForeignKey
ALTER TABLE "terms" DROP CONSTRAINT "terms_image_id_fkey";

-- AlterTable
ALTER TABLE "dynamics" DROP COLUMN "image_id",
ADD COLUMN     "image_url" TEXT NOT NULL DEFAULT 'no_image';

-- AlterTable
ALTER TABLE "impressions" ADD COLUMN     "published" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "sections" DROP COLUMN "image_id",
ADD COLUMN     "image_url" TEXT NOT NULL DEFAULT 'no_image';

-- AlterTable
ALTER TABLE "terms" DROP COLUMN "image_id",
ADD COLUMN     "image_url" TEXT NOT NULL DEFAULT 'no_image';

-- AlterTable
ALTER TABLE "users" DROP COLUMN "image",
ADD COLUMN     "image_url" TEXT NOT NULL DEFAULT 'no_image',
ADD COLUMN     "pen_name" VARCHAR(255) NOT NULL DEFAULT '無名',
ADD COLUMN     "text" VARCHAR(500) NOT NULL DEFAULT '';

-- DropTable
DROP TABLE "marks";

-- CreateTable
CREATE TABLE "follows" (
    "follow_id" SERIAL NOT NULL,
    "follower_id" TEXT NOT NULL,
    "followee_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "follows_pkey" PRIMARY KEY ("follow_id")
);

-- CreateTable
CREATE TABLE "view_histories" (
    "view_history_id" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "dynamic_id" INTEGER NOT NULL,
    "page_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "view_histories_pkey" PRIMARY KEY ("view_history_id")
);

-- CreateIndex
CREATE INDEX "follows_follower_id_idx" ON "follows"("follower_id");

-- CreateIndex
CREATE INDEX "follows_followee_id_idx" ON "follows"("followee_id");

-- CreateIndex
CREATE UNIQUE INDEX "follows_follower_id_followee_id_key" ON "follows"("follower_id", "followee_id");

-- CreateIndex
CREATE INDEX "view_histories_user_id_created_at_idx" ON "view_histories"("user_id", "created_at");

-- CreateIndex
CREATE UNIQUE INDEX "view_histories_user_id_dynamic_id_key" ON "view_histories"("user_id", "dynamic_id");

-- AddForeignKey
ALTER TABLE "follows" ADD CONSTRAINT "follows_follower_id_fkey" FOREIGN KEY ("follower_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "follows" ADD CONSTRAINT "follows_followee_id_fkey" FOREIGN KEY ("followee_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "view_histories" ADD CONSTRAINT "view_histories_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "view_histories" ADD CONSTRAINT "view_histories_dynamic_id_fkey" FOREIGN KEY ("dynamic_id") REFERENCES "dynamics"("dynamic_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "view_histories" ADD CONSTRAINT "view_histories_page_id_fkey" FOREIGN KEY ("page_id") REFERENCES "pages"("page_id") ON DELETE CASCADE ON UPDATE CASCADE;
