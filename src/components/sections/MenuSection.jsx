"use client";

import { MENU_ITEMS } from "@/lib/constants";
import MenuCard from "@/components/ui/MenuCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function MenuSection() {
  const [ref, visible] = useScrollReveal();

  return (
    <section id="menu" className="px-4 sm:px-6 lg:px-[8%] py-16 md:py-[100px]">
      <SectionHeader label="✦ أشهر أطباقنا ✦" title="قائمة الطعام" />

      {/* 1 col mobile → 2 col tablet → 3 col desktop */}
      <div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-12 md:mt-16"
      >
        {MENU_ITEMS.map((item, index) => (
          <MenuCard key={item.id} item={item} index={index} parentVisible={visible} />
        ))}
      </div>
    </section>
  );
}