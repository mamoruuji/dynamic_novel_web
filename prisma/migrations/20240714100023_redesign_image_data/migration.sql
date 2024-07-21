/*
  Warnings:

  - You are about to drop the column `dynamic_id` on the `images` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "images" DROP CONSTRAINT "images_dynamic_id_fkey";

-- DropIndex
DROP INDEX "images_dynamic_id_key";

-- AlterTable
ALTER TABLE "dynamics" ADD COLUMN     "image_id" INTEGER;

-- AlterTable
ALTER TABLE "images" DROP COLUMN "dynamic_id";

-- AddForeignKey
ALTER TABLE "dynamics" ADD CONSTRAINT "dynamics_image_id_fkey" FOREIGN KEY ("image_id") REFERENCES "images"("image_id") ON DELETE SET NULL ON UPDATE CASCADE;
