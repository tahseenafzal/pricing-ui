import type { NextPage } from "next";
import Features from "../component/Features";
import Header from "../component/Header";
import Price from "../component/Price";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Price />
      <Features />
    </>
  );
};

export default Home;
