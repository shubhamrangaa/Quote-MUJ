HEAD
import Head from "next/head";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>MUJ Blog</title>
        <meta name="description" content="MUJ BLOG" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </div>
  );