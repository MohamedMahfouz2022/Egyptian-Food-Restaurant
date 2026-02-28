"use client";

import { motion } from "framer-motion";

// PREVIEW_COUNT — عدد الأصناف المعروضة قبل زرار "عرض المزيد"
const PREVIEW_COUNT = 4;

export default function MenuCategoryCard({ category, index, parentVisible, onExpand }) {
  const previewItems = category.items.slice(0, PREVIEW_COUNT);
  const hasMore = category.items.length > PREVIEW_COUNT;

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      animate={parentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 48 }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: "easeOut" }}
      style={{ border: `1px solid #3d1a00` }}
      className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#120500] to-[#1e0900] flex flex-col transition-all duration-300 hover:border-[#5a2a00] hover:shadow-lg"
    >
      {/* ── Corner glow ── */}
      <div
        style={{ background: `${category.accentColor}18`, top: -50, right: -50 }}
        className="absolute w-32 h-32 rounded-full pointer-events-none"
      />

      {/* ── Header ── */}
      <div className="relative z-10 flex items-start justify-between p-5 pb-4">
        <div className="flex items-center gap-3">
          <div
            style={{ background: `${category.accentColor}22`, border: `1px solid ${category.accentColor}44` }}
            className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl shrink-0"
          >
            {category.emoji}
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-[#FFF5E6] leading-tight">
              {category.name}
            </h3>
            <span
              style={{ color: category.accentColor, background: `${category.accentColor}1a`, border: `1px solid ${category.accentColor}33` }}
              className="inline-block mt-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide"
            >
              {category.tag}
            </span>
          </div>
        </div>

        <span className="text-[#7A5A4A] text-xs mt-1 shrink-0">
          {category.items.length} صنف
        </span>
      </div>

      {/* ── Divider ── */}
      <div
        style={{ background: `linear-gradient(90deg, transparent, ${category.accentColor}33, transparent)` }}
        className="h-px mx-5 mb-3"
      />

      {/* ── Preview items ── */}
      <div className="relative z-10 flex-1 px-5 flex flex-col">
        {previewItems.map((item, i) => (
          <div
            key={item.name + i}
            className="flex items-start justify-between py-2.5 border-b border-[#3d1a0044] last:border-0 group"
          >
            <div className="flex-1 text-right ml-3">
              <p className="text-[#FFF5E6] text-xs md:text-sm font-semibold group-hover:text-white transition-colors duration-200">
                {item.name}
              </p>
              {item.desc && (
                <p className="text-[#7A5A4A] text-[10px] leading-relaxed mt-0.5">
                  {item.desc}
                </p>
              )}
            </div>
            <span
              style={{ color: category.accentColor }}
              className="font-display text-sm font-bold shrink-0 pt-0.5"
            >
              {item.price}
              <span className="text-[#7A5A4A] font-normal text-[10px] mr-0.5"> ج</span>
            </span>
          </div>
        ))}
      </div>

      {/* ── عرض المزيد — ينقل لـ view الأصناف ── */}
      <div className="relative z-10 px-5 pt-3 pb-5">
        {hasMore ? (
          <button
            onClick={onExpand}
            style={{ borderColor: category.accentColor + "55", color: category.accentColor }}
            className="w-full py-2.5 rounded-xl border text-xs md:text-sm font-bold tracking-wide transition-all duration-300 hover:opacity-80 flex items-center justify-center gap-2"
          >
            عرض كل الأصناف ({category.items.length - PREVIEW_COUNT} أكتر) ←
          </button>
        ) : (
          // لو الأصناف أقل من PREVIEW_COUNT — زرار عرض الكل برضو
          <button
            onClick={onExpand}
            style={{ borderColor: category.accentColor + "33", color: category.accentColor + "99" }}
            className="w-full py-2 rounded-xl border text-[11px] font-semibold transition-all duration-300 hover:opacity-80"
          >
            عرض على شكل كروت ←
          </button>
        )}
      </div>
    </motion.div>
  );
}
