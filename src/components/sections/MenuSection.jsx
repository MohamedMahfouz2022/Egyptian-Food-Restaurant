"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MENU_CATEGORIES } from "@/lib/constants";
import MenuCategoryCard from "@/components/ui/MenuCategoryCard";
import MenuItemCard from "@/components/ui/MenuItemCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const FILTERS = [
  { id: "all", label: "الكل", emoji: "🍽️" },
  { id: "foul", label: "فول", emoji: "🫘" },
  { id: "falafel", label: "فلافل", emoji: "🟤" },
  { id: "koshary", label: "كشري", emoji: "🍲" },
  { id: "meat", label: "لحوم", emoji: "🥩" },
  { id: "chicken", label: "فراخ", emoji: "🍗" },
  { id: "eggs", label: "بيض", emoji: "🍳" },
  { id: "sandwiches", label: "سندوتشات", emoji: "🥙" },
  { id: "meals", label: "وجبات", emoji: "🍱" },
  { id: "drinks", label: "مشروبات", emoji: "🥤" },
];

export default function MenuSection() {
  const [ref, visible] = useScrollReveal(0.05);

  // null = show all category cards
  // string = show items of that category id
  const [activeCategory, setActiveCategory] = useState(null);

  const selectedCategory = activeCategory
    ? MENU_CATEGORIES.find((c) => c.id === activeCategory)
    : null;

  function openCategory(id) {
    setActiveCategory(id);
    // scroll to top of section smoothly
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function goBack() {
    setActiveCategory(null);
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <section id="menu" className="px-4 sm:px-6 lg:px-[8%] py-16 md:py-[100px]">

      {/* ── Header ── */}
      <SectionHeader
        label="✦ قائمة الأسعار ✦"
        title={selectedCategory ? selectedCategory.name : "اختار اللي يعجبك"}
      />

      {/* ── Filter tabs (shown in both views) ── */}
      <div className="mt-8 mb-8 flex gap-2 flex-wrap justify-center">
        {FILTERS.map((f) => {
          const isAll = f.id === "all";
          const isActive = isAll ? activeCategory === null : activeCategory === f.id;
          return (
            <button
              key={f.id}
              onClick={() => isAll ? goBack() : openCategory(f.id)}
              style={
                isActive
                  ? { background: "#C84B11", color: "#fff", borderColor: "#C84B11" }
                  : { background: "transparent", color: "#A0806A", borderColor: "#3d1a00" }
              }
              className="px-4 py-2 rounded-full border text-xs md:text-sm font-semibold transition-all duration-200 hover:border-[#C84B11] hover:text-[#C84B11] whitespace-nowrap"
            >
              {f.emoji} {f.label}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">

        {/* ══════════════════════════════════════
            VIEW A — كاردات الأقسام الكبيرة
        ══════════════════════════════════════ */}
        {!activeCategory && (
          <motion.div
            key="categories"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            ref={ref}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
          >
            {MENU_CATEGORIES.map((category, index) => (
              <MenuCategoryCard
                key={category.id}
                category={category}
                index={index}
                parentVisible={visible}
                onExpand={() => openCategory(category.id)}
              />
            ))}
          </motion.div>
        )}

        {/* ══════════════════════════════════════
            VIEW B — كروت الأصناف الصغيرة
        ══════════════════════════════════════ */}
        {activeCategory && selectedCategory && (
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
          >
            {/* Back button + category info */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={goBack}
                className="flex items-center gap-2 text-[#A0806A] hover:text-[#C84B11] transition-colors duration-200 text-sm font-semibold"
              >
                <span className="text-lg">→</span>
                رجوع للكل
              </button>

              <div className="flex items-center gap-2">
                <span className="text-2xl">{selectedCategory.emoji}</span>
                <span
                  style={{ color: selectedCategory.accentColor, background: `${selectedCategory.accentColor}1a`, border: `1px solid ${selectedCategory.accentColor}33` }}
                  className="px-3 py-1 rounded-full text-xs font-bold"
                >
                  {selectedCategory.items.length} صنف
                </span>
              </div>
            </div>

            {/* Items grid — 1 col mobile / 2 col sm / 3 col lg */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {selectedCategory.items.map((item, index) => (
                <MenuItemCard
                  key={item.name + index}
                  item={item}
                  accentColor={selectedCategory.accentColor}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </section>
  );
}
