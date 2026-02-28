"use client";

import { motion } from "framer-motion";

export default function MenuItemCard({ item, accentColor, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
      whileHover={{ y: -4, boxShadow: `0 16px 32px ${accentColor}25` }}
      style={{ border: `1px solid #3d1a00` }}
      className="relative rounded-xl overflow-hidden bg-gradient-to-br from-[#120500] to-[#1e0900] p-4 md:p-5 flex flex-col gap-2 transition-all duration-300 group hover:border-[#5a2a00]"
    >
      {/* Corner glow */}
      <div
        style={{ background: `${accentColor}12` }}
        className="absolute top-0 left-0 w-20 h-20 rounded-full -translate-x-8 -translate-y-8 pointer-events-none group-hover:scale-150 transition-transform duration-500"
      />

      {/* Top row — name + price */}
      <div className="flex items-start justify-between gap-3 relative z-10">
        <h4 className="font-display text-sm md:text-base font-bold text-[#FFF5E6] leading-snug text-right flex-1">
          {item.name}
        </h4>
        <div className="shrink-0 text-right">
          <span
            style={{ color: accentColor }}
            className="font-display text-base md:text-lg font-bold block leading-none"
          >
            {item.price}
          </span>
          <span className="text-[#7A5A4A] text-[10px]">جنيه</span>
        </div>
      </div>

      {/* Divider */}
      <div
        style={{ background: `linear-gradient(90deg, ${accentColor}44, transparent)` }}
        className="h-px w-full relative z-10"
      />

      {/* Description */}
      {item.desc && (
        <p className="text-[#A0806A] text-[11px] md:text-xs leading-relaxed text-right relative z-10 group-hover:text-[#C8A882] transition-colors duration-300">
          {item.desc}
        </p>
      )}
    </motion.div>
  );
}
