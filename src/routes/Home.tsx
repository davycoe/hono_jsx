import Helmet from "preact-helmet";
import type { RouterProps } from "preact-router";

export const Home = (path: RouterProps) => (
  <>
    <Helmet title="Preact Home" />
    <h1 class="flex bg-slate-700 px-2">HOME!</h1>
    <a href="/about">About</a>
  </>
);
