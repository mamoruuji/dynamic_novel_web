/*
  Warnings:

  - You are about to drop the `chapter_terms` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `dynamic_terms` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `images` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `page_terms` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `section_terms` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "chapter_terms" DROP CONSTRAINT "chapter_terms_chapter_id_fkey";

-- DropForeignKey
ALTER TABLE "chapter_terms" DROP CONSTRAINT "chapter_terms_image_id_fkey";

-- DropForeignKey
ALTER TABLE "dynamic_terms" DROP CONSTRAINT "dynamic_terms_dynamic_id_fkey";

-- DropForeignKey
ALTER TABLE "dynamic_terms" DROP CONSTRAINT "dynamic_terms_image_id_fkey";

-- DropForeignKey
ALTER TABLE "images" DROP CONSTRAINT "images_folder_id_fkey";

-- DropForeignKey
ALTER TABLE "images" DROP CONSTRAINT "images_user_id_fkey";

-- DropForeignKey
ALTER TABLE "page_terms" DROP CONSTRAINT "page_terms_chapter_id_fkey";

-- DropForeignKey
ALTER TABLE "page_terms" DROP CONSTRAINT "page_terms_image_id_fkey";

-- DropForeignKey
ALTER TABLE "section_terms" DROP CONSTRAINT "section_terms_image_id_fkey";

-- DropForeignKey
ALTER TABLE "section_terms" DROP CONSTRAINT "section_terms_section_id_fkey";

-- DropForeignKey
ALTER TABLE "sections" DROP CONSTRAINT "sections_image_id_fkey";

-- AlterTable
ALTER TABLE "sections" ADD COLUMN     "term_id" INTEGER;

-- DropTable
DROP TABLE "chapter_terms";

-- DropTable
DROP TABLE "dynamic_terms";

-- DropTable
DROP TABLE "images";

-- DropTable
DROP TABLE "page_terms";

-- DropTable
DROP TABLE "section_terms";

-- CreateTable
CREATE TABLE "image_of_cover" (
    "cover_image_id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "user_id" TEXT NOT NULL,
    "dynamic_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "image_of_cover_pkey" PRIMARY KEY ("cover_image_id")
);

-- CreateTable
CREATE TABLE "images_of_term" (
    "term_image_id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "user_id" TEXT NOT NULL,
    "path" VARCHAR(2048) NOT NULL,
    "folder_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "images_of_term_pkey" PRIMARY KEY ("term_image_id")
);

-- CreateTable
CREATE TABLE "terms_of_dynamic" (
    "dynamic_term_id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "text" VARCHAR(200) NOT NULL,
    "order" INTEGER NOT NULL,
    "dynamic_id" INTEGER NOT NULL,
    "image_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "terms_of_dynamic_pkey" PRIMARY KEY ("dynamic_term_id")
);

-- CreateTable
CREATE TABLE "terms_of_chapter" (
    "chapter_term_id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "text" VARCHAR(200) NOT NULL,
    "order" INTEGER NOT NULL,
    "chapter_id" INTEGER NOT NULL,
    "image_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "terms_of_chapter_pkey" PRIMARY KEY ("chapter_term_id")
);

-- CreateTable
CREATE TABLE "terms_of_page" (
    "page_term_id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "text" VARCHAR(200) NOT NULL,
    "order" INTEGER NOT NULL,
    "chapter_id" INTEGER NOT NULL,
    "image_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "terms_of_page_pkey" PRIMARY KEY ("page_term_id")
);

-- CreateTable
CREATE TABLE "terms_of_section" (
    "section_term_id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "text" VARCHAR(200) NOT NULL,
    "section_id" INTEGER NOT NULL,
    "image_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "terms_of_section_pkey" PRIMARY KEY ("section_term_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "image_of_cover_dynamic_id_key" ON "image_of_cover"("dynamic_id");

-- CreateIndex
CREATE UNIQUE INDEX "image_of_cover_name_user_id_key" ON "image_of_cover"("name", "user_id");

-- CreateIndex
CREATE UNIQUE INDEX "images_of_term_name_user_id_key" ON "images_of_term"("name", "user_id");

-- CreateIndex
CREATE UNIQUE INDEX "terms_of_dynamic_order_dynamic_id_key" ON "terms_of_dynamic"("order", "dynamic_id");

-- CreateIndex
CREATE UNIQUE INDEX "terms_of_chapter_order_chapter_id_key" ON "terms_of_chapter"("order", "chapter_id");

-- CreateIndex
CREATE UNIQUE INDEX "terms_of_page_order_chapter_id_key" ON "terms_of_page"("order", "chapter_id");

-- CreateIndex
CREATE UNIQUE INDEX "terms_of_section_section_id_key" ON "terms_of_section"("section_id");

-- AddForeignKey
ALTER TABLE "sections" ADD CONSTRAINT "sections_image_id_fkey" FOREIGN KEY ("image_id") REFERENCES "images_of_term"("term_image_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "image_of_cover" ADD CONSTRAINT "image_of_cover_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "image_of_cover" ADD CONSTRAINT "image_of_cover_dynamic_id_fkey" FOREIGN KEY ("dynamic_id") REFERENCES "dynamics"("dynamic_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "images_of_term" ADD CONSTRAINT "images_of_term_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "images_of_term" ADD CONSTRAINT "images_of_term_folder_id_fkey" FOREIGN KEY ("folder_id") REFERENCES "folders"("folder_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "terms_of_dynamic" ADD CONSTRAINT "terms_of_dynamic_image_id_fkey" FOREIGN KEY ("image_id") REFERENCES "images_of_term"("term_image_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "terms_of_dynamic" ADD CONSTRAINT "terms_of_dynamic_dynamic_id_fkey" FOREIGN KEY ("dynamic_id") REFERENCES "dynamics"("dynamic_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "terms_of_chapter" ADD CONSTRAINT "terms_of_chapter_image_id_fkey" FOREIGN KEY ("image_id") REFERENCES "images_of_term"("term_image_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "terms_of_chapter" ADD CONSTRAINT "terms_of_chapter_chapter_id_fkey" FOREIGN KEY ("chapter_id") REFERENCES "chapters"("chapter_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "terms_of_page" ADD CONSTRAINT "terms_of_page_chapter_id_fkey" FOREIGN KEY ("chapter_id") REFERENCES "pages"("page_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "terms_of_page" ADD CONSTRAINT "terms_of_page_image_id_fkey" FOREIGN KEY ("image_id") REFERENCES "images_of_term"("term_image_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "terms_of_section" ADD CONSTRAINT "terms_of_section_section_id_fkey" FOREIGN KEY ("section_id") REFERENCES "sections"("section_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "terms_of_section" ADD CONSTRAINT "terms_of_section_image_id_fkey" FOREIGN KEY ("image_id") REFERENCES "images_of_term"("term_image_id") ON DELETE SET NULL ON UPDATE CASCADE;
