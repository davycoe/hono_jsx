import { Hello } from "@components/Hello";

export const homeMeta = {
  title: "Home Page!!!",
};

export const Home = () => (
  <>
    <Hello />
    <br />
    <a href="/about">about </a>
  </>
);
