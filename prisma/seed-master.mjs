import {
  deleteAllMasterData,
  deleteAllData,
  createMasterData,
} from './util'

import { db } from '../src/libs/prisma'

async function main() {
  await deleteAllData()
  await deleteAllMasterData()
  await createMasterData()
}

main()
  .catch((e) => {
    console.error('エラーが発生しました:', e.stack)
    process.exit(1)
  })
  .finally(async () => {
    await db.$disconnect()
  })
