import { defineConfig } from "vite";
// import devServer from "@hono/vite-dev-server";
// import pages from "@hono/vite-cloudflare-pages";

export default defineConfig({
  plugins: [
    // pages(),
    // devServer({
    //   entry: "src/entry-server.tsx",
    // }),
  ],
  build: {
    minify: true,
    // outDir: "./dist",
    outDir: "./static/public",
  },
});
