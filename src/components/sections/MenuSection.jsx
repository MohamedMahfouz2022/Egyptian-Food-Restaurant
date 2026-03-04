"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MENU_CATEGORIES } from "@/lib";
import { SectionHeader } from "@/components/ui";
import MenuCard from "./MenuCard";

const FILTERS = [
  { id: "all", label: "الكل", emoji: "🍽️" },
  { id: "foul", label: "فول", emoji: "🫘" },
  { id: "falafel", label: "فلافل", emoji: "🟤" },
  { id: "koshary", label: "كشري", emoji: "🍲" },
  { id: "sandwiches", label: "سندوتشات", emoji: "🥙" },
  { id: "eggs", label: "بيض", emoji: "🍳" },
  { id: "meat", label: "لحوم", emoji: "🥩" },
  { id: "chicken", label: "فراخ", emoji: "🍗" },
  { id: "meals", label: "وجبات", emoji: "🍱" },
  { id: "drinks", label: "مشروبات", emoji: "🥤" },
];

// ── Category overview card ────────────────────────────────────
function CategoryCard({ category, index, onOpen }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      onClick={onOpen}
      style={{ border: `1px solid #3d1a00` }}
      className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#120500] to-[#1e0900] p-5 cursor-pointer group transition-all duration-300 hover:-translate-y-1"
    >
      {/* Corner glow */}
      <div style={{ background: `${category.accentColor}18` }}
        className="absolute -top-10 -right-10 w-28 h-28 rounded-full pointer-events-none group-hover:scale-150 transition-transform duration-500" />

      {/* Header */}
      <div className="flex items-center justify-between mb-4 relative z-10">
        <div className="flex items-center gap-3">
          <div style={{ background: `${category.accentColor}22`, border: `1px solid ${category.accentColor}44` }}
            className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl shrink-0">
            {category.emoji}
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-[var(--color-text)] leading-tight">
              {category.name}
            </h3>
            <span style={{ color: category.accentColor, background: `${category.accentColor}1a`, border: `1px solid ${category.accentColor}33` }}
              className="inline-block mt-0.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold">
              {category.tag}
            </span>
          </div>
        </div>
        <span className="text-[var(--color-subtle)] text-xs">{category.items.length} صنف</span>
      </div>

      {/* Divider */}
      <div style={{ background: `linear-gradient(90deg, transparent, ${category.accentColor}33, transparent)` }}
        className="h-px mb-3 relative z-10" />

      {/* Preview items — first 4 */}
      <div className="relative z-10 flex flex-col gap-0">
        {category.items.slice(0, 4).map((item, i) => (
          <div key={item.id} className="flex justify-between items-center py-2 border-b border-[#3d1a0033] last:border-0">
            <span style={{ color: category.accentColor }} className="font-display text-sm font-bold shrink-0">
              {item.price} <span className="text-[var(--color-subtle)] font-normal text-[10px]">ج</span>
            </span>
            <span className="text-[var(--color-text)] text-xs text-right">{item.name}</span>
          </div>
        ))}
      </div>

      {/* Show more button */}
      {category.items.length > 4 && (
        <div className="relative z-10 mt-3">
          <div style={{ borderColor: `${category.accentColor}44`, color: category.accentColor }}
            className="w-full py-2 rounded-xl border text-xs font-bold text-center transition-all duration-200 group-hover:opacity-80">
            عرض كل الأصناف ({category.items.length - 4} أكتر) ←
          </div>
        </div>
      )}
    </motion.div>
  );
}

// ── Main component ────────────────────────────────────────────
export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState(null); // null = show all
  const [activeFilter, setActiveFilter] = useState("all");

  const selectedCategory = activeCategory
    ? MENU_CATEGORIES.find((c) => c.id === activeCategory)
    : null;

  function openCategory(id) {
    setActiveCategory(id);
    setActiveFilter(id);
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function goBack() {
    setActiveCategory(null);
    setActiveFilter("all");
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const displayedCategories = activeFilter === "all"
    ? MENU_CATEGORIES
    : MENU_CATEGORIES.filter((c) => c.id === activeFilter);

  return (
    <section id="menu" className="px-4 sm:px-6 lg:px-[8%] py-16 md:py-24">
      <SectionHeader
        eyebrow="أشهر أطباقنا"
        title={selectedCategory ? selectedCategory.name : "قائمة الطعام"}
      />

      {/* ── Filter tabs ── */}
      <div className="flex flex-wrap justify-center gap-2 mt-8 mb-8">
        {FILTERS.map((f) => {
          const isAll = f.id === "all";
          const isActive = isAll ? activeCategory === null : activeFilter === f.id;
          return (
            <button key={f.id}
              onClick={() => isAll ? goBack() : openCategory(f.id)}
              style={isActive
                ? { background: "#C84B11", color: "#fff", borderColor: "#C84B11" }
                : { background: "transparent", color: "var(--color-muted)", borderColor: "var(--color-border)" }}
              className="px-3 md:px-4 py-1.5 md:py-2 rounded-full border text-xs md:text-sm font-semibold transition-all duration-200 hover:border-[#C84B11] hover:text-[#C84B11] whitespace-nowrap">
              {f.emoji} {f.label}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">

        {/* ══ VIEW A — كاردات الأقسام ══ */}
        {!activeCategory && (
          <motion.div key="categories"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {displayedCategories.map((cat, i) => (
              <CategoryCard key={cat.id} category={cat} index={i} onOpen={() => openCategory(cat.id)} />
            ))}
          </motion.div>
        )}

        {/* ══ VIEW B — كروت الأصناف ══ */}
        {activeCategory && selectedCategory && (
          <motion.div key={activeCategory}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.3 }}>

            {/* Back button */}
            <div className="flex items-center justify-between mb-6">
              <button onClick={goBack}
                className="flex items-center gap-2 text-[var(--color-muted)] hover:text-[#C84B11] transition-colors duration-200 text-sm font-semibold">
                <span>→</span> رجوع للكل
              </button>
              <div className="flex items-center gap-2">
                <span className="text-2xl">{selectedCategory.emoji}</span>
                <span style={{ color: selectedCategory.accentColor, background: `${selectedCategory.accentColor}1a`, border: `1px solid ${selectedCategory.accentColor}33` }}
                  className="px-3 py-1 rounded-full text-xs font-bold">
                  {selectedCategory.items.length} صنف
                </span>
              </div>
            </div>

            {/* Items grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {selectedCategory.items.map((item, i) => (
                <MenuCard key={item.id}
                  item={{ ...item, accent: selectedCategory.accentColor, emoji: selectedCategory.emoji }}
                  index={i} />
              ))}
            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </section>
  );
}