"use client"

import '../src/styles/globals.css'
import Header from './components/header';
import Footer from './components/footer';
// import { useState } from "react";

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  // const [count, setCount] = useState(0)

  return (
    <html lang="jp">
      <head />
      <body>
        <Header />

        {/* <button onClick={() => setCount(count + 1)}>+</button> */}
        {/* <div>{count}</div> */}
        {children}

        <Footer />
      </body>

    </html>
  );
}
