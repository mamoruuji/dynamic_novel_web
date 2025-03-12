/*
  Warnings:

  - You are about to drop the column `text_size` on the `sections` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "sections" DROP COLUMN "text_size",
ADD COLUMN     "text_size_id" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "type_bubble_id" INTEGER NOT NULL DEFAULT 1,
ALTER COLUMN "type_font_id" SET DEFAULT 3;

-- CreateTable
CREATE TABLE "type_sizes" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "value" VARCHAR(50) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "type_sizes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "type_sizes_name_key" ON "type_sizes"("name");

-- CreateIndex
CREATE UNIQUE INDEX "type_sizes_value_key" ON "type_sizes"("value");

-- AddForeignKey
ALTER TABLE "sections" ADD CONSTRAINT "sections_text_size_id_fkey" FOREIGN KEY ("text_size_id") REFERENCES "type_sizes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
