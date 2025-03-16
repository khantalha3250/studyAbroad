import HomeHero from "./components/HomeHero";
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
