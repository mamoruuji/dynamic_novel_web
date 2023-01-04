import Link from 'next/link';

const header = () => {
  return (
    <header>
      <h2>Header</h2>
      <div>
        <Link href="/">ホームへ</Link>
      </div>
      <div>
        <h2>ユーザ名 or ゲスト</h2><Link href="/user/page"></Link>
      </div>
    </header>
  );
};

export default header;
