import Hero from "@components/home/Hero";
import TopStories from "@components/home/TopStories";
import CategoryCarousel from "@components/home/CategoryCarousel";
import LeadershipMessage from "@components/home/LeadershipMessage";
import VlogCarousel from "@components/home/VlogCarousel";

export default function Home() {
  return (
    <div>
      <Hero />
      <LeadershipMessage />
      <TopStories />
      <VlogCarousel />
      <CategoryCarousel />
    </div>
  );
}
