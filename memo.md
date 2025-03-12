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
`yarn prisma migrate dev --name update-updatedAt-column-and-unique --create-only`
`yarn prisma migrate dev --name remove-constraints-and-rename-title --create-only`
`yarn prisma migrate dev --name redesign-master-tables --create-only`
`yarn prisma migrate dev --name rename-primary-key --create-only`
`yarn prisma migrate dev --name add-size-master-table --create-only`
マイグレーションファイルを生成

`yarn prisma migrate dev`
作成したマイグレーションファイルを適用

// アップデート
yarn add --dev prisma@latest
yarn add @prisma/client@latest

// ER 図作成
yarn prisma generate

// ts ファイル実行（DB テストデータ作成）
yarn node --import ./ts-node.register.mjs prisma/seed-master
yarn node --import ./ts-node.register.mjs prisma/seed

error: Environment variable not found: DATABASE_URL.
--> schema.prisma:17
エラーが発生した場合,環境変数を指定
export DATABASE_URL=postgresql://postgres:pass@db:5432/dynamic_novel?schema=public

curl \
--header "Content-Type: application/json" \
--data '{"search_keyword": [],"sort_category": "4","sort_order": "asc","filter_keyword": [],"filter_start_date": "","filter_end_date": ""}' \
http://dynamic_novel_server:8080/proto.todo.v1.DynamicService/ListDynamics

総ステップ数（自動生成ファイルなどは除外）
git ls-files | grep -vE '^(node_modules|public/fonts|prisma/migrations|public/images|dist|\.next)/|yarn.lock|package-lock.json' | xargs wc -l

紐づくデータが存在しないときのエラー
cause: "No 'TypeImage' record(s) (needed to inline the relation on 'Image' record(s)) was found for a nested connect on one-to-many relation 'ImageToTypeImage'."
