import Head from "next/head";
import Hero from "@components/home/Hero";
import TopStories from "@components/home/TopStories";
import CategoryCarousel from "@components/home/CategoryCarousel";
import VlogCarousel from "@components/home/VlogCarousel";
import Link from "next/link";

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
      <CategoryCarousel />
    </div>
  );
}
