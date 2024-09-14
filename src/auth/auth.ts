import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'
import Resend from "next-auth/providers/resend"
import { render } from '@react-email/render'
// import Twitter from 'next-auth/providers/twitter'
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import { sendVerificationRequest } from '/src/libs/sendVerificationRequest'

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(new PrismaClient()),
  providers: [
    Google({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    // TwitterProvider({
    //   clientId: process.env.TWITTER_ID!,
    //   clientSecret: process.env.TWITTER_SECRET!,
    // }),
    GitHub({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    Resend({
      apiKey: process.env.RESEND_API_KEY!,
      from: "dynamic.novel@resend.dev",
      subject: 'dynamicNovelへようこそ',
      sendVerificationRequest: sendVerificationRequest
    }),
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
