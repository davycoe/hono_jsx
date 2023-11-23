import Helmet from "preact-helmet";

export const About = () => (
  <>
    <Helmet
      title="Preact About Page!"
      meta={[{ name: "description", content: "Helmet application" }]}
    />
    <h1>About!</h1>
    <a href="/">Home</a>
  </>
);
