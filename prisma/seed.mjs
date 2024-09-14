import { PrismaClient } from '@prisma/client'
import {
  middleUserData,
  heavyUserData,
  lightUserData,
  readerUserData,
} from './data/user'

const prisma = new PrismaClient()

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

const createCreaterUserData = async () => {
  try {
    await prisma.user.create({
      data: lightUserData,
    })
    await prisma.user.create({
      data: heavyUserData,
    })
    await prisma.user.create({
      data: middleUserData,
    })
    console.log('著者ユーザの登録完了')
  } catch (error) {
    console.error('著者ユーザの登録中にエラーが発生しました', error)
  } finally {
    await prisma.$disconnect()
  }
}

const createReaderUserData = async () => {
  try {
    for (const userData of readerUserData) {
      await prisma.user.create({
        data: {
          name: userData.name,
          email: userData.email,
        },
      })
    }
    console.log('読者ユーザの登録完了')
  } catch (error) {
    console.error('読者ユーザの登録中にエラーが発生しました', error)
  } finally {
    await prisma.$disconnect()
  }
}

async function main() {
  console.log(`テストデータ作成 開始`)

  console.log('著者データ作成 開始')
  await deleteAllData()
  await createCreaterUserData()
  const creaters = await prisma.user.findMany({
    where: {
      name: { contains: 'creater' },
    },
    include: {
      dynamics: {
        include: {
          chapters: {
            include: {
              pages: {
                include: {
                  sections: true,
                },
              },
            },
          },
        },
      },
      folders: {
        include: {
          children: true,
        },
      },
    },
  })
  console.log('著者データ作成 完了:', creaters)

  console.log('読者データ作成 開始')
  await createReaderUserData()
  const readers = await prisma.user.findMany({
    where: {
      name: { contains: 'reader' },
    },
    include: {
      impressions: true,
      marks: true,
    },
  })

  console.log('読者データ作成 完了:', readers)

  console.log('リレーション作成 開始')
  console.log('感想とお気に入りのリレーションを作成')
  console.log('reader1:感想とお気に入り（非公開）を1件づつ所持')
  await prisma.user.update({
    where: {
      id: readers[0].id,
    },
    data: {
      impressions: {
        create: {
          rate: 1,
          title: 'id1-user4-author2dynamic1',
          text: 'hoge1',
          dynamic: { connect: { id: creaters[1].dynamics[0].id } },
        },
      },
    },
  })

  await prisma.user.update({
    where: {
      id: readers[0].id,
    },
    data: {
      marks: {
        create: {
          dynamic: { connect: { id: creaters[2].dynamics[0].id } },
        },
      },
    },
  })

  console.log('reader2:感想(非公開)とお気に入りn件所持')
  await prisma.user.update({
    where: {
      id: readers[1].id,
    },
    data: {
      impressions: {
        create: {
          rate: 2,
          title: 'id1-user5-author3dynamic1',
          text: 'hoge11',
          dynamic: { connect: { id: creaters[2].dynamics[0].id } },
        },
      },
    },
  })

  creaters[1].dynamics.map(
    async (dynamic) =>
      await prisma.user.update({
        where: {
          id: readers[1].id,
        },
        data: {
          marks: {
            create: {
              dynamic: { connect: { id: dynamic.id } },
            },
          },
        },
      }),
  )

  const getRandom = (min, max) => Math.floor(Math.random() * (max + 1 - min)) + min

  console.log('reader3:感想n件と、お気に入り1件所持')
  creaters[2].dynamics.map(
    async (dynamic, key) =>
      await prisma.user.update({
        where: {
          id: readers[2].id,
        },
        data: {
          impressions: {
            create: {
              rate: getRandom(1, 5),
              title: 'id1-user6-author3dynamic' + key,
              text: 'hoge' + key,
              dynamic: { connect: { id: dynamic.id } },
            },
          },
        },
      }),
  )

  await prisma.user.update({
    where: {
      id: readers[2].id,
    },
    data: {
      marks: {
        create: {
          dynamic: { connect: { id: creaters[1].dynamics[1].id } },
        },
      },
    },
  })

  console.log('感想とお気に入りのリレーションを作成 完了')

  console.log('一般ユーザのリレーション作成')
  console.log('ヘビーユーザのリレーション作成')

  console.log(`用語-作品 章 ページ 区間`)
  setRelationTermToImage('dynamic')
  setRelationTermToImage('chapter')
  setRelationTermToImage('page')
  setRelationTermToImage('section')

  console.log(`画像-区間`)
  const sectionIconImage = await prisma.image.findFirst({
    where: {
      name: { contains: 'icon' },
    },
  })

  await prisma.section.updateMany({
    where: {
      name: 'id3-dynamic1-chapter1-page1-section2',
    },
    data: {
      imageId: sectionIconImage.id,
    },
  })

  const sectionIllustrationImage = await prisma.image.findFirst({
    where: {
      name: { contains: 'illustration' },
    },
  })

  await prisma.section.updateMany({
    where: {
      name: 'id9-dynamic1-chapter1-page1-section8',
    },
    data: {
      imageId: sectionIllustrationImage.id,
    },
  })

  console.log(`画像-フォルダ`)
  const parentFolder = await prisma.folder.findFirst({
    where: {
      name: 'id2-parent1',
    },
  })

  await prisma.image.updateMany({
    where: {
      name: 'id45-user2-parent1.png',
    },
    data: {
      folderId: parentFolder.id,
    },
  })

  const childFolder = await prisma.folder.findFirst({
    where: {
      name: 'id11-parent1-child1',
    },
  })

  await prisma.image.updateMany({
    where: {
      name: 'id46-user2-child1.png',
    },
    data: {
      folderId: childFolder.id,
    },
  })

  const grandchildFolder = await prisma.folder.findFirst({
    where: {
      name: 'id22-child1-grandchild1',
    },
  })

  await prisma.image.updateMany({
    where: {
      name: 'id47-user2-grandchild1.png',
    },
    data: {
      folderId: grandchildFolder.id,
    },
  })

  console.log(`フォルダ-階層 リレーション`)
  console.log(`親-子 複数`)
  await prisma.folder.updateMany({
    where: {
      name: { contains: 'parent1-child' },
    },
    data: {
      parentId: parentFolder.id,
    },
  })

  console.log(`親-子 一つ`)
  const parentFolder2 = await prisma.folder.findFirst({
    where: {
      name: 'id3-parent2',
    },
  })

  await prisma.folder.updateMany({
    where: {
      name: 'id21-parent2-child1',
    },
    data: {
      parentId: parentFolder2.id,
    },
  })

  console.log(`子-孫 複数`)
  await prisma.folder.updateMany({
    where: {
      name: { contains: 'child1-grandchild' },
    },
    data: {
      parentId: childFolder.id,
    },
  })
  const test = await prisma.folder.findMany({
    where: {
      name: { contains: 'child1-grandchild' },
    },
  })

  console.log(`子-孫 一つ`)
  const childFolder2 = await prisma.folder.findFirst({
    where: {
      name: 'id12-parent1-child2',
    },
  })

  await prisma.folder.updateMany({
    where: {
      name: 'id31-child2-grandchild1',
    },
    data: {
      parentId: childFolder2.id,
    },
  })

  console.log(`表紙画像`)
  await prisma.dynamic.update({
    where: {
      id: creaters[0].dynamics[0].id,
    },
    data: {
      image: {
        create: {
          name: 'id1-user1-dynamic1.png',
          user: { connect: { id: creaters[0].id } },
          path: 'id1-creater1/',
          type: { connect: { name: 'cover' } },
        },
      },
    },
  })

  await prisma.dynamic.update({
    where: {
      id: creaters[1].dynamics[0].id,
    },
    data: {
      image: {
        create: {
          name: 'id2-user2-dynamic1.png',
          user: { connect: { id: creaters[1].id } },
          path: 'id2-creater2/',
          type: { connect: { name: 'cover' } },
        },
      },
    },
  })

  console.log(`タグ`)
  const tag = await prisma.tag.findFirst({
    where: {
      name: 'id11-user2-dynamic2-tag11',
    },
  })

  await prisma.dynamic.update({
    where: {
      id: creaters[1].dynamics[0].id,
    },
    data: {
      tags: {
        create: {
          tag: {
            connect: { id: tag.id },
          },
        },
      },
    },
  })

  console.log('テストデータ作成 完了')
}

const setRelationTermToImage = async (text) => {
  const terms = await prisma.term.findMany({
    where: {
      text: { contains: text + '1' },
    },
  })

  const termImages = await prisma.image.findMany({
    where: {
      name: { contains: 'user2-terms-' + text + '1.png' },
    },
  })

  terms.map(async (term, key) => {
    await prisma.term.update({
      where: {
        id: term.id,
      },
      data: {
        imageId: termImages[key].id,
      },
    })
  })

  const oneTermImage = await prisma.image.findFirst({
    where: {
      name: { contains: 'user2-term-' + text + '2.png' },
    },
  })

  await prisma.term.updateMany({
    where: {
      name: { contains: text + '2' },
    },
    data: {
      imageId: oneTermImage.id,
    },
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
