export { auth as middleware } from './'
export async middleware() => {
  matcher: ['/((?!api|_next/static|_next/image|images|next).*)'], // ?!で否定です。
  // matcher: ['/((?!register|api|login|search|_next/static|_next/image|images|next).*)'], // ?!で否定です。
}
