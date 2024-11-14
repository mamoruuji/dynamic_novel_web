import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-url', request.url)

  const userPathPattern = /^\/user\/([^\/]+)(\/|$)/
  const url = request.nextUrl.clone()

  const match = userPathPattern.exec(url.pathname)
  if (match) {
    const userIdFromUrl = match[1]

    const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET })

    if (token?.userId !== userIdFromUrl) {
      url.pathname = '/unauthorized'
      return NextResponse.redirect(url)
    }
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders
    }
  })
}

export const config = {
  matcher: [
    '/user/:userId*',
    '/user/:userId/bookmarks',
    '/user/:userId/follows',
    '/user/:userId/images',
    '/user/:userId/search',
    '/user/:userId/create/:dynamicId*',
  ],
}
