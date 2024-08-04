import bcrypt from 'bcryptjs'

export async function saltAndHashPassword(password) {
  const saltRounds = 10  // セキュリティレベルを決めるラウンド数
  const salt = await bcrypt.genSalt(saltRounds)
  const hashedPassword = await bcrypt.hash(password, salt)
  return hashedPassword
}
