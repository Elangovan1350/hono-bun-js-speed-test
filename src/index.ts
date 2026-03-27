import { Hono } from "hono";
import { serve } from "@hono/node-server";

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

serve(
  {
    fetch: app.fetch,
    port: 3003,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  },
);
