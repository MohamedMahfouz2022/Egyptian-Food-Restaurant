"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, SITE } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 lg:px-[5%] h-16 md:h-[72px] transition-all duration-300 ${scrolled || menuOpen
          ? "bg-[#0a0300ee] backdrop-blur-xl border-b border-[#3d1a0033]"
          : "bg-transparent"
          }`}
      >
        {/* ── Logo ── */}
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 md:w-11 md:h-11 rounded-xl bg-gradient-to-br from-[#C84B11] to-[#FF6B35] flex items-center justify-center text-xl md:text-2xl shadow-[0_4px_15px_rgba(200,75,17,0.35)]">
            🍽️
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-display text-base md:text-xl font-bold text-[#FFF5E6] leading-none">
              {SITE.name}
            </p>
            <p className="text-[9px] md:text-[10px] text-[#C84B11] tracking-widest">
              {SITE.tagline}
            </p>
          </div>
        </div>

        {/* ── Desktop Links ── */}
        <div className="hidden md:flex items-center gap-7 lg:gap-9">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#A0806A] text-sm font-semibold transition-colors duration-300 hover:text-[#C84B11]"
            >
              {link.label}
            </a>
          ))}
          <a href={`tel:${SITE.phone}`}>
            <button className="btn-primary px-5 py-2.5 text-sm animate-pulse-glow">
              📞 اطلب الآن
            </button>
          </a>
        </div>

        {/* ── Mobile Hamburger ── */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#FFF5E6] transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#FFF5E6] transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#FFF5E6] transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </motion.nav>

      {/* ── Mobile Menu Drawer ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-0 right-0 z-40 bg-[#0f0400ee] backdrop-blur-xl border-b border-[#3d1a0055] md:hidden"
          >
            <div className="flex flex-col items-center gap-0 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="w-full text-center py-3.5 text-[#A0806A] text-base font-semibold border-b border-[#3d1a0033] hover:text-[#C84B11] hover:bg-[#C84B1108] transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
              <a href={`tel:${SITE.phone}`} className="mt-4 mb-2">
                <button className="btn-primary px-8 py-3 text-base">
                  📞 اطلب الآن
                </button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}