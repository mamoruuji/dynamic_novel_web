/*
  Warnings:

  - The primary key for the `chapters` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `chapter_id` on the `chapters` table. All the data in the column will be lost.
  - The primary key for the `dynamics` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `dynamic_id` on the `dynamics` table. All the data in the column will be lost.
  - The primary key for the `dynamics_on_tags` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `dynamics_on_tags_id` on the `dynamics_on_tags` table. All the data in the column will be lost.
  - The primary key for the `folders` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `folder_id` on the `folders` table. All the data in the column will be lost.
  - The primary key for the `follows` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `follow_id` on the `follows` table. All the data in the column will be lost.
  - The primary key for the `images` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `image_id` on the `images` table. All the data in the column will be lost.
  - The primary key for the `impressions` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `impression_id` on the `impressions` table. All the data in the column will be lost.
  - The primary key for the `pages` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `page_id` on the `pages` table. All the data in the column will be lost.
  - The primary key for the `sections` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `section_id` on the `sections` table. All the data in the column will be lost.
  - The primary key for the `tags` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `tag_id` on the `tags` table. All the data in the column will be lost.
  - The primary key for the `terms` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `term_id` on the `terms` table. All the data in the column will be lost.
  - The primary key for the `type_animations` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `type_animation_id` on the `type_animations` table. All the data in the column will be lost.
  - The primary key for the `type_colors` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `type_color_id` on the `type_colors` table. All the data in the column will be lost.
  - The primary key for the `type_fonts` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `type_font_id` on the `type_fonts` table. All the data in the column will be lost.
  - The primary key for the `type_images` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `type_image_id` on the `type_images` table. All the data in the column will be lost.
  - The primary key for the `type_positions` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `type_position_id` on the `type_positions` table. All the data in the column will be lost.
  - The primary key for the `type_sections` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `type_section_id` on the `type_sections` table. All the data in the column will be lost.
  - The primary key for the `type_sorts` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `type_sort_id` on the `type_sorts` table. All the data in the column will be lost.
  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `user_id` on the `users` table. All the data in the column will be lost.
  - The primary key for the `view_histories` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `view_history_id` on the `view_histories` table. All the data in the column will be lost.
  - The required column `id` was added to the `users` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "accounts" DROP CONSTRAINT "accounts_userId_fkey";

-- DropForeignKey
ALTER TABLE "chapters" DROP CONSTRAINT "chapters_dynamic_id_fkey";

-- DropForeignKey
ALTER TABLE "dynamics" DROP CONSTRAINT "dynamics_user_id_fkey";

-- DropForeignKey
ALTER TABLE "dynamics_on_tags" DROP CONSTRAINT "dynamics_on_tags_dynamic_id_fkey";

-- DropForeignKey
ALTER TABLE "dynamics_on_tags" DROP CONSTRAINT "dynamics_on_tags_tag_id_fkey";

-- DropForeignKey
ALTER TABLE "folders" DROP CONSTRAINT "folders_parent_id_fkey";

-- DropForeignKey
ALTER TABLE "folders" DROP CONSTRAINT "folders_user_id_fkey";

-- DropForeignKey
ALTER TABLE "follows" DROP CONSTRAINT "follows_followee_id_fkey";

-- DropForeignKey
ALTER TABLE "follows" DROP CONSTRAINT "follows_follower_id_fkey";

-- DropForeignKey
ALTER TABLE "images" DROP CONSTRAINT "images_folder_id_fkey";

-- DropForeignKey
ALTER TABLE "images" DROP CONSTRAINT "images_type_Image_id_fkey";

-- DropForeignKey
ALTER TABLE "images" DROP CONSTRAINT "images_user_id_fkey";

-- DropForeignKey
ALTER TABLE "impressions" DROP CONSTRAINT "impressions_dynamic_id_fkey";

-- DropForeignKey
ALTER TABLE "impressions" DROP CONSTRAINT "impressions_user_id_fkey";

-- DropForeignKey
ALTER TABLE "pages" DROP CONSTRAINT "pages_chapter_id_fkey";

-- DropForeignKey
ALTER TABLE "sections" DROP CONSTRAINT "sections_frame_color_id_fkey";

-- DropForeignKey
ALTER TABLE "sections" DROP CONSTRAINT "sections_page_id_fkey";

-- DropForeignKey
ALTER TABLE "sections" DROP CONSTRAINT "sections_text_color_id_fkey";

-- DropForeignKey
ALTER TABLE "sections" DROP CONSTRAINT "sections_type_animation_id_fkey";

-- DropForeignKey
ALTER TABLE "sections" DROP CONSTRAINT "sections_type_font_id_fkey";

-- DropForeignKey
ALTER TABLE "sections" DROP CONSTRAINT "sections_type_position_id_fkey";

-- DropForeignKey
ALTER TABLE "sections" DROP CONSTRAINT "sections_type_section_id_fkey";

-- DropForeignKey
ALTER TABLE "sessions" DROP CONSTRAINT "sessions_userId_fkey";

-- DropForeignKey
ALTER TABLE "terms" DROP CONSTRAINT "terms_chapter_id_fkey";

-- DropForeignKey
ALTER TABLE "terms" DROP CONSTRAINT "terms_dynamic_id_fkey";

-- DropForeignKey
ALTER TABLE "terms" DROP CONSTRAINT "terms_page_id_fkey";

-- DropForeignKey
ALTER TABLE "terms" DROP CONSTRAINT "terms_section_id_fkey";

-- DropForeignKey
ALTER TABLE "view_histories" DROP CONSTRAINT "view_histories_dynamic_id_fkey";

-- DropForeignKey
ALTER TABLE "view_histories" DROP CONSTRAINT "view_histories_page_id_fkey";

-- DropForeignKey
ALTER TABLE "view_histories" DROP CONSTRAINT "view_histories_user_id_fkey";

-- AlterTable
ALTER TABLE "chapters" DROP CONSTRAINT "chapters_pkey",
DROP COLUMN "chapter_id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "chapters_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "dynamics" DROP CONSTRAINT "dynamics_pkey",
DROP COLUMN "dynamic_id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "dynamics_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "dynamics_on_tags" DROP CONSTRAINT "dynamics_on_tags_pkey",
DROP COLUMN "dynamics_on_tags_id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "dynamics_on_tags_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "folders" DROP CONSTRAINT "folders_pkey",
DROP COLUMN "folder_id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "folders_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "follows" DROP CONSTRAINT "follows_pkey",
DROP COLUMN "follow_id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "follows_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "images" DROP CONSTRAINT "images_pkey",
DROP COLUMN "image_id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "images_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "impressions" DROP CONSTRAINT "impressions_pkey",
DROP COLUMN "impression_id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "impressions_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "pages" DROP CONSTRAINT "pages_pkey",
DROP COLUMN "page_id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "pages_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "sections" DROP CONSTRAINT "sections_pkey",
DROP COLUMN "section_id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "sections_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "tags" DROP CONSTRAINT "tags_pkey",
DROP COLUMN "tag_id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "tags_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "terms" DROP CONSTRAINT "terms_pkey",
DROP COLUMN "term_id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "terms_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "type_animations" DROP CONSTRAINT "type_animations_pkey",
DROP COLUMN "type_animation_id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "type_animations_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "type_colors" DROP CONSTRAINT "type_colors_pkey",
DROP COLUMN "type_color_id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "type_colors_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "type_fonts" DROP CONSTRAINT "type_fonts_pkey",
DROP COLUMN "type_font_id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "type_fonts_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "type_images" DROP CONSTRAINT "type_images_pkey",
DROP COLUMN "type_image_id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "type_images_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "type_positions" DROP CONSTRAINT "type_positions_pkey",
DROP COLUMN "type_position_id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "type_positions_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "type_sections" DROP CONSTRAINT "type_sections_pkey",
DROP COLUMN "type_section_id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "type_sections_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "type_sorts" DROP CONSTRAINT "type_sorts_pkey",
DROP COLUMN "type_sort_id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "type_sorts_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "users" DROP CONSTRAINT "users_pkey",
DROP COLUMN "user_id",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "view_histories" DROP CONSTRAINT "view_histories_pkey",
DROP COLUMN "view_history_id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "view_histories_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "accounts" ADD CONSTRAINT "accounts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dynamics" ADD CONSTRAINT "dynamics_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chapters" ADD CONSTRAINT "chapters_dynamic_id_fkey" FOREIGN KEY ("dynamic_id") REFERENCES "dynamics"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pages" ADD CONSTRAINT "pages_chapter_id_fkey" FOREIGN KEY ("chapter_id") REFERENCES "chapters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sections" ADD CONSTRAINT "sections_page_id_fkey" FOREIGN KEY ("page_id") REFERENCES "pages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sections" ADD CONSTRAINT "sections_type_section_id_fkey" FOREIGN KEY ("type_section_id") REFERENCES "type_sections"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sections" ADD CONSTRAINT "sections_type_position_id_fkey" FOREIGN KEY ("type_position_id") REFERENCES "type_positions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sections" ADD CONSTRAINT "sections_type_animation_id_fkey" FOREIGN KEY ("type_animation_id") REFERENCES "type_animations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sections" ADD CONSTRAINT "sections_type_font_id_fkey" FOREIGN KEY ("type_font_id") REFERENCES "type_fonts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sections" ADD CONSTRAINT "sections_frame_color_id_fkey" FOREIGN KEY ("frame_color_id") REFERENCES "type_colors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sections" ADD CONSTRAINT "sections_text_color_id_fkey" FOREIGN KEY ("text_color_id") REFERENCES "type_colors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "folders" ADD CONSTRAINT "folders_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "folders" ADD CONSTRAINT "folders_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "folders"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "images" ADD CONSTRAINT "images_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "images" ADD CONSTRAINT "images_type_Image_id_fkey" FOREIGN KEY ("type_Image_id") REFERENCES "type_images"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "images" ADD CONSTRAINT "images_folder_id_fkey" FOREIGN KEY ("folder_id") REFERENCES "folders"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "terms" ADD CONSTRAINT "terms_dynamic_id_fkey" FOREIGN KEY ("dynamic_id") REFERENCES "dynamics"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "terms" ADD CONSTRAINT "terms_chapter_id_fkey" FOREIGN KEY ("chapter_id") REFERENCES "chapters"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "terms" ADD CONSTRAINT "terms_page_id_fkey" FOREIGN KEY ("page_id") REFERENCES "pages"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "terms" ADD CONSTRAINT "terms_section_id_fkey" FOREIGN KEY ("section_id") REFERENCES "sections"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dynamics_on_tags" ADD CONSTRAINT "dynamics_on_tags_dynamic_id_fkey" FOREIGN KEY ("dynamic_id") REFERENCES "dynamics"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dynamics_on_tags" ADD CONSTRAINT "dynamics_on_tags_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "tags"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "follows" ADD CONSTRAINT "follows_follower_id_fkey" FOREIGN KEY ("follower_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "follows" ADD CONSTRAINT "follows_followee_id_fkey" FOREIGN KEY ("followee_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "impressions" ADD CONSTRAINT "impressions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "impressions" ADD CONSTRAINT "impressions_dynamic_id_fkey" FOREIGN KEY ("dynamic_id") REFERENCES "dynamics"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "view_histories" ADD CONSTRAINT "view_histories_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "view_histories" ADD CONSTRAINT "view_histories_dynamic_id_fkey" FOREIGN KEY ("dynamic_id") REFERENCES "dynamics"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "view_histories" ADD CONSTRAINT "view_histories_page_id_fkey" FOREIGN KEY ("page_id") REFERENCES "pages"("id") ON DELETE CASCADE ON UPDATE CASCADE;
