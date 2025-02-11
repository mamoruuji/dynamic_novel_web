import {
  deleteAllMasterData,
  deleteAllData,
  createMasterData,
  createCreaterData,
  createReaderData,
  setRelationTermToImage,
  getRandomRate,
} from './util'

import { db } from '../src/libs/prisma'

async function main() {
  console.log(`テストデータ作成 開始`)

  console.log('著者データ作成 開始')
  await deleteAllData()
  await createCreaterData()
  const creaters = await db.user.findMany({
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
  await createReaderData()
  const readers = await db.user.findMany({
    where: {
      name: { contains: 'reader' },
    },
    include: {
      impressions: true,
      following: true,
      followers: true,
    },
  })

  console.log('読者データ作成 完了:', readers)

  console.log('リレーション作成 開始')
  console.log('感想とお気に入りのリレーションを作成')
  console.log('reader1:感想とお気に入り（非公開）を1件づつ所持')
  await db.user.update({
    where: {
      id: readers[0].id,
    },
    data: {
      impressions: {
        create: {
          rate: 1,
          name: 'id1-user4-author2dynamic1',
          text: 'hoge1',
          dynamic: { connect: { id: creaters[1].dynamics[0].id } },
        },
      },
    },
  })

  // await db.user.update({
  //   where: {
  //     id: readers[0].id,
  //   },
  //   data: {
  //     follows: {
  //       create: {
  //         dynamic: { connect: { id: creaters[2].dynamics[0].id } },
  //       },
  //     },
  //   },
  // })

  console.log('reader2:感想(非公開)とお気に入りn件所持')
  await db.user.update({
    where: {
      id: readers[1].id,
    },
    data: {
      impressions: {
        create: {
          rate: 2,
          name: 'id1-user5-author3dynamic1',
          text: 'hoge11',
          dynamic: { connect: { id: creaters[2].dynamics[0].id } },
        },
      },
    },
  })

  // creaters[1].dynamics.map(
  //   async (dynamic) =>
  //     await db.user.update({
  //       where: {
  //         id: readers[1].id,
  //       },
  //       data: {
  //         follows: {
  //           create: {
  //             dynamic: { connect: { id: dynamic.id } },
  //           },
  //         },
  //       },
  //     }),
  // )

  console.log('reader3:感想n件と、お気に入り1件所持')
  creaters[2].dynamics.map(
    async (dynamic, key) =>
      await db.user.update({
        where: {
          id: readers[2].id,
        },
        data: {
          impressions: {
            create: {
              rate: getRandomRate(1, 5),
              name: 'id1-user6-author3dynamic' + key,
              text: 'hoge' + key,
              dynamic: { connect: { id: dynamic.id } },
            },
          },
        },
      }),
  )

  // await db.user.update({
  //   where: {
  //     id: readers[2].id,
  //   },
  //   data: {
  //     follows: {
  //       create: {
  //         dynamic: { connect: { id: creaters[1].dynamics[1].id } },
  //       },
  //     },
  //   },
  // })

  console.log('感想とお気に入りのリレーションを作成 完了')

  console.log('一般ユーザのリレーション作成')
  console.log('ヘビーユーザのリレーション作成')

  // console.log(`用語-作品 章 ページ 区間`)
  // setRelationTermToImage('dynamic')
  // setRelationTermToImage('chapter')
  // setRelationTermToImage('page')
  // setRelationTermToImage('section')

  // console.log(`画像-区間`)
  // const sectionIconImage = await db.image.findFirst({
  //   where: {
  //     name: { contains: 'icon' },
  //   },
  // })

  // await db.section.updateMany({
  //   where: {
  //     name: 'id3-dynamic1-chapter1-page1-section2',
  //   },
  //   data: {
  //     imageUrl: sectionIconImage.id,
  //   },
  // })

  // const sectionIllustrationImage = await db.image.findFirst({
  //   where: {
  //     name: { contains: 'illustration' },
  //   },
  // })

  // await db.section.updateMany({
  //   where: {
  //     name: 'id9-dynamic1-chapter1-page1-section8',
  //   },
  //   data: {
  //     imageUrl: sectionIllustrationImage.id,
  //   },
  // })

  console.log(`画像-フォルダ`)
  const parentFolder = await db.folder.findFirst({
    where: {
      name: 'id2-parent1',
    },
  })

  await db.image.updateMany({
    where: {
      name: 'id45-user2-parent1.png',
    },
    data: {
      folderId: parentFolder.id,
    },
  })

  const childFolder = await db.folder.findFirst({
    where: {
      name: 'id11-parent1-child1',
    },
  })

  await db.image.updateMany({
    where: {
      name: 'id46-user2-child1.png',
    },
    data: {
      folderId: childFolder.id,
    },
  })

  const grandchildFolder = await db.folder.findFirst({
    where: {
      name: 'id22-child1-grandchild1',
    },
  })

  await db.image.updateMany({
    where: {
      name: 'id47-user2-grandchild1.png',
    },
    data: {
      folderId: grandchildFolder.id,
    },
  })

  console.log(`フォルダ-階層 リレーション`)
  console.log(`親-子 複数`)
  await db.folder.updateMany({
    where: {
      name: { contains: 'parent1-child' },
    },
    data: {
      parentId: parentFolder.id,
    },
  })

  console.log(`親-子 一つ`)
  const parentFolder2 = await db.folder.findFirst({
    where: {
      name: 'id3-parent2',
    },
  })

  await db.folder.updateMany({
    where: {
      name: 'id21-parent2-child1',
    },
    data: {
      parentId: parentFolder2.id,
    },
  })

  console.log(`子-孫 複数`)
  await db.folder.updateMany({
    where: {
      name: { contains: 'child1-grandchild' },
    },
    data: {
      parentId: childFolder.id,
    },
  })
  const test = await db.folder.findMany({
    where: {
      name: { contains: 'child1-grandchild' },
    },
  })

  console.log(`子-孫 一つ`)
  const childFolder2 = await db.folder.findFirst({
    where: {
      name: 'id12-parent1-child2',
    },
  })

  await db.folder.updateMany({
    where: {
      name: 'id31-child2-grandchild1',
    },
    data: {
      parentId: childFolder2.id,
    },
  })

  console.log(`表紙画像`)
  await db.dynamic.update({
    where: {
      id: creaters[0].dynamics[0].id,
    },
    data: {
      imageUrl: 'id1-user1-dynamic1.png',
    },
  })

  await db.dynamic.update({
    where: {
      id: creaters[1].dynamics[0].id,
    },
    data: {
      imageUrl: 'id2-user2-dynamic1.png',
    },
  })

  console.log(`タグ`)
  const tag = await db.tag.findFirst({
    where: {
      name: 'id11-user2-dynamic2-tag11',
    },
  })

  await db.dynamic.update({
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

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await db.$disconnect()
  })
