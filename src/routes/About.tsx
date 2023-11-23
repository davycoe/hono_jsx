import Helmet from "preact-helmet";
import type { RouterProps } from "preact-router";

export const About = (path: RouterProps) => (
  <>
    <Helmet
      title="Preact About Page!"
      meta={[{ name: "description", content: "Helmet application" }]}
    />
    <h1>About!</h1>
    <a href="/">Home</a>
  </>
);
