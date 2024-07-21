-- CreateTable
CREATE TABLE "users" (
    "user_id" TEXT NOT NULL,
    "name" VARCHAR(30) NOT NULL,
    "email" VARCHAR(319) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "dynamics" (
    "dynamic_id" SERIAL NOT NULL,
    "title" VARCHAR(50) NOT NULL,
    "overview" VARCHAR(500) NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "dynamics_pkey" PRIMARY KEY ("dynamic_id")
);

-- CreateTable
CREATE TABLE "chapters" (
    "chapter_id" SERIAL NOT NULL,
    "title" VARCHAR(50) NOT NULL,
    "order" INTEGER NOT NULL,
    "dynamic_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "chapters_pkey" PRIMARY KEY ("chapter_id")
);

-- CreateTable
CREATE TABLE "pages" (
    "page_id" SERIAL NOT NULL,
    "title" VARCHAR(50) NOT NULL,
    "order" INTEGER NOT NULL,
    "chapter_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "pages_pkey" PRIMARY KEY ("page_id")
);

-- CreateTable
CREATE TABLE "sections" (
    "section_id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL DEFAULT '',
    "order" INTEGER NOT NULL,
    "type_of_section_id" INTEGER NOT NULL DEFAULT 1,
    "type_of_position_id" INTEGER NOT NULL DEFAULT 1,
    "type_of_animation_id" INTEGER NOT NULL DEFAULT 1,
    "image_id" INTEGER,
    "frame_color_id" INTEGER NOT NULL DEFAULT 1,
    "type_of_font_id" INTEGER NOT NULL DEFAULT 1,
    "text" TEXT NOT NULL DEFAULT '',
    "text_color_id" INTEGER NOT NULL DEFAULT 1,
    "text_size" INTEGER NOT NULL DEFAULT 16,
    "page_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sections_pkey" PRIMARY KEY ("section_id")
);

-- CreateTable
CREATE TABLE "folders" (
    "folder_id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "user_id" TEXT NOT NULL,
    "parent_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "folders_pkey" PRIMARY KEY ("folder_id")
);

-- CreateTable
CREATE TABLE "impressions" (
    "impression_id" SERIAL NOT NULL,
    "rate" INTEGER NOT NULL DEFAULT 1,
    "title" VARCHAR(30) NOT NULL,
    "text" VARCHAR(500) NOT NULL,
    "user_id" TEXT NOT NULL,
    "dynamic_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "impressions_pkey" PRIMARY KEY ("impression_id")
);

-- CreateTable
CREATE TABLE "marks" (
    "mark_id" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "dynamic_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "marks_pkey" PRIMARY KEY ("mark_id")
);

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
CREATE TABLE "images" (
    "image_id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "path" VARCHAR(2048) NOT NULL,
    "user_id" TEXT NOT NULL,
    "type_of_Image_id" INTEGER NOT NULL DEFAULT 1,
    "dynamic_id" INTEGER,
    "folder_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "images_pkey" PRIMARY KEY ("image_id")
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
CREATE TABLE "type_of_sorts" (
    "type_of_sort_id" SERIAL NOT NULL,
    "name" VARCHAR(30) NOT NULL,
    "sql" VARCHAR(50) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "type_of_sorts_pkey" PRIMARY KEY ("type_of_sort_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "dynamics_user_id_title_key" ON "dynamics"("user_id", "title");

-- CreateIndex
CREATE UNIQUE INDEX "chapters_dynamic_id_title_key" ON "chapters"("dynamic_id", "title");

-- CreateIndex
CREATE UNIQUE INDEX "chapters_dynamic_id_order_key" ON "chapters"("dynamic_id", "order");

-- CreateIndex
CREATE UNIQUE INDEX "pages_chapter_id_title_key" ON "pages"("chapter_id", "title");

-- CreateIndex
CREATE UNIQUE INDEX "pages_chapter_id_order_key" ON "pages"("chapter_id", "order");

-- CreateIndex
CREATE UNIQUE INDEX "sections_order_page_id_key" ON "sections"("order", "page_id");

-- CreateIndex
CREATE UNIQUE INDEX "folders_name_user_id_key" ON "folders"("name", "user_id");

-- CreateIndex
CREATE UNIQUE INDEX "impressions_user_id_dynamic_id_key" ON "impressions"("user_id", "dynamic_id");

-- CreateIndex
CREATE UNIQUE INDEX "marks_user_id_dynamic_id_key" ON "marks"("user_id", "dynamic_id");

-- CreateIndex
CREATE UNIQUE INDEX "type_of_sections_name_key" ON "type_of_sections"("name");

-- CreateIndex
CREATE UNIQUE INDEX "type_of_positions_name_key" ON "type_of_positions"("name");

-- CreateIndex
CREATE UNIQUE INDEX "type_of_animations_name_key" ON "type_of_animations"("name");

-- CreateIndex
CREATE UNIQUE INDEX "type_of_colors_name_key" ON "type_of_colors"("name");

-- CreateIndex
CREATE UNIQUE INDEX "images_dynamic_id_key" ON "images"("dynamic_id");

-- CreateIndex
CREATE UNIQUE INDEX "images_name_user_id_key" ON "images"("name", "user_id");

-- CreateIndex
CREATE UNIQUE INDEX "type_of_images_name_key" ON "type_of_images"("name");

-- CreateIndex
CREATE UNIQUE INDEX "type_of_fonts_name_key" ON "type_of_fonts"("name");

-- CreateIndex
CREATE UNIQUE INDEX "terms_order_dynamic_id_key" ON "terms"("order", "dynamic_id");

-- CreateIndex
CREATE UNIQUE INDEX "terms_order_chapter_id_key" ON "terms"("order", "chapter_id");

-- CreateIndex
CREATE UNIQUE INDEX "terms_order_page_id_key" ON "terms"("order", "page_id");

-- CreateIndex
CREATE UNIQUE INDEX "tags_name_key" ON "tags"("name");

-- AddForeignKey
ALTER TABLE "dynamics" ADD CONSTRAINT "dynamics_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chapters" ADD CONSTRAINT "chapters_dynamic_id_fkey" FOREIGN KEY ("dynamic_id") REFERENCES "dynamics"("dynamic_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pages" ADD CONSTRAINT "pages_chapter_id_fkey" FOREIGN KEY ("chapter_id") REFERENCES "chapters"("chapter_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sections" ADD CONSTRAINT "sections_page_id_fkey" FOREIGN KEY ("page_id") REFERENCES "pages"("page_id") ON DELETE RESTRICT ON UPDATE CASCADE;

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
ALTER TABLE "sections" ADD CONSTRAINT "sections_image_id_fkey" FOREIGN KEY ("image_id") REFERENCES "images"("image_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "folders" ADD CONSTRAINT "folders_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "folders" ADD CONSTRAINT "folders_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "folders"("folder_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "impressions" ADD CONSTRAINT "impressions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "impressions" ADD CONSTRAINT "impressions_dynamic_id_fkey" FOREIGN KEY ("dynamic_id") REFERENCES "dynamics"("dynamic_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "marks" ADD CONSTRAINT "marks_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "marks" ADD CONSTRAINT "marks_dynamic_id_fkey" FOREIGN KEY ("dynamic_id") REFERENCES "dynamics"("dynamic_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "images" ADD CONSTRAINT "images_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "images" ADD CONSTRAINT "images_type_of_Image_id_fkey" FOREIGN KEY ("type_of_Image_id") REFERENCES "type_of_images"("type_of_image_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "images" ADD CONSTRAINT "images_dynamic_id_fkey" FOREIGN KEY ("dynamic_id") REFERENCES "dynamics"("dynamic_id") ON DELETE SET NULL ON UPDATE CASCADE;

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

-- AddForeignKey
ALTER TABLE "dynamics_on_tags" ADD CONSTRAINT "dynamics_on_tags_dynamic_id_fkey" FOREIGN KEY ("dynamic_id") REFERENCES "dynamics"("dynamic_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dynamics_on_tags" ADD CONSTRAINT "dynamics_on_tags_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "tags"("tag_id") ON DELETE RESTRICT ON UPDATE CASCADE;
