import { NextApiRequest, NextApiResponse } from "next"

type Todo = {
  title: string
}

const todos: Todo[] = [
  {title: "a"},
  {title: "b"},
  {title: "c"},
]

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await new Promise((resolve) => setTimeout(resolve, 4000))

  res.status(200).json(todos)
}
