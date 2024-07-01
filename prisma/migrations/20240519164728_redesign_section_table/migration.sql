/*
  Warnings:

  - You are about to drop the column `bubble_id` on the `sections` table. All the data in the column will be lost.
  - You are about to drop the column `frame_color` on the `sections` table. All the data in the column will be lost.
  - You are about to drop the column `position_id` on the `sections` table. All the data in the column will be lost.
  - You are about to drop the column `text_color` on the `sections` table. All the data in the column will be lost.
  - You are about to drop the `bubbles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `positions` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `path` to the `images` table without a default value. This is not possible if the table is not empty.
  - Made the column `text` on table `sections` required. This step will fail if there are existing NULL values in that column.
  - Made the column `text_size` on table `sections` required. This step will fail if there are existing NULL values in that column.
  - Made the column `type_id` on table `sections` required. This step will fail if there are existing NULL values in that column.
  - Made the column `font_id` on table `sections` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "sections" DROP CONSTRAINT "sections_bubble_id_fkey";

-- DropForeignKey
ALTER TABLE "sections" DROP CONSTRAINT "sections_font_id_fkey";

-- DropForeignKey
ALTER TABLE "sections" DROP CONSTRAINT "sections_position_id_fkey";

-- DropForeignKey
ALTER TABLE "sections" DROP CONSTRAINT "sections_type_id_fkey";

-- AlterTable
ALTER TABLE "images" ADD COLUMN     "path" VARCHAR(2048) NOT NULL;

-- AlterTable
ALTER TABLE "sections" DROP COLUMN "bubble_id",
DROP COLUMN "frame_color",
DROP COLUMN "position_id",
DROP COLUMN "text_color",
ADD COLUMN     "frame_color_id" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "name" VARCHAR(255) NOT NULL DEFAULT '',
ADD COLUMN     "text_color_id" INTEGER NOT NULL DEFAULT 1,
ALTER COLUMN "text" SET NOT NULL,
ALTER COLUMN "text" SET DEFAULT '',
ALTER COLUMN "text_size" SET NOT NULL,
ALTER COLUMN "text_size" SET DEFAULT 16,
ALTER COLUMN "type_id" SET NOT NULL,
ALTER COLUMN "type_id" SET DEFAULT 1,
ALTER COLUMN "font_id" SET NOT NULL,
ALTER COLUMN "font_id" SET DEFAULT 1;

-- AlterTable
ALTER TABLE "types" ALTER COLUMN "name" SET DATA TYPE VARCHAR(30);

-- DropTable
DROP TABLE "bubbles";

-- DropTable
DROP TABLE "positions";

-- CreateTable
CREATE TABLE "colors" (
    "color_id" SERIAL NOT NULL,
    "name" VARCHAR(30) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "colors_pkey" PRIMARY KEY ("color_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "colors_name_key" ON "colors"("name");

-- AddForeignKey
ALTER TABLE "sections" ADD CONSTRAINT "sections_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "types"("type_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sections" ADD CONSTRAINT "sections_font_id_fkey" FOREIGN KEY ("font_id") REFERENCES "fonts"("font_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sections" ADD CONSTRAINT "sections_frame_color_id_fkey" FOREIGN KEY ("frame_color_id") REFERENCES "colors"("color_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sections" ADD CONSTRAINT "sections_text_color_id_fkey" FOREIGN KEY ("text_color_id") REFERENCES "colors"("color_id") ON DELETE RESTRICT ON UPDATE CASCADE;
