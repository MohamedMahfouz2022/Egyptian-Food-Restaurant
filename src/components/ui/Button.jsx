"use client";

const variants = {
  primary: "bg-gradient-to-br from-[#C84B11] to-[#FF6B35] text-white shadow-[0_8px_30px_#C84B1155] animate-pulse-glow hover:scale-105 hover:brightness-110",
  outline: "bg-transparent text-[var(--color-text)] border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]",
  ghost:   "bg-transparent text-[var(--color-accent)] border border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white",
};

export default function Button({ children, variant = "primary", className = "", ...props }) {
  return (
    <button
      className={`
        font-body font-bold rounded-xl cursor-pointer transition-all duration-300
        px-6 py-3 text-sm
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
