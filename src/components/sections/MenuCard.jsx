"use client";
import { useScrollAnimation } from "@/lib";
import { useCart } from "@/context/CartContext";

export default function MenuCard({ item, index }) {
  const [ref, visible] = useScrollAnimation();
  const { cart, addItem, removeItem } = useCart();
  const qty = cart[item.id]?.qty ?? 0;
  const { name, desc, price, tag, emoji, accent, id } = item;

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.6s ease ${index * 80}ms, transform 0.6s ease ${index * 80}ms`,
        border: `1px solid ${qty > 0 ? accent : "var(--color-border)"}`,
        boxShadow: qty > 0 ? `0 8px 32px ${accent}33` : "0 4px 20px rgba(0,0,0,0.3)",
      }}
      className="relative overflow-hidden rounded-2xl p-5 md:p-6 bg-gradient-to-br from-[#120500] to-[#1e0900] transition-all duration-300"
    >
      {/* Glow blob */}
      <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full pointer-events-none"
        style={{ background: `${accent}${qty > 0 ? "22" : "11"}`, transition: "background 0.3s" }} />

      {/* Top row */}
      <div className="flex justify-between items-start mb-3">
        <span className="text-4xl md:text-5xl">{emoji}</span>
        <span className="text-[10px] font-bold px-3 py-1 rounded-full border"
          style={{ background: `${accent}22`, borderColor: `${accent}55`, color: accent }}>
          {/* {tag} */}
          <span className="font-display text-base font-bold w-5 text-center" style={{ color: accent }}>
            {qty}
          </span>
        </span>
      </div>

      {/* Name */}
      <h3 className="font-display text-lg md:text-xl font-bold text-[var(--color-text)] mb-1.5 text-right">
        {name}
      </h3>

      {/* Desc */}
      <p className="text-[var(--color-muted)] text-xs md:text-sm leading-relaxed mb-4 text-right">
        {desc}
      </p>

      {/* Price + qty controls */}
      <div className="flex justify-between items-center">
        <span className="font-display text-xl md:text-2xl font-bold" style={{ color: accent }}>
          {price} ج
        </span>

        {/* +/- controls */}
        <div className="flex items-center gap-2">
          {qty > 0 && (
            <>
              <button
                onClick={() => removeItem(id)}
                style={{ borderColor: accent, color: accent }}
                className="w-8 h-8 rounded-lg border text-lg font-bold flex items-center justify-center hover:opacity-70 transition-opacity"
              >−</button>
              {/* <span className="font-display text-base font-bold w-5 text-center" style={{ color: accent }}>
                {qty}
              </span> */}
            </>
          )}
          <button
            onClick={() => addItem({ id, name, price })}
            style={{ background: accent }}
            className="w-8 h-8 rounded-lg text-white text-lg font-bold flex items-center justify-center hover:opacity-80 transition-opacity shadow-md"
          >+</button>
        </div>
      </div>
    </div>
  );
}
