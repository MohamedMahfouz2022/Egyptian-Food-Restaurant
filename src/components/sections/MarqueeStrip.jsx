import { MARQUEE_ITEMS } from "@/lib/constants";

export default function MarqueeStrip() {
  // Duplicate for seamless loop
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="bg-gradient-to-r from-[#C84B11] to-[#8B3010] py-3.5 overflow-hidden border-y border-[#FF6B3530]">
      <div className="flex gap-16 animate-marquee whitespace-nowrap w-[200%]">
        {items.map((item, i) => (
          <span
            key={i}
            className="font-display text-[15px] font-bold text-[#FFF5E6]"
          >
            🍽️ {item} •
          </span>
        ))}
      </div>
    </div>
  );
}
