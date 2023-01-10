"use client"

import Header from '../reader/header';

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="jp">
      <body>
        <Header />

        {children}

      </body>

    </html>
  );
}
