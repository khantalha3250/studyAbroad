import Image from "next/image";
import HomeHero from "./components/HomeHero";
import BackgroundAnimation from "./components/BackgroundAnimation";
import Header from "./components/Header";
import KeyHighlights from "./components/KeyHighlights ";

export default function Home() {
  return (
    <main>
      {/* <BackgroundAnimation /> */}
      <Header />
      <HomeHero />
      <KeyHighlights />
    </main>
  );
}
