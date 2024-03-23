import 'ts-node/register'
import { PrismaClient } from '@prisma/client'
import {
  middleUserData,
  heavyUserData,
  lightUserData,
  readerUserData,
} from './data/user.ts'

const prisma = new PrismaClient()

const deleteAllData = async () => {
  try {
    await prisma.dynamicsOnTags.deleteMany()

    await prisma.dynamicTerm.deleteMany()
    await prisma.chapterTerm.deleteMany()
    await prisma.pageTerm.deleteMany()
    await prisma.sectionTerm.deleteMany()
    await prisma.$queryRaw`ALTER SEQUENCE dynamic_terms_dynamic_term_id_seq RESTART WITH 1;`
    await prisma.$queryRaw`ALTER SEQUENCE chapter_terms_chapter_term_id_seq RESTART WITH 1;`
    await prisma.$queryRaw`ALTER SEQUENCE page_terms_page_term_id_seq RESTART WITH 1;`
    await prisma.$queryRaw`ALTER SEQUENCE section_terms_section_term_id_seq RESTART WITH 1;`

    await prisma.tag.deleteMany()
    await prisma.mark.deleteMany()
    await prisma.impression.deleteMany()
    await prisma.image.deleteMany()
    await prisma.folder.deleteMany()
    await prisma.section.deleteMany()
    await prisma.page.deleteMany()
    await prisma.chapter.deleteMany()
    await prisma.dynamic.deleteMany()
    await prisma.user.deleteMany()
    await prisma.$queryRaw`ALTER SEQUENCE tags_tag_id_seq RESTART WITH 1;`
    await prisma.$queryRaw`ALTER SEQUENCE marks_mark_id_seq RESTART WITH 1;`
    await prisma.$queryRaw`ALTER SEQUENCE impressions_impression_id_seq RESTART WITH 1;`
    await prisma.$queryRaw`ALTER SEQUENCE images_image_id_seq RESTART WITH 1;`
    await prisma.$queryRaw`ALTER SEQUENCE folders_folder_id_seq RESTART WITH 1;`
    await prisma.$queryRaw`ALTER SEQUENCE sections_section_id_seq RESTART WITH 1;`
    await prisma.$queryRaw`ALTER SEQUENCE pages_page_id_seq RESTART WITH 1;`
    await prisma.$queryRaw`ALTER SEQUENCE chapters_chapter_id_seq RESTART WITH 1;`
    await prisma.$queryRaw`ALTER SEQUENCE dynamics_dynamic_id_seq RESTART WITH 1;`
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
      data: middleUserData,
    })
    await prisma.user.create({
      data: lightUserData,
    })
    await prisma.user.create({
      data: heavyUserData,
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
      images: true,
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

  // const heavyUserTerms = await prisma.dynamic.findMany({
  //   where: {
  //     name: { contains: 'user2-dynamic1' },
  //   },
  // })

  // const heavyUserOneTerm = await prisma.dynamic.findMany({
  //   where: {
  //     name: { contains: 'user2-dynamic2' },
  //   },
  // })
  // console.log('読者データ作成 完了:', readers)
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
    async (dynamic: { id: number }) =>
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

  function getRandom(min: number, max: number) {
    var random = Math.floor(Math.random() * (max + 1 - min)) + min

    return random
  }

  console.log('reader3:感想n件と、お気に入り1件所持')
  creaters[2].dynamics.map(
    async (dynamic: { id: number }, key: number) =>
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
  // await prisma.dynamicsOnTerms.create({
  //   data: {
  //     dynamicId: creaters[0].dynamics[0].id,
  //     termId: creaters[0].terms[0].id,
  //   },
  // })

  // await prisma.chaptersOnTerms.create({
  //   data: {
  //     chapterId: creaters[0].dynamics[0].chapters[0].id,
  //     termId: creaters[0].terms[0].id,
  //   },
  // })

  console.log('ヘビーユーザのリレーション作成')
  console.log(`用語-作品 多対一`)
  const dynamicTerms = await prisma.dynamicTerm.findMany({
    where: {
      text: { contains: 'dynamic1' },
    },
  })
  console.log(1)

  const author2dynamic1 = await prisma.dynamic.findMany({
    where: {
      title: 'id2-dynamic1',
    },
    include: {
      user: true,
    },
  })
  console.log(2)

  const dynamicTermImages = await prisma.image.findMany({
    where: {
      name: { contains: 'dynamic1' },
    },
  })

  dynamicTerms.map(async (term: any, key: number) => {
    await prisma.dynamicsOnTerms.create({
      data: {
        dynamicId: author2dynamic1[0].id,
        termId: term.id,
      },
    })

    console.log(term.userId)
    console.log(term.order)
    console.log(author2dynamic1[0].id)
    await prisma.term.update({
      where: {
        id: term.id,
      },
      data: {
        dynamicId: author2dynamic1[0].id,
        imageId: dynamicTermImages[key].id,
      },
    })
  })

  console.log(`用語-章 複数`)
  const chapterTerms = await prisma.term.findMany({
    where: {
      text: { contains: 'chapter1' },
    },
  })

  const author2chapter1 = await prisma.chapter.findMany({
    where: {
      title: 'id2-dynamic1-chapter1',
    },
  })

  const chapterTermImages = await prisma.image.findMany({
    where: {
      name: { contains: 'chapter1' },
    },
  })

  chapterTerms.map(async (term: any, key: number) => {
    await prisma.chaptersOnTerms.create({
      data: {
        chapterId: author2chapter1[0].id,
        termId: term.id,
      },
    })

    await prisma.term.update({
      where: {
        id: term.id,
      },
      data: {
        dynamicId: author2chapter1[0].id,
        imageId: chapterTermImages[key].id,
      },
    })
    console.log(key)
  })

  console.log(`用語-作品 1`)
  const dynamicOneTerm = await prisma.term.findMany({
    where: {
      name: 'id20-dynamic0',
    },
  })

  const author2dynamic2 = await prisma.dynamic.findMany({
    where: {
      title: 'id3-dynamic2',
    },
  })

  const dynamicOneTermImage = await prisma.image.findMany({
    where: {
      name: { contains: 'dynamic0' },
    },
  })

  await prisma.dynamicsOnTerms.create({
    data: {
      dynamicId: author2dynamic2[0].id,
      termId: dynamicOneTerm[0].id,
    },
  })

  await prisma.term.update({
    where: {
      id: dynamicOneTerm[0].id,
    },
    data: {
      imageId: dynamicOneTermImage[0].id,
    },
  })

  console.log(`用語-章 1`)
  const chapterOneTerm = await prisma.term.findMany({
    where: {
      name: 'id21-chapter0',
    },
  })

  const author2chapter2 = await prisma.chapter.findMany({
    where: {
      title: 'id3-dynamic1-chapter2',
    },
  })

  const chapterOneTermImage = await prisma.image.findMany({
    where: {
      name: { contains: 'chapter0' },
    },
  })

  await prisma.chaptersOnTerms.create({
    data: {
      chapterId: author2chapter2[0].id,
      termId: chapterOneTerm[0].id,
    },
  })

  await prisma.term.update({
    where: {
      id: chapterOneTerm[0].id,
    },
    data: {
      imageId: chapterOneTermImage[0].id,
    },
  })

  console.log(`用語-区間 1`)
  const sectionOneTerm = await prisma.term.findMany({
    where: {
      name: 'id22-section0',
    },
  })

  const author2section2 = await prisma.section.findMany({
    where: {
      text: 'id2-dynamic1-chapter1-page1-section1',
    },
  })

  const sectionOneTermImage = await prisma.image.findMany({
    where: {
      name: { contains: 'section0' },
    },
  })

  await prisma.section.update({
    where: {
      id: author2section2[0].id,
    },
    data: {
      termId: sectionOneTerm[0].id,
    },
  })

  await prisma.term.update({
    where: {
      id: sectionOneTerm[0].id,
    },
    data: {
      imageId: sectionOneTermImage[0].id,
    },
  })

  console.log(`画像-フォルダ`)

  const parentFolderId = await prisma.folder.findMany({
    where: {
      name: 'id2-parent1',
    },
  })

  await prisma.image.updateMany({
    where: {
      name: 'id24-parent1.png',
    },
    data: {
      folderId: parentFolderId[0].id,
    },
  })

  const childFolderId = await prisma.folder.findMany({
    where: {
      name: 'id11-parent1-child1',
    },
  })

  await prisma.image.updateMany({
    where: {
      name: 'id25-child1.png',
    },
    data: {
      folderId: childFolderId[0].id,
    },
  })

  const grandchildFolderId = await prisma.folder.findMany({
    where: {
      name: 'id22-child1-grandchild1',
    },
  })

  await prisma.image.updateMany({
    where: {
      name: 'id26-grandchild1.png',
    },
    data: {
      folderId: grandchildFolderId[0].id,
    },
  })

  console.log(`フォルダ-階層 リレーション`)
  await prisma.folder.updateMany({
    where: {
      name: { contains: 'parent1-child' },
    },
    data: {
      parentId: parentFolderId[0].id,
    },
  })

  const parentFolder2Id = await prisma.folder.findMany({
    where: {
      name: 'id3-parent2',
    },
  })

  await prisma.folder.updateMany({
    where: {
      name: 'id21-parent2-child1',
    },
    data: {
      parentId: parentFolder2Id[0].id,
    },
  })

  await prisma.folder.updateMany({
    where: {
      name: { contains: 'child1-grandchild' },
    },
    data: {
      parentId: childFolderId[0].id,
    },
  })

  const childFolder2Id = await prisma.folder.findMany({
    where: {
      name: 'id12-parent1-child2',
    },
  })

  await prisma.folder.updateMany({
    where: {
      name: 'id31-child2-grandchild1',
    },
    data: {
      parentId: childFolder2Id[0].id,
    },
  })

  console.log('テストデータ作成 完了')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
