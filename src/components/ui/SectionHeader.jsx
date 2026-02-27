"use client";

import { motion } from "framer-motion";

export default function SectionHeader({ label, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      className="text-center"
    >
      {label && (
        <p className="section-label mb-3">{label}</p>
      )}
      <h2 className="font-display text-[52px] font-bold text-[#FFF5E6] leading-tight">
        {title}
      </h2>
      <div className="section-divider" />
    </motion.div>
  );
}
