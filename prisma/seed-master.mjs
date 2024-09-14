import { PrismaClient } from '@prisma/client'
import {
  typeSortData,
  typeSectionData,
  typePositionData,
  typeFontData,
  typeColorData,
  typeImageData,
  typeAnimationData,
} from './data/fixed'

const prisma = new PrismaClient()
// const prisma = new PrismaClient({
//   log: ["query"],
// })

const deleteAllMaster = async () => {
  try {
    await prisma.typeSort.deleteMany()
    await prisma.typeSection.deleteMany()
    await prisma.typePosition.deleteMany()
    await prisma.typeFont.deleteMany()
    await prisma.typeColor.deleteMany()
    await prisma.typeImage.deleteMany()
    await prisma.typeAnimation.deleteMany()
    await prisma.$executeRaw`ALTER SEQUENCE type_of_sorts_type_of_sort_id_seq RESTART WITH 1;`
    await prisma.$executeRaw`ALTER SEQUENCE type_of_sections_type_of_section_id_seq RESTART WITH 1;`
    await prisma.$executeRaw`ALTER SEQUENCE type_of_positions_type_of_position_id_seq RESTART WITH 1;`
    await prisma.$executeRaw`ALTER SEQUENCE type_of_fonts_type_of_font_id_seq RESTART WITH 1;`
    await prisma.$executeRaw`ALTER SEQUENCE type_of_colors_type_of_color_id_seq RESTART WITH 1;`
    await prisma.$executeRaw`ALTER SEQUENCE type_of_images_type_of_image_id_seq RESTART WITH 1;`
    await prisma.$executeRaw`ALTER SEQUENCE type_of_animations_type_of_animation_id_seq RESTART WITH 1;`
    console.log('マスタデータの削除完了')
  } catch (error) {
    console.error('マスタの削除中にエラーが発生しました', error)
  } finally {
    await prisma.$disconnect()
  }
}

const deleteAllData = async () => {
  try {
    await prisma.dynamicsOnTags.deleteMany()
    await prisma.tag.deleteMany()
    await prisma.term.deleteMany()
    await prisma.mark.deleteMany()
    await prisma.impression.deleteMany()
    await prisma.image.deleteMany()
    await prisma.folder.deleteMany()
    await prisma.section.deleteMany()
    await prisma.page.deleteMany()
    await prisma.chapter.deleteMany()
    await prisma.dynamic.deleteMany()
    await prisma.user.deleteMany()
    await prisma.$executeRaw`ALTER SEQUENCE dynamics_on_tags_dynamics_on_tags_id_seq RESTART WITH 1;`
    await prisma.$executeRaw`ALTER SEQUENCE tags_tag_id_seq RESTART WITH 1;`
    await prisma.$executeRaw`ALTER SEQUENCE terms_term_id_seq RESTART WITH 1;`
    await prisma.$executeRaw`ALTER SEQUENCE marks_mark_id_seq RESTART WITH 1;`
    await prisma.$executeRaw`ALTER SEQUENCE impressions_impression_id_seq RESTART WITH 1;`
    await prisma.$executeRaw`ALTER SEQUENCE images_image_id_seq RESTART WITH 1;`
    await prisma.$executeRaw`ALTER SEQUENCE folders_folder_id_seq RESTART WITH 1;`
    await prisma.$executeRaw`ALTER SEQUENCE sections_section_id_seq RESTART WITH 1;`
    await prisma.$executeRaw`ALTER SEQUENCE pages_page_id_seq RESTART WITH 1;`
    await prisma.$executeRaw`ALTER SEQUENCE chapters_chapter_id_seq RESTART WITH 1;`
    await prisma.$executeRaw`ALTER SEQUENCE dynamics_dynamic_id_seq RESTART WITH 1;`
    console.log('入力データの削除完了')
  } catch (error) {
    console.error('入力データの削除中にエラーが発生しました', error)
  } finally {
    await prisma.$disconnect()
  }
}

const createMasterData = async () => {
  try {
    await prisma.typeSection.createMany({
      data: typeSectionData,
    })
    await prisma.typePosition.createMany({
      data: typePositionData,
    })
    await prisma.typeFont.createMany({
      data: typeFontData,
    })
    await prisma.typeSort.createMany({
      data: typeSortData,
    })
    await prisma.typeColor.createMany({
      data: typeColorData,
    })
    await prisma.typeImage.createMany({
      data: typeImageData,
    })
    await prisma.typeAnimation.createMany({
      data: typeAnimationData,
    })
    console.log('マスタの登録完了')
  } catch (error) {
    console.error('マスタの登録中にエラーが発生しました', error)
  } finally {
    await prisma.$disconnect()
  }
}

async function main() {
  await deleteAllData()
  await deleteAllMaster()
  await createMasterData()
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
