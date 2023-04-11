import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>ユーザ</h1>
      <div>作品一覧画面</div>
      <div>
        <div>検索バー</div>
        <div>表示設定</div>
      </div>
      <div>
        <h3>作品一覧</h3>
        <div>
          <h3>作品1</h3>
          <div><Link href="作品1URL">作品1サムネ</Link></div>
          <div><Link href="作品1URL">作品1情報</Link></div>
        </div>
      </div>
    </>
  )
}
