"use client";

import { motion } from "framer-motion";

export default function TestimonialCard({ testimonial, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="card-base p-7"
    >
      {/* Author */}
      <div className="flex items-center gap-3 justify-start mb-4">
        <div className="text-right">
          <p className="text-[#FFF5E6] text-sm font-bold">{testimonial.name}</p>
          <p className="text-[#7A5A4A] text-xs">{testimonial.role}</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C84B11] to-[#FF6B35] flex items-center justify-center text-lg">
          😊
        </div>
      </div>

      {/* Quote */}
      <p className="text-[#C8A882] text-sm leading-[1.8] mb-5 text-right">
        &ldquo;{testimonial.text}&rdquo;
      </p>

      {/* Stars */}
      <p className="text-[#C84B11] text-xl text-left">
        {"★".repeat(testimonial.stars)}
      </p>
    </motion.div>
  );
}
