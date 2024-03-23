[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

psql -U postgres

`yarn prisma init`
prisma/schema.prisma

`yarn prisma db pull`
既存 DB のスキーマの取得

`yarn prisma migrate dev --name initial-migration --create-only`
初期状態のマイグレーションファイルを生成

`yarn prisma migrate dev --name modify-sql-column-length --create-only`
マイグレーションファイルを更新

`yarn prisma migrate dev`
作成したマイグレーションファイルを適用

`yarn prisma generate`
ER 図作成

// ts ファイル実行（DB テストデータ作成）
// 実行前にpackage.jsonの記載を一時的に更新
// - "type": "commonjs"
// + "type": "module"
`yarn node --loader ts-node/esm prisma/seed.ts`

curl \
--header "Content-Type: application/json" \
--data '{"search_keyword": [],"sort_category": "4","sort_order": "asc","filter_keyword": [],"filter_start_date": "","filter_end_date": ""}' \
http://dynamic_novel_server:8080/proto.todo.v1.DynamicService/ListDynamics

curl \
--header "Content-Type: application/json" \
--data '{}' \
http://dynamic_novel_server:8080/proto.dynamic.v1.SortService/ListSorts
