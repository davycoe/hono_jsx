import Helmet from "preact-helmet";
import { Link } from "preact-router/match";

export const About = () => (
  <>
    <Helmet title="Preact About Page!" />
    <h1>About!</h1>
    <Link href="/">Home</Link>
  </>
);
