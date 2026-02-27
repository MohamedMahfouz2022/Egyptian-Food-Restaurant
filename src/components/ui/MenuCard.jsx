"use client";

import { useState } from "react";

export default function MenuCard({ item, index, parentVisible }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: parentVisible ? 1 : 0,
        transform: parentVisible
          ? hovered
            ? "translateY(-8px) scale(1.02)"
            : "translateY(0) scale(1)"
          : "translateY(50px)",
        transition: `opacity 0.6s ease ${index * 100}ms, transform 0.4s ease`,
        background: hovered
          ? "linear-gradient(135deg, #1a0800 0%, #2d1000 100%)"
          : "linear-gradient(135deg, #120500 0%, #1e0900 100%)",
        border: `1px solid ${hovered ? item.accentColor : "#3d1a00"}`,
        boxShadow: hovered
          ? `0 20px 40px ${item.accentColor}33`
          : "0 4px 20px rgba(0,0,0,0.4)",
        borderRadius: 16,
        padding: 28,
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow circle */}
      <div
        style={{
          position: "absolute",
          top: -40,
          right: -40,
          width: 120,
          height: 120,
          borderRadius: "50%",
          background: `${item.accentColor}${hovered ? "22" : "11"}`,
          transition: "background 0.4s ease",
          pointerEvents: "none",
        }}
      />

      {/* Top row */}
      <div className="flex justify-between items-start mb-4">
        <span className="text-5xl">{item.emoji}</span>
        <span
          style={{
            background: `${item.accentColor}33`,
            border: `1px solid ${item.accentColor}66`,
            color: item.accentColor,
          }}
          className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wide"
        >
          {item.tag}
        </span>
      </div>

      {/* Name */}
      <h3 className="font-display text-[22px] font-bold text-[#FFF5E6] mb-2 text-right">
        {item.name}
      </h3>

      {/* Description */}
      <p className="text-[#A0806A] text-[13px] leading-[1.7] mb-5 text-right">
        {item.description}
      </p>

      {/* Footer */}
      <div className="flex justify-between items-center">
        <span
          className="font-display text-2xl font-bold"
          style={{ color: item.accentColor }}
        >
          {item.price}
        </span>

        <button
          style={{
            background: hovered ? item.accentColor : "transparent",
            border: `1px solid ${item.accentColor}`,
            color: hovered ? "#fff" : item.accentColor,
            transition: "all 0.3s ease",
          }}
          className="px-4 py-2 rounded-lg text-[13px] font-body cursor-pointer"
        >
          اطلب دلوقتي
        </button>
      </div>
    </div>
  );
}
