import { getUserByEmail, createUser } from "../../../lib/db";

export default async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).end(); // Method Not Allowed
  }

  const { email, password } = req.body;

  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    return res.status(422).json({ message: "User already exists!" });
  }

  const user = await createUser(email, password);
  res.status(201).json({ message: "User created!", user });
};
