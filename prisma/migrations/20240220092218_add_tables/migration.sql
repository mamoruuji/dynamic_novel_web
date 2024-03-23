/*
  Warnings:

  - The primary key for the `folders` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `group_id` on the `folders` table. All the data in the column will be lost.
  - You are about to drop the column `parentId` on the `folders` table. All the data in the column will be lost.
  - Made the column `name` on table `terms` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "folders" DROP CONSTRAINT "folders_parentId_fkey";

-- DropForeignKey
ALTER TABLE "images" DROP CONSTRAINT "images_folder_id_fkey";

-- AlterTable
ALTER TABLE "folders" DROP CONSTRAINT "folders_pkey",
DROP COLUMN "group_id",
DROP COLUMN "parentId",
ADD COLUMN     "folder_id" SERIAL NOT NULL,
ADD COLUMN     "parent_id" INTEGER,
ADD CONSTRAINT "folders_pkey" PRIMARY KEY ("folder_id");

-- AlterTable
ALTER TABLE "images" ALTER COLUMN "folder_id" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "impressions" ALTER COLUMN "rate" SET DEFAULT 1;

-- AlterTable
ALTER TABLE "sections" ALTER COLUMN "frame_color" DROP NOT NULL,
ALTER COLUMN "text_color" DROP NOT NULL,
ALTER COLUMN "text_size" DROP NOT NULL;

-- AlterTable
ALTER TABLE "terms" ALTER COLUMN "name" SET NOT NULL;

-- CreateTable
CREATE TABLE "tags" (
    "tag_id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tags_pkey" PRIMARY KEY ("tag_id")
);

-- CreateTable
CREATE TABLE "dynamics_on_tags" (
    "dynamics_on_tags_id" SERIAL NOT NULL,
    "dynamic_id" INTEGER NOT NULL,
    "tag_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "dynamics_on_tags_pkey" PRIMARY KEY ("dynamics_on_tags_id")
);

-- CreateTable
CREATE TABLE "sorts" (
    "sort_id" SERIAL NOT NULL,
    "name" VARCHAR(30) NOT NULL,
    "sql" VARCHAR(30) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sorts_pkey" PRIMARY KEY ("sort_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tags_name_key" ON "tags"("name");

-- AddForeignKey
ALTER TABLE "folders" ADD CONSTRAINT "folders_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "folders"("folder_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "images" ADD CONSTRAINT "images_folder_id_fkey" FOREIGN KEY ("folder_id") REFERENCES "folders"("folder_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dynamics_on_tags" ADD CONSTRAINT "dynamics_on_tags_dynamic_id_fkey" FOREIGN KEY ("dynamic_id") REFERENCES "dynamics"("dynamic_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dynamics_on_tags" ADD CONSTRAINT "dynamics_on_tags_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "tags"("tag_id") ON DELETE RESTRICT ON UPDATE CASCADE;
