import 'ts-node/register'
import { PrismaClient } from '@prisma/client'
import {
  typeData,
  positionData,
  bubbleData,
  fontData,
  sortData,
} from './data/fixed.ts'

const prisma = new PrismaClient()

const deleteAllMaster = async () => {
  try {
    await prisma.sort.deleteMany()
    await prisma.type.deleteMany()
    await prisma.position.deleteMany()
    await prisma.bubble.deleteMany()
    await prisma.font.deleteMany()
    await prisma.$queryRaw`ALTER SEQUENCE sorts_sort_id_seq RESTART WITH 1;`
    await prisma.$queryRaw`ALTER SEQUENCE types_type_id_seq RESTART WITH 1;`
    await prisma.$queryRaw`ALTER SEQUENCE positions_position_id_seq RESTART WITH 1;`
    await prisma.$queryRaw`ALTER SEQUENCE bubbles_bubble_id_seq RESTART WITH 1;`
    await prisma.$queryRaw`ALTER SEQUENCE fonts_font_id_seq RESTART WITH 1;`
    console.log('マスタデータの削除完了')
  } catch (error) {
    console.error('マスタの削除中にエラーが発生しました', error)
  } finally {
    await prisma.$disconnect()
  }
}

const createMasterData = async () => {
  try {
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
    await prisma.sort.createMany({
      data: sortData,
    })
    console.log('マスタの登録完了')
  } catch (error) {
    console.error('マスタの登録中にエラーが発生しました', error)
  } finally {
    await prisma.$disconnect()
  }
}

async function main() {
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
