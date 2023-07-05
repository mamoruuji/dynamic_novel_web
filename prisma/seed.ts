import { PrismaClient, Prisma } from '@prisma/client'
import { usersWithDynamicsData, usersWithOptionsData } from './data/user'
import { typeData, positionData, bubbleData, fontData } from './data/fixed'

const prisma = new PrismaClient()

async function main() {
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

  const creaters = await prisma.user.createMany({
    data: usersWithDynamicsData,
  })
  const readers = await prisma.user.createMany({
    data: usersWithOptionsData,
  })

  console.log('Created user:', creaters);


  console.log('Start create options:')

  // 感想とお気に入りのリレーションを作成
  // reader1:感想とお気に入り（非公開）を1件づつ所持
  await prisma.user.update({
    where: {
      id: readers[1].id
    },
    data: {
      impressions: {
        create: {
          rate: 1,
          title: 'id1-user4-author2dynamic1',
          text: 'hoge1',
          dynamic: { connect: { id: creaters[1].dynamics[0].id } },
        }
      },
    },
  })

  await prisma.user.update({
    where: {
      id: readers[2].id
    },
    data: {
      marks: {
        create: [{
          title: 'id1-user4-author3dynamic1',
          dynamic: { connect: { id: creaters[2].dynamics[0].id } },
        }]
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
        }
      },
    },
  })

  creaters[1].flagMap((creater, key) => prisma.user.update({
    where: {
      id: readers[1].id
    },
    data: {
      marks: {
        create: [{
          title: 'id1-user5-author2dynamic' + key,
          dynamic: { connect: { id: creater.dynamics[key].id } },
        }]
      },
    },
  }))

  function getRandom( min, max ) {
    var random = Math.floor( Math.random() * (max + 1 - min) ) + min;

    return random;
  }

  // reader3:感想n件と、お気に入り1件所持
  creaters[2].flagMap((creater, key) => prisma.user.update({
    where: {
      id: readers[2].id
    },
    data: {
      impressions: {
        create: {
          rate: getRandom(1, 5),
          title: 'id1-user6-author3dynamic' + key,
          text: 'hoge'+ key,
          dynamic: { connect: { id: creater.dynamics[key].id } },
        }
      },
    },
  }))

  await prisma.user.update({
    where: {
      id: readers[2].id
    },
    data: {
      marks: {
        create: [{
          title: 'id1-user6-author2dynamic2',
          dynamic: { connect: { id: creaters[1].dynamics[1].id } },
        }]
      },
    },
  })


  console.log('Created options:');


  console.log('Start create terms relations:')

  // リレーション作成
  // creater1
  const dynamicsId = creaters[0].flatMap(user => user.dynamics.map(dynamic => dynamic.id))[0]
  const chapterId = creaters[0].flatMap(user => user.dynamics.flatMap(dynamic => dynamic.chapters.map(chapter => chapter.id)))[0]
  const termId = creaters[0].flatMap(user => user.terms.map(term => term.id))[0]

  await prisma.dynamicsOnTerms.create({
    data: {
      dynamic: { connect: { id: dynamicsId } },
      term: { connect: { id: termId } },
    },
  })

  await prisma.chaptersOnTerms.create({
    data: {
      chapter: { connect: { id: chapterId } },
      term: { connect: { id: termId } },
    },
  })

  // creater2
  const termIds = creaters[1].flatMap(user => user.terms.map(term => term.id))
  // 2~10 dynamic 複数, 11~19 chapter 複数
  const dynamicTermIds = creaters[1].flatMap(user => user.terms.filter(term => term.text.includes("dynamic1")).map(term => term.id))
  const chapterTermIds = creaters[1].flatMap(user => user.terms.filter(term => term.text.includes("chapter1")).map(term => term.id))
  // 20 section 1つ, 21 dynamic 1つ, 22 chapter 1つ
  const sectionTermId    = creaters[1].flatMap(user => user.terms.filter(term => term.name.includes("section0")).map(term => term.id))[0]
  const dynamicTermId    = creaters[1].flatMap(user => user.terms.filter(term => term.name.includes("dynamic0")).map(term => term.id))[0]
  const chapterTermId    = creaters[1].flatMap(user => user.terms.filter(term => term.name.includes("chapter0")).map(term => term.id))[0]

  const dynamicIds = creaters[1].flatMap(user => user.dynamics.map(dynamic => dynamic.id))
  // 2~10, 2 複数, 3 1つのみ
  const chapterIds = creaters[1].flatMap(user => user.dynamics.flatMap(dynamic => dynamic.chapters.map(chapter => chapter.id)))
  // 2~10, 2 複数, 3 1つのみ
  const sectionIds = creaters[1].flatMap(user => user.dynamics.flatMap(dynamic => dynamic.chapters.flatMap(chapter => chapter.pages.flagMap(page => page.secsions.map(section => section.id)))))
  // 2~10, 2 1つのみ
  const imageIds = creaters[1].flatMap(user => user.images.map(image => image.id))
  // 2~10 dynamic, 11~19 chapter, 20 section, 21 dynamic, 22 chapter
  const dynamicImageIds   = creaters[1].flatMap(user => user.images.filter(image => image.name.includes("dynamic1"   )).map(term => term.id))
  const chapterImageIds   = creaters[1].flatMap(user => user.images.filter(image => image.name.includes("chapter1"   )).map(term => term.id))
  const sectionImageId    = creaters[1].flatMap(user => user.images.filter(image => image.name.includes("section0"   )).map(term => term.id))[0]
  const dynamicImageId    = creaters[1].flatMap(user => user.images.filter(image => image.name.includes("dynamic0"   )).map(term => term.id))[0]
  const chapterImageId    = creaters[1].flatMap(user => user.images.filter(image => image.name.includes("chapter0"   )).map(term => term.id))[0]

  // const rootImageId       = creaters[1].flatMap(user => user.images.filter(image => image.name.includes("root1"      )).map(term => term.id))[0]
  const parentImageId     = creaters[1].flatMap(user => user.images.filter(image => image.name.includes("parent1"    )).map(term => term.id))[0]
  const childImageId      = creaters[1].flatMap(user => user.images.filter(image => image.name.includes("child1"     )).map(term => term.id))[0]
  const grandChildImageId = creaters[1].flatMap(user => user.images.filter(image => image.name.includes("grandchild1")).map(term => term.id))[0]

  const parentFolderId     = creaters[1].flatMap(user => user.folders.filter(folder => folder.name.includes("id2-user2-parent1"                    )).map(term => term.id))[0]
  const childFolderId      = creaters[1].flatMap(user => user.folders.filter(folder => folder.name.includes("id11-user2-parent1-child1"            )).map(term => term.id))[0]
  const grandChildFolderId = creaters[1].flatMap(user => user.folders.filter(folder => folder.name.includes("id21-user2-parent1-child1-grandchild1")).map(term => term.id))[0]

  // 用語-作品 複数
  dynamicTermIds.map(
    (dynamicId, key) => {
      const updatedTerms = prisma.term.update({
        where: {
          id: key
        },
        data: {
          dynamics: { connect: { id: dynamicId } }
        }
      })

      prisma.dynamic.update({
        where: {
          id: 2
        },
        data: {
          terms: { connect: { id: updatedTerms[key].id } }
        }
      })

      prisma.dynamicsOnTerms.create({
        data: {
          dynamic: { connect: { id: dynamicsId } },
          term: { connect: { id: updatedTerms[key].id } },
        },
      })
    }
  )

  dynamicImageIds.map(
    (imageId, key) => {
      prisma.image.update({
        where: {
          id: key
        },
        data: {
          terms: { connect: { id: imageId } }
        }
      })
    }
  )

  // 用語-章 複数
  chapterTermIds.map(
    (chapterId, key) => {
      const updatedTerms = prisma.term.update({
        where: {
          id: key
        },
        data: {
          dynamics: { connect: { id: chapterId } }
        }
      })

      prisma.chapter.update({
        where: {
          id: 2
        },
        data: {
          terms: { connect: { id: updatedTerms[key].id } }
        }
      })

      prisma.chaptersOnTerms.create({
        data: {
          chapter: { connect: { id: chapterId } },
          term: { connect: { id: updatedTerms[key].id } },
        },
      })

    }
  )

  chapterImageIds.map(
    (imageId, key) => {
      prisma.image.update({
        where: {
          id: key
        },
        data: {
          terms: { connect: { id: imageId } }
        }
      })
    }
  )

  // 用語-作品 1
  prisma.dynamic.update({
    where: { id: dynamicIds[1] },
    data: { termId: dynamicTermId },
  })

  prisma.term.update({
    where: {
      id: dynamicTermId
    },
    data: {
      dynamics: { connect: {id: dynamicIds[0] } }
    }
  })

  prisma.image.update({
    where: {
      id: dynamicImageId
    },
    data: {
      terms: { connect: {id: dynamicTermId } }
    }
  })

  // 用語-章 1
  prisma.section.update({
    where: { id: chapterIds[0] },
    data: { termId: chapterTermId },
  })

  prisma.term.update({
    where: {
      id: chapterTermId
    },
    data: {
      sections: { connect: {id: chapterIds[0] } }
    }
  })

  prisma.image.update({
    where: {
      id: chapterImageId
    },
    data: {
      terms: { connect: {id: chapterTermId } }
    }
  })

  // 用語-区間 1
  prisma.section.update({
    where: { id: sectionIds[0] },
    data: { termId: sectionTermId },
  })

  prisma.term.update({
    where: {
      id: sectionTermId
    },
    data: {
      sections: { connect: {id: sectionIds[0] } }
    }
  })

  prisma.image.update({
    where: {
      id: sectionImageId
    },
    data: {
      terms: { connect: {id: sectionTermId } }
    }
  })

  // ファイルのリレーション
  prisma.image.update({
    where: {
      id: parentImageId
    },
    data: {
      folder: { connect: {id: parentFolderId } }
    }
  })

  prisma.image.update({
    where: {
      id: childImageId
    },
    data: {
      folder: { connect: {id: childFolderId } }
    }
  })

  prisma.image.update({
    where: {
      id: grandChildImageId
    },
    data: {
      folder: { connect: {id: grandChildFolderId } }
    }
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




