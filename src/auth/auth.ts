import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'
import Credentials from 'next-auth/providers/credentials'
// import Resend from "next-auth/providers/resend"
// import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import { saltAndHashPassword } from "../lib/password"
import { signInSchema } from "../lib/zod"

export const { handlers, auth, signIn, signOut } = NextAuth({
  // adapter: PrismaAdapter(prisma),
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    Google({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    Credentials({
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        try {
          let user = null
          const { email, password } = await signInSchema.parseAsync(credentials)
          const pwHash = saltAndHashPassword(credentials.password)
          user = await getUserFromDb(credentials.email, pwHash)

          if (!user) throw new Error("User not found.")

          return user
        } catch (error) {
          if (error instanceof ZodError) return null
        }
      },
    }),
    // TwitterProvider({
    //   clientId: process.env.TWITTER_ID!,
    //   clientSecret: process.env.TWITTER_SECRET!,
    // }),
  ],
  basePath: '/api/auth',
  callbacks: {
    authorized({ request, auth }){
      try {
        const { pathname } = request.nextUrl
        if(pathname === '/user') return !!auth
        return ture
      } catch (error) {
        console.log(error)
      }
    },
    jwt({token, trigger, session}){
      if(trigger === 'update') token.name = session.user.name
      return token
    },
  },
})
