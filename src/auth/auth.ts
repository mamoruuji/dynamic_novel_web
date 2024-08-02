import NextAuth, { NextAuthConfig } from 'next-auth'
import GitHub from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'
// import Resend from "next-auth/providers/resend"
// import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

export const config: NextAuthConfig = {
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
    // Resend,
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
}

export const { handlers, auth, signIn, signOut } = NextAuth(config)
