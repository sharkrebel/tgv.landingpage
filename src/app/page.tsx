import { Hero } from "@/components/home/Hero";
import { AboutSection } from "@/components/home/AboutSection";
import { ProjectCarousel } from "@/components/home/ProjectCarousel";
import { VideoSection } from "@/components/home/VideoSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <AboutSection />
      <ProjectCarousel />
      <VideoSection />
    </div>
  );
}
