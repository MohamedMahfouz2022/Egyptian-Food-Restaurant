import { FEATURES } from "@/lib/constants";
import SectionHeader from "@/components/ui/SectionHeader";
import FeatureCard from "@/components/ui/FeatureCard";

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative px-[8%] py-[100px] bg-gradient-to-b from-[#0A0300] via-[#120800] to-[#0A0300]"
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,75,17,0.05)_0%,transparent_70%)] pointer-events-none" />

      <SectionHeader label="✦ ليه تختارنا ✦" title="اللي بيميزنا" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-12 md:mt-16">
        {FEATURES.map((feature, index) => (
          <FeatureCard key={feature.title} feature={feature} index={index} />
        ))}
      </div>
    </section>
  );
}
