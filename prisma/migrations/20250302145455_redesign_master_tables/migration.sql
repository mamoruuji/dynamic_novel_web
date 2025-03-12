/*
  Warnings:

  - You are about to drop the column `type_of_Image_id` on the `images` table. All the data in the column will be lost.
  - You are about to drop the column `type_of_animation_id` on the `sections` table. All the data in the column will be lost.
  - You are about to drop the column `type_of_font_id` on the `sections` table. All the data in the column will be lost.
  - You are about to drop the column `type_of_position_id` on the `sections` table. All the data in the column will be lost.
  - You are about to drop the column `type_of_section_id` on the `sections` table. All the data in the column will be lost.
  - You are about to drop the `type_of_animations` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `type_of_colors` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `type_of_fonts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `type_of_images` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `type_of_positions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `type_of_sections` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `type_of_sorts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "images" DROP CONSTRAINT "images_type_of_Image_id_fkey";

-- DropForeignKey
ALTER TABLE "sections" DROP CONSTRAINT "sections_frame_color_id_fkey";

-- DropForeignKey
ALTER TABLE "sections" DROP CONSTRAINT "sections_text_color_id_fkey";

-- DropForeignKey
ALTER TABLE "sections" DROP CONSTRAINT "sections_type_of_animation_id_fkey";

-- DropForeignKey
ALTER TABLE "sections" DROP CONSTRAINT "sections_type_of_font_id_fkey";

-- DropForeignKey
ALTER TABLE "sections" DROP CONSTRAINT "sections_type_of_position_id_fkey";

-- DropForeignKey
ALTER TABLE "sections" DROP CONSTRAINT "sections_type_of_section_id_fkey";

-- AlterTable
ALTER TABLE "images" DROP COLUMN "type_of_Image_id",
ADD COLUMN     "type_Image_id" INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE "sections" DROP COLUMN "type_of_animation_id",
DROP COLUMN "type_of_font_id",
DROP COLUMN "type_of_position_id",
DROP COLUMN "type_of_section_id",
ADD COLUMN     "type_animation_id" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "type_font_id" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "type_position_id" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "type_section_id" INTEGER NOT NULL DEFAULT 1;

-- DropTable
DROP TABLE "type_of_animations";

-- DropTable
DROP TABLE "type_of_colors";

-- DropTable
DROP TABLE "type_of_fonts";

-- DropTable
DROP TABLE "type_of_images";

-- DropTable
DROP TABLE "type_of_positions";

-- DropTable
DROP TABLE "type_of_sections";

-- DropTable
DROP TABLE "type_of_sorts";

-- CreateTable
CREATE TABLE "type_animations" (
    "type_animation_id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "value" VARCHAR(50) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "type_animations_pkey" PRIMARY KEY ("type_animation_id")
);

-- CreateTable
CREATE TABLE "type_colors" (
    "type_color_id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "value" VARCHAR(50) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "type_colors_pkey" PRIMARY KEY ("type_color_id")
);

-- CreateTable
CREATE TABLE "type_fonts" (
    "type_font_id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "value" VARCHAR(50) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "type_fonts_pkey" PRIMARY KEY ("type_font_id")
);

-- CreateTable
CREATE TABLE "type_images" (
    "type_image_id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "value" VARCHAR(50) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "type_images_pkey" PRIMARY KEY ("type_image_id")
);

-- CreateTable
CREATE TABLE "type_positions" (
    "type_position_id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "value" VARCHAR(50) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "type_positions_pkey" PRIMARY KEY ("type_position_id")
);

-- CreateTable
CREATE TABLE "type_sections" (
    "type_section_id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "value" VARCHAR(50) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "type_sections_pkey" PRIMARY KEY ("type_section_id")
);

-- CreateTable
CREATE TABLE "type_sorts" (
    "type_sort_id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "value" VARCHAR(50) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "type_sorts_pkey" PRIMARY KEY ("type_sort_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "type_animations_name_key" ON "type_animations"("name");

-- CreateIndex
CREATE UNIQUE INDEX "type_animations_value_key" ON "type_animations"("value");

-- CreateIndex
CREATE UNIQUE INDEX "type_colors_name_key" ON "type_colors"("name");

-- CreateIndex
CREATE UNIQUE INDEX "type_colors_value_key" ON "type_colors"("value");

-- CreateIndex
CREATE UNIQUE INDEX "type_fonts_name_key" ON "type_fonts"("name");

-- CreateIndex
CREATE UNIQUE INDEX "type_fonts_value_key" ON "type_fonts"("value");

-- CreateIndex
CREATE UNIQUE INDEX "type_images_name_key" ON "type_images"("name");

-- CreateIndex
CREATE UNIQUE INDEX "type_images_value_key" ON "type_images"("value");

-- CreateIndex
CREATE UNIQUE INDEX "type_positions_name_key" ON "type_positions"("name");

-- CreateIndex
CREATE UNIQUE INDEX "type_positions_value_key" ON "type_positions"("value");

-- CreateIndex
CREATE UNIQUE INDEX "type_sections_name_key" ON "type_sections"("name");

-- CreateIndex
CREATE UNIQUE INDEX "type_sections_value_key" ON "type_sections"("value");

-- CreateIndex
CREATE UNIQUE INDEX "type_sorts_name_key" ON "type_sorts"("name");

-- CreateIndex
CREATE UNIQUE INDEX "type_sorts_value_key" ON "type_sorts"("value");

-- AddForeignKey
ALTER TABLE "sections" ADD CONSTRAINT "sections_type_section_id_fkey" FOREIGN KEY ("type_section_id") REFERENCES "type_sections"("type_section_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sections" ADD CONSTRAINT "sections_type_position_id_fkey" FOREIGN KEY ("type_position_id") REFERENCES "type_positions"("type_position_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sections" ADD CONSTRAINT "sections_type_animation_id_fkey" FOREIGN KEY ("type_animation_id") REFERENCES "type_animations"("type_animation_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sections" ADD CONSTRAINT "sections_type_font_id_fkey" FOREIGN KEY ("type_font_id") REFERENCES "type_fonts"("type_font_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sections" ADD CONSTRAINT "sections_frame_color_id_fkey" FOREIGN KEY ("frame_color_id") REFERENCES "type_colors"("type_color_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sections" ADD CONSTRAINT "sections_text_color_id_fkey" FOREIGN KEY ("text_color_id") REFERENCES "type_colors"("type_color_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "images" ADD CONSTRAINT "images_type_Image_id_fkey" FOREIGN KEY ("type_Image_id") REFERENCES "type_images"("type_image_id") ON DELETE RESTRICT ON UPDATE CASCADE;
