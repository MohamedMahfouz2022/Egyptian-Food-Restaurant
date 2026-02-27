"use client";

import { motion } from "framer-motion";

export default function FeatureCard({ feature, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(200,75,17,0.13)" }}
      className="card-base text-center px-6 py-10"
    >
      <span className="text-5xl block mb-5">{feature.icon}</span>
      <h3 className="font-display text-[22px] text-[#FFF5E6] mb-2.5">
        {feature.title}
      </h3>
      <p className="text-[#7A5A4A] text-[13px] leading-[1.8]">
        {feature.description}
      </p>
    </motion.div>
  );
}
