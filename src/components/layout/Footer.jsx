import { SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-[#3d1a00] px-4 sm:px-6 lg:px-[8%] py-8 md:py-10">
      {/* Mobile: stacked | Desktop: row */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-right">
        <p className="text-[#7A5A4A] text-xs sm:text-sm">
          جميع الحقوق محفوظة © ٢٠٢٥ {SITE.name}
        </p>

        <p className="font-display text-lg sm:text-xl text-[#C84B11]">بنطبخ بحب ❤️</p>

        <div className="flex gap-4 sm:gap-5">
          {SITE.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="text-[#7A5A4A] text-xs sm:text-sm transition-colors duration-300 hover:text-[#C84B11]"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}