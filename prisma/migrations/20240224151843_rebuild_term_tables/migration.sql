/*
  Warnings:

  - You are about to drop the column `term_id` on the `sections` table. All the data in the column will be lost.
  - You are about to drop the `chapers_on_terms` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `dynamics_on_terms` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `terms` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "chapers_on_terms" DROP CONSTRAINT "chapers_on_terms_chapers_id_fkey";

-- DropForeignKey
ALTER TABLE "chapers_on_terms" DROP CONSTRAINT "chapers_on_terms_term_id_fkey";

-- DropForeignKey
ALTER TABLE "dynamics_on_terms" DROP CONSTRAINT "dynamics_on_terms_dynamic_id_fkey";

-- DropForeignKey
ALTER TABLE "dynamics_on_terms" DROP CONSTRAINT "dynamics_on_terms_term_id_fkey";

-- DropForeignKey
ALTER TABLE "sections" DROP CONSTRAINT "sections_term_id_fkey";

-- DropForeignKey
ALTER TABLE "terms" DROP CONSTRAINT "terms_image_id_fkey";

-- DropForeignKey
ALTER TABLE "terms" DROP CONSTRAINT "terms_user_id_fkey";

-- AlterTable
ALTER TABLE "sections" DROP COLUMN "term_id";

-- DropTable
DROP TABLE "chapers_on_terms";

-- DropTable
DROP TABLE "dynamics_on_terms";

-- DropTable
DROP TABLE "terms";

-- CreateTable
CREATE TABLE "dynamic_terms" (
    "dynamic_term_id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "text" VARCHAR(200) NOT NULL,
    "order" INTEGER NOT NULL,
    "dynamic_id" INTEGER NOT NULL,
    "image_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "dynamic_terms_pkey" PRIMARY KEY ("dynamic_term_id")
);

-- CreateTable
CREATE TABLE "chapter_terms" (
    "chapter_term_id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "text" VARCHAR(200) NOT NULL,
    "order" INTEGER NOT NULL,
    "chapter_id" INTEGER NOT NULL,
    "image_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "chapter_terms_pkey" PRIMARY KEY ("chapter_term_id")
);

-- CreateTable
CREATE TABLE "page_terms" (
    "page_term_id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "text" VARCHAR(200) NOT NULL,
    "order" INTEGER NOT NULL,
    "chapter_id" INTEGER NOT NULL,
    "image_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "page_terms_pkey" PRIMARY KEY ("page_term_id")
);

-- CreateTable
CREATE TABLE "section_terms" (
    "section_term_id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "text" VARCHAR(200) NOT NULL,
    "section_id" INTEGER NOT NULL,
    "image_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "section_terms_pkey" PRIMARY KEY ("section_term_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "dynamic_terms_order_dynamic_id_key" ON "dynamic_terms"("order", "dynamic_id");

-- CreateIndex
CREATE UNIQUE INDEX "chapter_terms_order_chapter_id_key" ON "chapter_terms"("order", "chapter_id");

-- CreateIndex
CREATE UNIQUE INDEX "page_terms_order_chapter_id_key" ON "page_terms"("order", "chapter_id");

-- CreateIndex
CREATE UNIQUE INDEX "section_terms_section_id_key" ON "section_terms"("section_id");

-- AddForeignKey
ALTER TABLE "dynamic_terms" ADD CONSTRAINT "dynamic_terms_image_id_fkey" FOREIGN KEY ("image_id") REFERENCES "images"("image_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dynamic_terms" ADD CONSTRAINT "dynamic_terms_dynamic_id_fkey" FOREIGN KEY ("dynamic_id") REFERENCES "dynamics"("dynamic_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chapter_terms" ADD CONSTRAINT "chapter_terms_image_id_fkey" FOREIGN KEY ("image_id") REFERENCES "images"("image_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chapter_terms" ADD CONSTRAINT "chapter_terms_chapter_id_fkey" FOREIGN KEY ("chapter_id") REFERENCES "chapters"("chapter_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "page_terms" ADD CONSTRAINT "page_terms_chapter_id_fkey" FOREIGN KEY ("chapter_id") REFERENCES "pages"("page_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "page_terms" ADD CONSTRAINT "page_terms_image_id_fkey" FOREIGN KEY ("image_id") REFERENCES "images"("image_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "section_terms" ADD CONSTRAINT "section_terms_section_id_fkey" FOREIGN KEY ("section_id") REFERENCES "sections"("section_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "section_terms" ADD CONSTRAINT "section_terms_image_id_fkey" FOREIGN KEY ("image_id") REFERENCES "images"("image_id") ON DELETE SET NULL ON UPDATE CASCADE;
