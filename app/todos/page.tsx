import Link from "next/link"

type Todo = {
  title: string
}

async function getData() {
  const res = await fetch("http://localhost:3000/api/todos", {
    // cache: "no-cache", // SSG
    cache: "no-store", // SSR
    // next: {
    //   revalidate: 10,
    // } // ISR
  })
  return res.json()
}

export default async function Page() {
  const todos: Todo[] = await getData();

  return (
    <>
      <h1>Todos</h1>
      {todos.map((todo, key) => (
        <div key={key}>{todo.title}</div>
      ))}
      <Link href="/">Home</Link>
    </>
  )
}

