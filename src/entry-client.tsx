import { Counter } from "@components/Hello";

requestIdleCallback(() => Counter(), { timeout: 2000 });
