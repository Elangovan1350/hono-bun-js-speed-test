import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/hello/:name", (c) => {
  const { name } = c.req.param();
  return c.text(`Hello ${name}!`);
});
app.post("/login", async (c) => {
  const { name, email, password } = await c.req.json();
  return c.json({ name, email, password });
});

export default app;
