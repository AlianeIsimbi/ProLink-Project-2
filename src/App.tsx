import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Stats } from "./components/Stats";
import { CallToAction } from "./components/CallToAction";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-blur-pattern relative">
      <Header />
      <main className="relative pt-16">
        <Hero />
        <div id="features">
          <Features />
        </div>
        <div id="impact">
          <Stats />
        </div>
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}