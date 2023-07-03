-- CreateTable
CREATE TABLE "users" (
    "user_id" TEXT NOT NULL,
    "name" VARCHAR(30),
    "email" TEXT,
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
    "term_id" INTEGER,
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
    "order" INTEGER NOT NULL,
    "frame_color" VARCHAR(7) NOT NULL,
    "text" TEXT,
    "text_color" VARCHAR(7) NOT NULL,
    "text_size" INTEGER NOT NULL,
    "page_id" INTEGER NOT NULL,
    "type_id" INTEGER,
    "position_id" INTEGER,
    "bubble_id" INTEGER,
    "image_id" INTEGER,
    "font_id" INTEGER,
    "term_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sections_pkey" PRIMARY KEY ("section_id")
);

-- CreateTable
CREATE TABLE "folders" (
    "group_id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "user_id" TEXT NOT NULL,
    "parentId" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "folders_pkey" PRIMARY KEY ("group_id")
);

-- CreateTable
CREATE TABLE "impressions" (
    "impression_id" SERIAL NOT NULL,
    "rate" INTEGER NOT NULL,
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
CREATE TABLE "types" (
    "type_id" SERIAL NOT NULL,
    "name" VARCHAR(10) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "types_pkey" PRIMARY KEY ("type_id")
);

-- CreateTable
CREATE TABLE "positions" (
    "position_id" SERIAL NOT NULL,
    "name" VARCHAR(10) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "positions_pkey" PRIMARY KEY ("position_id")
);

-- CreateTable
CREATE TABLE "bubbles" (
    "bubble_id" SERIAL NOT NULL,
    "name" VARCHAR(10) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "bubbles_pkey" PRIMARY KEY ("bubble_id")
);

-- CreateTable
CREATE TABLE "images" (
    "image_id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "user_id" TEXT NOT NULL,
    "folder_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "images_pkey" PRIMARY KEY ("image_id")
);

-- CreateTable
CREATE TABLE "fonts" (
    "font_id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "fonts_pkey" PRIMARY KEY ("font_id")
);

-- CreateTable
CREATE TABLE "terms" (
    "term_id" SERIAL NOT NULL,
    "name" VARCHAR(50),
    "text" VARCHAR(200) NOT NULL,
    "user_id" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "dynamic_id" INTEGER,
    "chapter_id" INTEGER,
    "section_id" INTEGER,
    "image_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "terms_pkey" PRIMARY KEY ("term_id")
);

-- CreateTable
CREATE TABLE "dynamics_on_terms" (
    "dynamics_on_terms_id" SERIAL NOT NULL,
    "dynamic_id" INTEGER NOT NULL,
    "term_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "dynamics_on_terms_pkey" PRIMARY KEY ("dynamics_on_terms_id")
);

-- CreateTable
CREATE TABLE "chapers_on_terms" (
    "chapers_on_terms_id" SERIAL NOT NULL,
    "chapers_id" INTEGER NOT NULL,
    "term_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "chapers_on_terms_pkey" PRIMARY KEY ("chapers_on_terms_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_name_email_key" ON "users"("name", "email");

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
CREATE UNIQUE INDEX "images_name_user_id_key" ON "images"("name", "user_id");

-- CreateIndex
CREATE UNIQUE INDEX "fonts_name_key" ON "fonts"("name");

-- CreateIndex
CREATE UNIQUE INDEX "terms_user_id_order_dynamic_id_key" ON "terms"("user_id", "order", "dynamic_id");

-- CreateIndex
CREATE UNIQUE INDEX "terms_user_id_order_chapter_id_key" ON "terms"("user_id", "order", "chapter_id");

-- AddForeignKey
ALTER TABLE "dynamics" ADD CONSTRAINT "dynamics_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chapters" ADD CONSTRAINT "chapters_dynamic_id_fkey" FOREIGN KEY ("dynamic_id") REFERENCES "dynamics"("dynamic_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pages" ADD CONSTRAINT "pages_chapter_id_fkey" FOREIGN KEY ("chapter_id") REFERENCES "chapters"("chapter_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sections" ADD CONSTRAINT "sections_page_id_fkey" FOREIGN KEY ("page_id") REFERENCES "pages"("page_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sections" ADD CONSTRAINT "sections_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "types"("type_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sections" ADD CONSTRAINT "sections_position_id_fkey" FOREIGN KEY ("position_id") REFERENCES "positions"("position_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sections" ADD CONSTRAINT "sections_bubble_id_fkey" FOREIGN KEY ("bubble_id") REFERENCES "bubbles"("bubble_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sections" ADD CONSTRAINT "sections_image_id_fkey" FOREIGN KEY ("image_id") REFERENCES "images"("image_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sections" ADD CONSTRAINT "sections_font_id_fkey" FOREIGN KEY ("font_id") REFERENCES "fonts"("font_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sections" ADD CONSTRAINT "sections_term_id_fkey" FOREIGN KEY ("term_id") REFERENCES "terms"("term_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "folders" ADD CONSTRAINT "folders_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "folders" ADD CONSTRAINT "folders_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "folders"("group_id") ON DELETE SET NULL ON UPDATE CASCADE;

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
ALTER TABLE "images" ADD CONSTRAINT "images_folder_id_fkey" FOREIGN KEY ("folder_id") REFERENCES "folders"("group_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "terms" ADD CONSTRAINT "terms_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "terms" ADD CONSTRAINT "terms_image_id_fkey" FOREIGN KEY ("image_id") REFERENCES "images"("image_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dynamics_on_terms" ADD CONSTRAINT "dynamics_on_terms_dynamic_id_fkey" FOREIGN KEY ("dynamic_id") REFERENCES "dynamics"("dynamic_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dynamics_on_terms" ADD CONSTRAINT "dynamics_on_terms_term_id_fkey" FOREIGN KEY ("term_id") REFERENCES "terms"("term_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chapers_on_terms" ADD CONSTRAINT "chapers_on_terms_chapers_id_fkey" FOREIGN KEY ("chapers_id") REFERENCES "chapters"("chapter_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chapers_on_terms" ADD CONSTRAINT "chapers_on_terms_term_id_fkey" FOREIGN KEY ("term_id") REFERENCES "terms"("term_id") ON DELETE RESTRICT ON UPDATE CASCADE;
