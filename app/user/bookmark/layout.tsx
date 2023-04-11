"use client"

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex">
      <div className="bg-gray-100 p-2 w-48">左サイドバー</div>
      <div className="p-2">{children}</div>
      <div className="bg-gray-100 p-2 w-48">右サイドバー</div>
    </div>
  );
}
