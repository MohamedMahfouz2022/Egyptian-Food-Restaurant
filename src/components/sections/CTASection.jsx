import { SITE } from "@/lib/constants";

export default function CTASection() {
  return (
    <section id="contact" className="px-4 sm:px-6 lg:px-[8%] py-16 md:py-[100px]">
      <div className="relative bg-gradient-to-br from-[#1a0500] via-[#2d0e00] to-[#1a0500] border border-[#C84B1140] rounded-2xl md:rounded-3xl px-6 sm:px-10 md:px-16 py-14 md:py-20 text-center overflow-hidden">
        {/* Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,75,17,0.08)_0%,transparent_60%)] pointer-events-none" />

        <div className="relative z-10">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-[#FFF5E6] leading-tight mb-5">
            جعان؟ 🍽️
            <br />
            <span className="text-[#C84B11]">اطلب دلوقتي!</span>
          </h2>

          <p className="text-[#A0806A] text-sm sm:text-base leading-relaxed mb-8 md:mb-10">
            متاحين ٧ أيام في الأسبوع من الصبح ٧ للمدمغة ١٢ بالليل
            <br className="hidden sm:block" />
            التوصيل متاح على طول على أبوابك
          </p>

          <a href={`tel:${SITE.phone}`} className="inline-block">
            <button className="btn-primary px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-lg animate-pulse-glow">
              📞 اتصل بنا: {SITE.phone}
            </button>
          </a>

          <p className="text-[#7A5A4A] text-xs sm:text-sm mt-5">
            📍 {SITE.address} — {SITE.hours}
          </p>
        </div>
      </div>
    </section>
  );
}