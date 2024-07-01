/*
  Warnings:

  - You are about to drop the `images_of_term` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `terms_of_chapter` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `terms_of_dynamic` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `terms_of_page` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `terms_of_section` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "images_of_term" DROP CONSTRAINT "images_of_term_folder_id_fkey";

-- DropForeignKey
ALTER TABLE "images_of_term" DROP CONSTRAINT "images_of_term_user_id_fkey";

-- DropForeignKey
ALTER TABLE "sections" DROP CONSTRAINT "sections_image_id_fkey";

-- DropForeignKey
ALTER TABLE "terms_of_chapter" DROP CONSTRAINT "terms_of_chapter_chapter_id_fkey";

-- DropForeignKey
ALTER TABLE "terms_of_chapter" DROP CONSTRAINT "terms_of_chapter_image_id_fkey";

-- DropForeignKey
ALTER TABLE "terms_of_dynamic" DROP CONSTRAINT "terms_of_dynamic_dynamic_id_fkey";

-- DropForeignKey
ALTER TABLE "terms_of_dynamic" DROP CONSTRAINT "terms_of_dynamic_image_id_fkey";

-- DropForeignKey
ALTER TABLE "terms_of_page" DROP CONSTRAINT "terms_of_page_chapter_id_fkey";

-- DropForeignKey
ALTER TABLE "terms_of_page" DROP CONSTRAINT "terms_of_page_image_id_fkey";

-- DropForeignKey
ALTER TABLE "terms_of_section" DROP CONSTRAINT "terms_of_section_image_id_fkey";

-- DropForeignKey
ALTER TABLE "terms_of_section" DROP CONSTRAINT "terms_of_section_section_id_fkey";

-- DropTable
DROP TABLE "images_of_term";

-- DropTable
DROP TABLE "terms_of_chapter";

-- DropTable
DROP TABLE "terms_of_dynamic";

-- DropTable
DROP TABLE "terms_of_page";

-- DropTable
DROP TABLE "terms_of_section";

-- CreateTable
CREATE TABLE "images" (
    "image_id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "user_id" TEXT NOT NULL,
    "path" VARCHAR(2048) NOT NULL,
    "folder_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "images_pkey" PRIMARY KEY ("image_id")
);

-- CreateTable
CREATE TABLE "terms" (
    "term_id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "text" VARCHAR(200) NOT NULL,
    "order" INTEGER NOT NULL,
    "dynamic_id" INTEGER,
    "chapter_id" INTEGER,
    "page_id" INTEGER,
    "section_id" INTEGER,
    "image_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "terms_pkey" PRIMARY KEY ("term_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "images_name_user_id_key" ON "images"("name", "user_id");

-- CreateIndex
CREATE UNIQUE INDEX "terms_order_dynamic_id_key" ON "terms"("order", "dynamic_id");

-- CreateIndex
CREATE UNIQUE INDEX "terms_order_chapter_id_key" ON "terms"("order", "chapter_id");

-- CreateIndex
CREATE UNIQUE INDEX "terms_order_page_id_key" ON "terms"("order", "page_id");

-- AddForeignKey
ALTER TABLE "sections" ADD CONSTRAINT "sections_image_id_fkey" FOREIGN KEY ("image_id") REFERENCES "images"("image_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "images" ADD CONSTRAINT "images_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "images" ADD CONSTRAINT "images_folder_id_fkey" FOREIGN KEY ("folder_id") REFERENCES "folders"("folder_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "terms" ADD CONSTRAINT "terms_dynamic_id_fkey" FOREIGN KEY ("dynamic_id") REFERENCES "dynamics"("dynamic_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "terms" ADD CONSTRAINT "terms_chapter_id_fkey" FOREIGN KEY ("chapter_id") REFERENCES "chapters"("chapter_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "terms" ADD CONSTRAINT "terms_page_id_fkey" FOREIGN KEY ("page_id") REFERENCES "pages"("page_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "terms" ADD CONSTRAINT "terms_section_id_fkey" FOREIGN KEY ("section_id") REFERENCES "sections"("section_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "terms" ADD CONSTRAINT "terms_image_id_fkey" FOREIGN KEY ("image_id") REFERENCES "images"("image_id") ON DELETE SET NULL ON UPDATE CASCADE;
