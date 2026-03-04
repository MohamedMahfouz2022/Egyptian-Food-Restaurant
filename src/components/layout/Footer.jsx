import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] px-[8%] py-10 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-[var(--color-subtle)] text-sm">
        جميع الحقوق محفوظة © ٢٠٢٦ {SITE_CONFIG.name}
      </p>

      <p className="font-display text-lg text-accent">بنطبخ بحب ❤️</p>

      <div className="flex gap-5">
        {SOCIAL_LINKS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="text-[var(--color-subtle)] text-sm hover:text-accent transition-colors duration-300"
          >
            {label}
          </a>
        ))}
      </div>
    </footer>
  );
}