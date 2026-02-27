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
      {/* Stars */}
      <p className="text-[#C84B11] text-xl mb-3">
        {"★".repeat(testimonial.stars)}
      </p>

      {/* Quote */}
      <p className="text-[#C8A882] text-sm leading-[1.8] mb-5 text-right">
        "{testimonial.text}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 justify-end">
        <div className="text-right">
          <p className="text-[#FFF5E6] text-sm font-bold">{testimonial.name}</p>
          <p className="text-[#7A5A4A] text-xs">{testimonial.role}</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C84B11] to-[#FF6B35] flex items-center justify-center text-lg">
          😊
        </div>
      </div>
    </motion.div>
  );
}
