import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import SpaceOverview from "./components/SpaceOverview";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Features />
      <SpaceOverview />
      {/* <AppDownload />
      <Footer /> */}
    </div>
  );
}
