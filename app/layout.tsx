"use client"

import Link from "next/link";
import { useState } from "react";

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  // const [count, setCount] = useState(0)

  return (
    <html lang="jp">
      <head />
      <body>
        <header>
          <h2>Header</h2>
          <div>
            <Link href="/">ホームへ</Link>
          </div>
          <div>
            <h2>ユーザ名 or ゲスト</h2><Link href="/user/page"></Link>
          </div>
        </header>

        {/* <button onClick={() => setCount(count + 1)}>+</button> */}
        {/* <div>{count}</div> */}
        {children}

        <footer>
          <h2>Footer</h2>
          <div>
          <Link href="/">ホームへ</Link>
          </div>
        </footer>
      </body>

    </html>
  );
}
