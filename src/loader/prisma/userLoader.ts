import { prisma } from '../../_prisma_generated/prisma-client'

export async function createUser() {
  const newUser = await prisma.createUser({ name: 'Alice' })
  return newUser
}

export async function allUsers() {
  const allUsers = await prisma.users()
  return allUsers
}
