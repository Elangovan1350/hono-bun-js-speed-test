import { Hono } from "hono";

const user = new Hono();
user.post("/signin", async (c) => {
  const { name, email, password } = await c.req.json();
  return c.json({ name, email, password });
});

export default user;
