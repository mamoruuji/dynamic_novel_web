/*
  Warnings:

  - You are about to drop the column `folder_id` on the `images` table. All the data in the column will be lost.
  - You are about to drop the column `font_id` on the `sections` table. All the data in the column will be lost.
  - You are about to drop the column `type_id` on the `sections` table. All the data in the column will be lost.
  - You are about to drop the `colors` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `fonts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `image_of_cover` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `sorts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `types` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[dynamic_id]` on the table `images` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "image_of_cover" DROP CONSTRAINT "image_of_cover_dynamic_id_fkey";

-- DropForeignKey
ALTER TABLE "image_of_cover" DROP CONSTRAINT "image_of_cover_user_id_fkey";

-- DropForeignKey
ALTER TABLE "images" DROP CONSTRAINT "images_folder_id_fkey";

-- DropForeignKey
ALTER TABLE "sections" DROP CONSTRAINT "sections_font_id_fkey";

-- DropForeignKey
ALTER TABLE "sections" DROP CONSTRAINT "sections_frame_color_id_fkey";

-- DropForeignKey
ALTER TABLE "sections" DROP CONSTRAINT "sections_text_color_id_fkey";

-- DropForeignKey
ALTER TABLE "sections" DROP CONSTRAINT "sections_type_id_fkey";

-- AlterTable
ALTER TABLE "images" DROP COLUMN "folder_id",
ADD COLUMN     "dynamic_id" INTEGER,
ADD COLUMN     "folcer_id" INTEGER,
ADD COLUMN     "type_of_Image_id" INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE "sections" DROP COLUMN "font_id",
DROP COLUMN "type_id",
ADD COLUMN     "type_of_animation_id" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "type_of_font_id" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "type_of_position_id" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "type_of_section_id" INTEGER NOT NULL DEFAULT 1;

-- DropTable
DROP TABLE "colors";

-- DropTable
DROP TABLE "fonts";

-- DropTable
DROP TABLE "image_of_cover";

-- DropTable
DROP TABLE "sorts";

-- DropTable
DROP TABLE "types";

-- CreateTable
CREATE TABLE "type_of_sections" (
    "type_of_section_id" SERIAL NOT NULL,
    "name" VARCHAR(30) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "type_of_sections_pkey" PRIMARY KEY ("type_of_section_id")
);

-- CreateTable
CREATE TABLE "type_of_positions" (
    "type_of_position_id" SERIAL NOT NULL,
    "name" VARCHAR(30) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "type_of_positions_pkey" PRIMARY KEY ("type_of_position_id")
);

-- CreateTable
CREATE TABLE "type_of_animations" (
    "type_of_animation_id" SERIAL NOT NULL,
    "name" VARCHAR(30) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "type_of_animations_pkey" PRIMARY KEY ("type_of_animation_id")
);

-- CreateTable
CREATE TABLE "type_of_colors" (
    "type_of_color_id" SERIAL NOT NULL,
    "name" VARCHAR(30) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "type_of_colors_pkey" PRIMARY KEY ("type_of_color_id")
);

-- CreateTable
CREATE TABLE "type_of_images" (
    "type_of_image_id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "ratio" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "type_of_images_pkey" PRIMARY KEY ("type_of_image_id")
);

-- CreateTable
CREATE TABLE "type_of_fonts" (
    "type_of_font_id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "type_of_fonts_pkey" PRIMARY KEY ("type_of_font_id")
);

-- CreateTable
CREATE TABLE "type_of_sorts" (
    "type_of_sort_id" SERIAL NOT NULL,
    "name" VARCHAR(30) NOT NULL,
    "sql" VARCHAR(50) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "type_of_sorts_pkey" PRIMARY KEY ("type_of_sort_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "type_of_sections_name_key" ON "type_of_sections"("name");

-- CreateIndex
CREATE UNIQUE INDEX "type_of_positions_name_key" ON "type_of_positions"("name");

-- CreateIndex
CREATE UNIQUE INDEX "type_of_animations_name_key" ON "type_of_animations"("name");

-- CreateIndex
CREATE UNIQUE INDEX "type_of_colors_name_key" ON "type_of_colors"("name");

-- CreateIndex
CREATE UNIQUE INDEX "type_of_images_name_key" ON "type_of_images"("name");

-- CreateIndex
CREATE UNIQUE INDEX "type_of_fonts_name_key" ON "type_of_fonts"("name");

-- CreateIndex
CREATE UNIQUE INDEX "images_dynamic_id_key" ON "images"("dynamic_id");

-- AddForeignKey
ALTER TABLE "sections" ADD CONSTRAINT "sections_type_of_section_id_fkey" FOREIGN KEY ("type_of_section_id") REFERENCES "type_of_sections"("type_of_section_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sections" ADD CONSTRAINT "sections_type_of_position_id_fkey" FOREIGN KEY ("type_of_position_id") REFERENCES "type_of_positions"("type_of_position_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sections" ADD CONSTRAINT "sections_type_of_animation_id_fkey" FOREIGN KEY ("type_of_animation_id") REFERENCES "type_of_animations"("type_of_animation_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sections" ADD CONSTRAINT "sections_type_of_font_id_fkey" FOREIGN KEY ("type_of_font_id") REFERENCES "type_of_fonts"("type_of_font_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sections" ADD CONSTRAINT "sections_frame_color_id_fkey" FOREIGN KEY ("frame_color_id") REFERENCES "type_of_colors"("type_of_color_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sections" ADD CONSTRAINT "sections_text_color_id_fkey" FOREIGN KEY ("text_color_id") REFERENCES "type_of_colors"("type_of_color_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "images" ADD CONSTRAINT "images_type_of_Image_id_fkey" FOREIGN KEY ("type_of_Image_id") REFERENCES "type_of_images"("type_of_image_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "images" ADD CONSTRAINT "images_dynamic_id_fkey" FOREIGN KEY ("dynamic_id") REFERENCES "dynamics"("dynamic_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "images" ADD CONSTRAINT "images_folcer_id_fkey" FOREIGN KEY ("folcer_id") REFERENCES "folders"("folder_id") ON DELETE SET NULL ON UPDATE CASCADE;
