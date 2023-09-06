import { withAuth } from "next-auth/middleware"

export default withAuth(
  function middleware(req) {
    // callbacks.authorizedがtrueの場合のみ進入できる
    console.log('in middleware: ', req.nextauth.token)
  },
  {
    callbacks: {
      // 認可に関する処理。ロールが `admin` ならOK
      authorized: ({req, token}) => {
        console.log('in authorized: ', token)
        // return token?.role === "admin"
        if(token) return true // デフォ
      },
    },
  }
)

export const config = {
    matcher: ["/((?!register|api|login|search|_next/static|_next/image|images|next).*)"], // ?!で否定です。
}
