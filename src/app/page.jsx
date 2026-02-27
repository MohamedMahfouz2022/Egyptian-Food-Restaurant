import { Navbar, Footer } from "@/components/layout";
import {
  HeroSection,
  MarqueeStrip,
  MenuSection,
  FeaturesSection,
  TestimonialsSection,
  CTASection,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <MarqueeStrip />
        <MenuSection />
        <FeaturesSection />
        <TestimonialsSection />
        <CTASection />
      </main>

      <Footer />
    </>
  );
}
