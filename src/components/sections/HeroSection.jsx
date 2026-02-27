"use client";

import { motion } from "framer-motion";
import { STATS, SITE } from "@/lib/constants";

const FLOATING_EMOJIS = [
  { emoji: "🧅", className: "top-[5%]     right-[8%]   " },
  { emoji: "🌶️", className: "top-[18%]    left-[4%]     " },
  { emoji: "🥙", className: "bottom-[18%] right-[4%]   " },
  { emoji: "🫓", className: "bottom-[8%]  left-[8%]     " },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: "easeOut" },
});

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden px-4 sm:px-6 lg:px-[8%] pt-20 md:pt-[120px] pb-16 bg-pattern"
    >
      {/* ── Radial glow BG ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(200,75,17,0.08)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,107,53,0.06)_0%,transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_80%,rgba(139,69,19,0.08)_0%,transparent_40%)]" />
      </div>

      <div className="relative z-10 w-full">
        {/* ── Mobile: stacked | Desktop: 2 columns ── */}
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── Text ── */}
          <div className="text-center lg:text-right">
            {/* Badge */}
            <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 bg-[#C84B1120] border border-[#C84B1140] rounded-full px-4 py-1.5 mb-5">
              <span className="text-[#C84B11] text-xs font-bold">⭐ الأفضل في القاهرة</span>
              <span>🏆</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              {...fadeUp(0.2)}
              className="flex w-full justify-center lg:justify-start gap-2 font-display font-bold leading-snug my-4 text-5xl text-center sm:text-6xl lg:text-7xl"
            >
              <span className="text-shimmer">طعم</span>
              <span className="text-[#FFF5E6]">الأصالة</span>
              <span className="text-[#C84B11]">المصرية</span>
            </motion.h1>

            {/* Description */}
            <motion.p {...fadeUp(0.4)} className="text-[#A0806A] text-sm sm:text-base leading-[1.9] mb-8 max-w-[440px] mx-auto lg:mx-0 lg:ml-auto lg:text-right">
              من قلب الحواري المصرية، بنقدملك أكل شعبي بطعم البيت وروح الزمن
              الجميل. وصفات متوارثة من جيل لجيل، بمكونات طازجة وأيدي بتحب اللي
              بتعمله.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.6)} className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start ">
              <a href="#menu">
                <button className="btn-primary w-full sm:w-auto px-8 py-4 text-base animate-pulse-glow">
                  🍽️ شوف القائمة
                </button>
              </a>
              <a href="#contact">
                <button className="btn-outline w-full sm:w-auto px-7 py-4 text-base">
                  📍 وصفنا
                </button>
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div {...fadeUp(0.8)} className="flex justify-center lg:justify-end gap-6 sm:gap-10 mt-10">
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-2xl sm:text-3xl font-bold text-[#C84B11]">
                    {stat.value}
                  </p>
                  <p className="text-[#7A5A4A] text-[10px] sm:text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Visual (hidden on small, shown md+) ── */}
          <div className="relative flex items-center justify-center h-[280px] sm:h-[380px] lg:h-[520px]">
            {/* Rotating rings */}
            <div className="absolute w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] lg:w-[420px] lg:h-[420px] border border-dashed border-[#C84B1133] rounded-full animate-spin-slow" />
            <div className="absolute w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] lg:w-[320px] lg:h-[320px] border border-[#C84B1120] rounded-full animate-spin-slow-reverse" />

            {/* Center plate */}
            <div className="relative z-10 w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] lg:w-[220px] lg:h-[220px] rounded-full bg-gradient-to-br from-[#3d1500] to-[#1a0800] border-[3px] border-[#C84B11] flex items-center justify-center text-6xl lg:text-[80px] shadow-[0_0_60px_rgba(200,75,17,0.2),inset_0_0_40px_rgba(200,75,17,0.08)]">
              🍲
            </div>

            {/* Floating emojis */}
            {FLOATING_EMOJIS.map((item, i) => (
              <span
                key={i}
                className={`absolute text-3xl sm:text-4xl lg:text-5xl animate-float drop-shadow-2xl ${item.className}`}
                style={{ animationDelay: `${i * 0.7}s` }}
              >
                {item.emoji}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}