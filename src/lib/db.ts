import { PrismaClient } from "@prisma/client";
import { hashPassword } from "./auth";

const prisma = new PrismaClient();

export async function getUserByEmail(email) {
  const user = await prisma.user.findUnique({
    where: { email },
  })
  return user
}

export async function createUser(email, password) {
  const hashedPassword = await hashPassword(password);
  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  });
  return user;
}
