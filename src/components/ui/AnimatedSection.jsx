"use client";
import { useScrollAnimation } from "@/lib";

export default function AnimatedSection({ children, className = "", delay = 0, style = {} }) {
  const [ref, visible] = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
