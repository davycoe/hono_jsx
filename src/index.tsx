import { Hono } from "hono";
import { renderer } from "./renderer";

const app = new Hono();

export const View = (props: any) => (
  <h2 style={props.color}>Hello, Cloudflare Pages from Hono JSX!</h2>
);

app.get("*", renderer);

app.get("/", (c) => {
  return c.render(
    <>
      <View color="color:purple" />
      <a href="/123">purple</a>
    </>
  );
});

app.get("/123", (c) => {
  return c.render(
    <>
      <View color="color:red" />
      <a href="/">red</a>
    </>
  );
});

export default app;
