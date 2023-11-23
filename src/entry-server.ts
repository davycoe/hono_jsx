import { Hono } from "hono";
import App from "./App";
// import api from "./api";
import { ssr } from "../server";

const app = new Hono();

// app.route("/api", api);

app.get("*", ssr(App));

export default app;
