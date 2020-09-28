import Head from "next/head";
import Main from "../components/Main/Main";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>AnyBlood</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;800&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <Navbar />
      <Main />
    </div>
  );
}
