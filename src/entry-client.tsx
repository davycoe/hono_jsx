import { hydrate } from "preact";
import App from "./App";

requestIdleCallback(hydrate(<App />, document.getElementById("root")!), {
  timeout: 2000,
});
