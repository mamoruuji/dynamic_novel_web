/*
  Warnings:

  - You are about to drop the column `title` on the `chapters` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `dynamics` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `impressions` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `pages` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `dynamics` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name,parent_id]` on the table `folders` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name,folder_id]` on the table `images` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[pen_name]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `impressions` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "chapters_dynamic_id_order_key";

-- DropIndex
DROP INDEX "chapters_dynamic_id_title_key";

-- DropIndex
DROP INDEX "dynamics_user_id_title_key";

-- DropIndex
DROP INDEX "folders_name_user_id_key";

-- DropIndex
DROP INDEX "images_name_user_id_key";

-- DropIndex
DROP INDEX "pages_chapter_id_order_key";

-- DropIndex
DROP INDEX "pages_chapter_id_title_key";

-- DropIndex
DROP INDEX "sections_order_page_id_key";

-- DropIndex
DROP INDEX "terms_order_chapter_id_key";

-- DropIndex
DROP INDEX "terms_order_dynamic_id_key";

-- DropIndex
DROP INDEX "terms_order_page_id_key";

-- AlterTable
ALTER TABLE "chapters" DROP COLUMN "title",
ADD COLUMN     "name" VARCHAR(255) NOT NULL DEFAULT '新しい章';

-- AlterTable
ALTER TABLE "dynamics" DROP COLUMN "title",
ADD COLUMN     "name" VARCHAR(255) NOT NULL DEFAULT '新しい作品';

-- AlterTable
ALTER TABLE "folders" ALTER COLUMN "name" SET DEFAULT '新しいフォルダ',
ALTER COLUMN "name" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "impressions" DROP COLUMN "title",
ADD COLUMN     "name" VARCHAR(30) NOT NULL;

-- AlterTable
ALTER TABLE "pages" DROP COLUMN "title",
ADD COLUMN     "name" VARCHAR(255) NOT NULL DEFAULT '新しいページ';

-- AlterTable
ALTER TABLE "sections" ALTER COLUMN "name" SET DEFAULT '新しいセクション';

-- AlterTable
ALTER TABLE "terms" ALTER COLUMN "name" SET DEFAULT '新しい用語',
ALTER COLUMN "name" SET DATA TYPE VARCHAR(255);

-- CreateIndex
CREATE UNIQUE INDEX "dynamics_name_key" ON "dynamics"("name");

-- CreateIndex
CREATE UNIQUE INDEX "folders_name_parent_id_key" ON "folders"("name", "parent_id");

-- CreateIndex
CREATE UNIQUE INDEX "images_name_folder_id_key" ON "images"("name", "folder_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_pen_name_key" ON "users"("pen_name");
