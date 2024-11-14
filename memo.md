## Learn More

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
[API routes](https://nextjs.org/docs/api-routes/introduction)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## メモ
psql -U postgres

`yarn prisma init`
prisma/schema.prisma

`yarn prisma db pull`
既存 DB のスキーマの取得

`yarn prisma migrate dev --name initial-migration --create-only`
`yarn prisma migrate dev --name add-ViewedPages-tables-and-add-image-column --create-only`
マイグレーションファイルを生成

`yarn prisma migrate dev`
作成したマイグレーションファイルを適用

`yarn prisma generate`
ER 図作成

// ts ファイル実行（DB テストデータ作成）
`yarn node --import ./ts-node.register.mjs prisma/seed-master`

error: Environment variable not found: DATABASE_URL.
	-->  schema.prisma:17
エラーが発生した場合,環境変数を指定
export DATABASE_URL=postgresql://postgres:pass@db:5432/dynamic_novel?schema=public


curl \
--header "Content-Type: application/json" \
--data '{"search_keyword": [],"sort_category": "4","sort_order": "asc","filter_keyword": [],"filter_start_date": "","filter_end_date": ""}' \
http://dynamic_novel_server:8080/proto.todo.v1.DynamicService/ListDynamics



warning @mermaid-js/mermaid-cli > puppeteer@19.11.1: < 22.6.4 is no longer supported
warning eslint > file-entry-cache > flat-cache > rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
warning eslint > file-entry-cache > flat-cache > rimraf > glob@7.2.3: Glob versions prior to v9 are no longer supported
warning eslint > file-entry-cache > flat-cache > rimraf > glob > inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
warning eslint > @humanwhocodes/config-array@0.11.14: Use @eslint/config-array instead
warning eslint > @humanwhocodes/config-array > @humanwhocodes/object-schema@2.0.3: Use @eslint/object-schema instead
