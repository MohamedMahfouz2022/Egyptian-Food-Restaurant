import { TESTIMONIALS } from "@/lib/constants";
import SectionHeader from "@/components/ui/SectionHeader";
import TestimonialCard from "@/components/ui/TestimonialCard";

export default function TestimonialsSection() {
  return (
    <section id="about" className="px-[8%] py-20">
      <SectionHeader title="بيقولوا عنا إيه؟" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-12 md:mt-16">
        {TESTIMONIALS.map((t, index) => (
          <TestimonialCard key={t.id} testimonial={t} index={index} />
        ))}
      </div>
    </section>
  );
}
