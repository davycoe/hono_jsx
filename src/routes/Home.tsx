import { Link } from "preact-router/match";

import Helmet from "preact-helmet";

export const Home = () => (
  <>
    <Helmet title="Preact Home" />
    <h1>HOME!</h1>
    <Link href="/about">About</Link>
  </>
);
