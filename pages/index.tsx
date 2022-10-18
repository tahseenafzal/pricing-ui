import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../component/Header";
import Price from "../component/Price";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Price />
    </>
  );
};

export default Home;
