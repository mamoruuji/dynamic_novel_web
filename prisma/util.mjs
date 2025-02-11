import {
  typeSortData,
  typeSectionData,
  typePositionData,
  typeFontData,
  typeColorData,
  typeImageData,
  typeAnimationData,
} from './data/fixed'

import {
  middleUserData,
  heavyUserData,
  lightUserData,
  readerUserData,
} from './data/user'

import { db } from '../src/libs/prisma'

export const deleteAllMasterData = async () => {
  try {
    await db.typeSort.deleteMany()
    await db.typeSection.deleteMany()
    await db.typePosition.deleteMany()
    await db.typeFont.deleteMany()
    await db.typeColor.deleteMany()
    await db.typeImage.deleteMany()
    await db.typeAnimation.deleteMany()
    await db.$executeRaw`ALTER SEQUENCE type_of_sorts_type_of_sort_id_seq RESTART WITH 1;`
    await db.$executeRaw`ALTER SEQUENCE type_of_sections_type_of_section_id_seq RESTART WITH 1;`
    await db.$executeRaw`ALTER SEQUENCE type_of_positions_type_of_position_id_seq RESTART WITH 1;`
    await db.$executeRaw`ALTER SEQUENCE type_of_fonts_type_of_font_id_seq RESTART WITH 1;`
    await db.$executeRaw`ALTER SEQUENCE type_of_colors_type_of_color_id_seq RESTART WITH 1;`
    await db.$executeRaw`ALTER SEQUENCE type_of_images_type_of_image_id_seq RESTART WITH 1;`
    await db.$executeRaw`ALTER SEQUENCE type_of_animations_type_of_animation_id_seq RESTART WITH 1;`
    console.log('マスタデータの削除完了')
  } catch (error) {
    console.error('マスタの削除中にエラーが発生しました', error)
  } finally {
    await db.$disconnect()
  }
}

export const deleteAllData = async () => {
  try {
    await db.viewHistory.deleteMany()
    await db.dynamicsOnTags.deleteMany()
    await db.tag.deleteMany()
    await db.term.deleteMany()
    await db.follow.deleteMany()
    await db.impression.deleteMany()
    await db.image.deleteMany()
    await db.folder.deleteMany()
    await db.section.deleteMany()
    await db.page.deleteMany()
    await db.chapter.deleteMany()
    await db.dynamic.deleteMany()
    await db.account.deleteMany()
    await db.session.deleteMany()
    await db.verificationToken.deleteMany()
    await db.user.deleteMany()
    await db.$executeRaw`ALTER SEQUENCE view_histories_view_history_id_seq RESTART WITH 1;`
    await db.$executeRaw`ALTER SEQUENCE dynamics_on_tags_dynamics_on_tags_id_seq RESTART WITH 1;`
    await db.$executeRaw`ALTER SEQUENCE tags_tag_id_seq RESTART WITH 1;`
    await db.$executeRaw`ALTER SEQUENCE terms_term_id_seq RESTART WITH 1;`
    await db.$executeRaw`ALTER SEQUENCE follows_follow_id_seq RESTART WITH 1;`
    await db.$executeRaw`ALTER SEQUENCE impressions_impression_id_seq RESTART WITH 1;`
    await db.$executeRaw`ALTER SEQUENCE images_image_id_seq RESTART WITH 1;`
    await db.$executeRaw`ALTER SEQUENCE folders_folder_id_seq RESTART WITH 1;`
    await db.$executeRaw`ALTER SEQUENCE sections_section_id_seq RESTART WITH 1;`
    await db.$executeRaw`ALTER SEQUENCE pages_page_id_seq RESTART WITH 1;`
    await db.$executeRaw`ALTER SEQUENCE chapters_chapter_id_seq RESTART WITH 1;`
    await db.$executeRaw`ALTER SEQUENCE dynamics_dynamic_id_seq RESTART WITH 1;`
    console.log('入力データの削除完了')
  } catch (error) {
    console.error('入力データの削除中にエラーが発生しました', error)
  } finally {
    await db.$disconnect()
  }
}

export const createMasterData = async () => {
  try {
    await db.typeSection.createMany({
      data: typeSectionData,
    })
    await db.typePosition.createMany({
      data: typePositionData,
    })
    await db.typeFont.createMany({
      data: typeFontData,
    })
    await db.typeSort.createMany({
      data: typeSortData,
    })
    await db.typeColor.createMany({
      data: typeColorData,
    })
    await db.typeImage.createMany({
      data: typeImageData,
    })
    await db.typeAnimation.createMany({
      data: typeAnimationData,
    })
    console.log('マスタの登録完了')
  } catch (error) {
    console.error('マスタの登録中にエラーが発生しました', error)
  } finally {
    await db.$disconnect()
  }
}

export const createCreaterData = async () => {
  try {
    await db.user.create({
      data: lightUserData,
    })
    await db.user.create({
      data: heavyUserData,
    })
    await db.user.create({
      data: middleUserData,
    })
    console.log('著者ユーザの登録完了')
  } catch (error) {
    console.error('著者ユーザの登録中にエラーが発生しました', error)
  } finally {
    await db.$disconnect()
  }
}

export const createReaderData = async () => {
  try {
    for (const userData of readerUserData) {
      await db.user.create({
        data: {
          name: userData.name,
          penName: userData.penName,
          email: userData.email,
        },
      })
    }
    console.log('読者ユーザの登録完了')
  } catch (error) {
    console.error('読者ユーザの登録中にエラーが発生しました', error)
  } finally {
    await db.$disconnect()
  }
}

export const setRelationTermToImage = async (text) => {
  const terms = await db.term.findMany({
    where: {
      text: { contains: text + '1' },
    },
  })

  const termImages = await db.image.findMany({
    where: {
      name: { contains: 'user2-terms-' + text + '1.png' },
    },
  })

  terms.map(async (term, key) => {
    await db.term.update({
      where: {
        id: term.id,
      },
      data: {
        imageId: termImages[key].id,
      },
    })
  })

  const oneTermImage = await db.image.findFirst({
    where: {
      name: { contains: 'user2-term-' + text + '2.png' },
    },
  })

  await db.term.updateMany({
    where: {
      name: { contains: text + '2' },
    },
    data: {
      imageId: oneTermImage.id,
    },
  })
}

export const getRandomRate = (min, max) => Math.floor(Math.random() * (max + 1 - min)) + min
