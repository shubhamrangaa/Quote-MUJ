import Head from "next/head";
import Hero from "../components/Hero";
import TopStories from "../components/TopStories";
import Community from "../components/Community";
import VlogCarousel from "../components/VlogCarousel";

export default function Home() {
  return (
    <div>
      <Head>
        <title>MUJ Blog</title>
        <meta name="description" content="MUJ BLOG" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <TopStories />
        <VlogCarousel />
      <Community />
    </div>
  );
}
