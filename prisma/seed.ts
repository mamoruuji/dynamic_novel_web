import 'ts-node/register'
import { PrismaClient } from '@prisma/client'
import { middleUserData, heavyUserData, lightUserData, readUserData } from './data/user.js'
import { typeData, positionData, bubbleData, fontData } from './data/fixed.js'

const prisma = new PrismaClient()
// コマンド実行 node --trace-warnings --loader ts-node/esm prisma/seed.ts

async function deleteAllData() {
  try {
    // const allProperties = Object.keys(prisma) as (keyof typeof prisma)[];
    //   // 関数たちを取り除いたものがモデル名
    //   // 関数は全て "$" "_" 始まりなのを利用している
    // const modelNames = allProperties.filter(
    //   (x) => typeof x === "string" && !(x.startsWith("$") || x.startsWith("_"))
    // )

    // modelNames.forEach(async (modelName: string | symbol) => {
    //   await prisma.$executeRaw`DELETE FROM "${String(modelName)}"`
    //   // await prisma.$queryRaw(`DELETE FROM "${String(modelName)}"`)
    // })
    await prisma.user.deleteMany()
    await prisma.dynamic.deleteMany()
    await prisma.chapter.deleteMany()
    await prisma.page.deleteMany()
    await prisma.section.deleteMany()
    await prisma.chaptersOnTerms.deleteMany()
    await prisma.dynamicsOnTerms.deleteMany()
    await prisma.term.deleteMany()
    await prisma.folder.deleteMany()
    await prisma.font.deleteMany()
    await prisma.image.deleteMany()
    await prisma.impression.deleteMany()
    await prisma.mark.deleteMany()
    await prisma.type.deleteMany()

    console.log('全データの削除が完了しました')
  } catch (error) {
    console.error('データの削除中にエラーが発生しました', error)
  } finally {
    await prisma.$disconnect()
  }
}

