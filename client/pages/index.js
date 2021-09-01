import Head from "next/head";
import Hero from "@components/home/Hero";
import TopStories from "@components/home/TopStories";
import CategoryCarousel from "@components/home/CategoryCarousel";
import LeadershipMessage from "@components/home/LeadershipMessage";
import VlogCarousel from "@components/home/VlogCarousel";
import Link from "next/link";

export default function Home() {
	return (
		<div>
			<Head>
				<title>MUJ E-Newsletter</title>
				<meta name='description' content='MUJ E-Newsletter' />
				<link rel='icon' href='/assets/Bioscope.png' />
			</Head>
			<Hero />
			<LeadershipMessage />
			<TopStories />
			<VlogCarousel />
			<CategoryCarousel />
		</div>
	);
}
