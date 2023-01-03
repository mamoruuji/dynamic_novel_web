import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>共通</h1>
      <div>作品　閲覧　画面</div>
      <div>
        左ナビゲーションバー  目次
        <div>
          <h3>章1</h3>
          <div><Link href="ページ1URL">ページ1</Link></div>
          <div><Link href="ページ2URL">ページ2</Link></div>
        </div>
        <div>
          <h3>章2</h3>
          <div><Link href="ページ1URL">ページ1</Link></div>
          <div><Link href="ページ2URL">ページ2</Link></div>
        </div>
      </div>
      <div>
        作品表示
        <div>セクション</div>
      </div>
      <div>
        右ナビゲーションバー  メモ
      </div>
    </>
  )
}
