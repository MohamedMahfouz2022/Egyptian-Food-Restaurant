"use client";
import { useState, useEffect } from "react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib";
import { Button } from "@/components/ui";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const { totalQty } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <nav className={`
        fixed top-0 left-0 right-0 z-50 h-16 md:h-[72px]
        flex items-center justify-between px-4 sm:px-6 lg:px-[5%]
        transition-all duration-500 animate-fade-down
        ${scrolled || menuOpen
          ? "bg-[rgba(10,3,0,0.96)] backdrop-blur-xl border-b border-[var(--color-border)]"
          : "bg-transparent"
        }
      `}>
        {/* ── Logo ── */}
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 md:w-11 md:h-11 bg-gradient-to-br from-[#C84B11] to-[#FF6B35] rounded-xl flex items-center justify-center text-xl shadow-[0_4px_15px_#C84B1155]">
            🍽️
          </div>
          <div>
            <p className="font-display text-base md:text-lg font-bold text-[var(--color-text)] leading-none">
              {SITE_CONFIG.name}
            </p>
            <p className="text-[9px] md:text-[10px] text-accent tracking-wider">
              {SITE_CONFIG.tagline}
            </p>
          </div>
        </div>

        {/* ── Desktop links ── */}
        <div className="hidden md:flex items-center gap-7 lg:gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={label} href={href}
              className="text-[var(--color-muted)] text-sm font-semibold hover:text-accent transition-colors duration-300">
              {label}
            </a>
          ))}

          {/* Cart button */}
          <a href="#order" className="relative">
            <Button className="text-sm px-5 py-2 flex items-center gap-2">
              🛒 طلبي
              {totalQty > 0 && (
                <span className="absolute -top-2 -left-2 w-5 h-5 rounded-full bg-white text-[#C84B11] text-[11px] font-black flex items-center justify-center shadow-md animate-bounce-once">
                  {totalQty}
                </span>
              )}
            </Button>
          </a>
        </div>

        {/* ── Mobile: cart icon + hamburger ── */}
        <div className="flex md:hidden items-center gap-3">
          <a href="#order" className="relative">
            <span className="text-2xl">🛒</span>
            {totalQty > 0 && (
              <span className="absolute -top-1.5 -left-1.5 w-5 h-5 rounded-full bg-[#C84B11] text-white text-[10px] font-black flex items-center justify-center">
                {totalQty}
              </span>
            )}
          </a>

          <button onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col justify-center items-center w-8 h-8 gap-1.5" aria-label="Toggle menu">
            <span className={`block w-6 h-0.5 bg-[var(--color-text)] transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[var(--color-text)] transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[var(--color-text)] transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {/* ── Mobile drawer ── */}
      {menuOpen && (
        <div className="fixed top-16 left-0 right-0 z-40 bg-[#0f0400f0] backdrop-blur-xl border-b border-[var(--color-border)] md:hidden">
          <div className="flex flex-col items-center py-4">
            {NAV_LINKS.map(({ label, href }) => (
              <a key={label} href={href} onClick={() => setMenuOpen(false)}
                className="w-full text-center py-3.5 text-[var(--color-muted)] text-base font-semibold border-b border-[var(--color-border)] hover:text-accent transition-colors duration-200">
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