async function main() {
  deleteAllData()

  console.log(`Start seeding ...`)

  console.log('Start create user:')
  // 手入力データは先に格納する
  await prisma.type.createMany({
    data: typeData,
  })
  await prisma.position.createMany({
    data: positionData,
  })
  await prisma.bubble.createMany({
    data: bubbleData,
  })
  await prisma.font.createMany({
    data: fontData,
  })

  await prisma.user.create({
    data: middleUserData,
  })

  await prisma.user.create({
    data: heavyUserData,
  })

  await prisma.user.create({
    data: lightUserData,
  })

  const creaters = await prisma.user.findMany({
    where: {
      name: 'creater'
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
      terms: true,
    },
  })

  const readers = await prisma.user.findMany({
    where: {
      name: 'reader'
    },
    include: {
      impressions: true,
      marks: true,
    },
  })

  console.log('Created user:', creaters);


  console.log('Start create options:')

  // 感想とお気に入りのリレーションを作成
  // reader1:感想とお気に入り（非公開）を1件づつ所持
  await prisma.user.update({
    where: {
      id: readers[0].id
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
      id: readers[0].id
    },
    data: {
      marks: {
        create: {
          dynamic: { connect: { id: creaters[2].dynamics[0].id } },
        },
      },
    },
  })

  // reader2:感想(非公開)とお気に入りn件所持
  await prisma.user.update({
    where: {
      id: readers[1].id
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

  creaters[1].dynamics.map((dynamic: { id: number }) =>
    prisma.user.update({
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
    })
  )

  function getRandom( min: number, max: number ) {
    var random = Math.floor( Math.random() * (max + 1 - min) ) + min;

    return random;
  }

  // reader3:感想n件と、お気に入り1件所持
  creaters[2].dynamics.map((dynamic: { id: number }, key: number) =>
    prisma.user.update({
      where: {
        id: readers[2].id
      },
      data: {
        impressions: {
          create: {
            rate: getRandom(1, 5),
            title: 'id1-user6-author3dynamic' + key,
            text: 'hoge'+ key,
            dynamic: { connect: { id: dynamic.id } },
          },
        },
      },
    })
  )

  await prisma.user.update({
    where: {
      id: readers[2].id
    },
    data: {
      marks: {
        create: {
          dynamic: { connect: { id: creaters[1].dynamics[1].id } },
        },
      },
    },
  })


  console.log('Created options:');


  console.log('Start create terms relations:')

  // リレーション作成
  // creater1
  await prisma.dynamicsOnTerms.create({
    data: {
      dynamic: { connect: { id: creaters[0].dynamics[0].id } },
      term: { connect: { id: creaters[0].terms[0].id } },
    },
  })

  await prisma.chaptersOnTerms.create({
    data: {
      chapter: { connect: { id: creaters[0].dynamics[0].chapters[0].id } },
      term: { connect: { id: creaters[0].terms[0].id } },
    },
  })

  // creater2
  // 用語-作品 多対一
  const dynamicTerms = await prisma.term.findMany({
    where: {
      text: 'dynamic1',
    },
  })

  const author2dynamic1 = await prisma.dynamic.findMany({
    where: {
      title: 'id2-user1-dynamic1',
    },
    include: {
      user: true,
    },
  })

  const dynamicTermImages = await prisma.image.findMany({
    where: {
      name: 'dynamic1',
    },
  })

  dynamicTerms.map(
    (term: any, key: number) => {
      prisma.dynamicsOnTerms.create({
        data: {
          dynamic: { connect: { id: author2dynamic1[0].id } },
          term: { connect: { id: term.id } },
        },
      })


      prisma.term.update({
        where: {
          id: term.id,
        },
        data: {
          dynamicId: author2dynamic1[0].id,
          imageId: dynamicTermImages[key].id,
        },
      })
    },
  )


  // 用語-章 複数
  const chapterTerms = await prisma.term.findMany({
    where: {
      text: 'chapter1',
    },
  })

  const author2chapter1 = await prisma.chapter.findMany({
    where: {
      title: 'id2-dynamic1-chapter1',
    },
  })

  const chapterTermImages = await prisma.image.findMany({
    where: {
      name: 'chapter1',
    },
  })

  chapterTerms.map(
    (term: any, key: number) => {
      prisma.chaptersOnTerms.create({
        data: {
          chapter: { connect: { id: author2chapter1[0].id } },
          term: { connect: { id: term.id } },
        },
      })

      prisma.term.update({
        where: {
          id: term.id,
        },
        data: {
          dynamicId: author2chapter1[0].id,
          imageId: chapterTermImages[key].id,
        },
      })
    },
  )

  // 用語-作品 1
  const dynamicOneTerm = await prisma.term.findMany({
    where: {
      text: 'dynamic0',
    },
  })

  const author2dynamic2 = await prisma.dynamic.findMany({
    where: {
      title: 'id3-user1-dynamic2',
    },
  })


  const dynamicOneTermImage = await prisma.image.findMany({
    where: {
      name: 'dynamic0',
    },
  })

  prisma.dynamicsOnTerms.create({
    data: {
      dynamic: { connect: { id: author2dynamic2[0].id } },
      term: { connect: { id: dynamicOneTerm[0].id } },
    },
  })

  prisma.image.update({
    where: {
      id: dynamicOneTermImage[0].id,
    },
    data: {
      terms: { connect: {id: dynamicOneTerm[0].id } },
    },
  })

  // 用語-章 1
  const chapterOneTerm = await prisma.term.findMany({
    where: {
      text: 'chapter0',
    },
  })

  const author2chapter2 = await prisma.chapter.findMany({
    where: {
      title: 'id3-user1-chapter2',
    },
  })


  const chapterOneTermImage = await prisma.image.findMany({
    where: {
      name: 'chapter0',
    },
  })

  prisma.chaptersOnTerms.create({
    data: {
      chapter: { connect: { id: author2chapter2[0].id } },
      term: { connect: { id: chapterOneTerm[0].id } },
    },
  })

  prisma.image.update({
    where: {
      id: chapterOneTermImage[0].id,
    },
    data: {
      terms: { connect: {id: chapterOneTerm[0].id } },
    },
  })

  // 用語-区間 1
  const sectionOneTerm = await prisma.term.findMany({
    where: {
      text: 'section0',
    },
  })

  const author2section2 = await prisma.section.findMany({
    where: {
      text: 'id2-dynamic1-chapter1-page1-section1',
    },
  })


  const sectionOneTermImage = await prisma.image.findMany({
    where: {
      name: 'section0',
    },
  })

  prisma.section.update({
    where: {
      id:author2section2[0].id,
    },
    data: {
      term: { connect: { id: sectionOneTerm[0].id } },
    },
  })

  prisma.image.update({
    where: {
      id: sectionOneTermImage[0].id,
    },
    data: {
      terms: { connect: {id: sectionOneTerm[0].id } }
    },
  })

  // ファイルのリレーション
  const parentFolderId = await prisma.folder.findMany({
    where: {
      name: 'id2-user2-parent1',
    },
  })

  await prisma.image.updateMany({
    where: {
      name:  'id24-user2-parent1.png',
    },
    data: {
      folderId: parentFolderId[0].id,
    },
  })

  const childFolderId = await prisma.folder.findMany({
    where: {
      name: 'id11-user2-child1',
    },
  })

  await prisma.image.updateMany({
    where: {
      name:  'id25-user2-child1.png',
    },
    data: {
      folderId: childFolderId[0].id,
    },
  })

  const grandchildFolderId = await prisma.folder.findMany({
    where: {
      name: 'id21-user2-parent1-child1-grandchild1',
    },
  })

  await prisma.image.updateMany({
    where: {
      name:  'id26-user2-grandchild1.png',
    },
    data: {
      folderId: grandchildFolderId[0].id,
    },
  })

  console.log(`Seeding finished.`)
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
