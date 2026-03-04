"use client";
import { useState } from "react";
import { SITE_CONFIG } from "@/lib";
import { AnimatedSection } from "@/components/ui";
import { useCart } from "@/context/CartContext";

export default function CTASection() {
  const { cartItems, totalPrice, totalQty, addItem, removeItem, clearCart } = useCart();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [address, setAddress] = useState("");
  const [sent, setSent] = useState(false);

  function buildWhatsAppMessage() {
    const lines = [
      `🍽️ *طلب جديد من موقع ${SITE_CONFIG.name}*`,
      ``,
      `👤 *الاسم:* ${name}`,
      `📞 *التليفون:* ${phone}`,
      `📍 *العنوان:* ${address}`,
      ``,
      `📋 *تفاصيل الطلب:*`,
      ...cartItems.map((i) => `• ${i.name} × ${i.qty} = ${i.price * i.qty} ج`),
      ``,
      `💰 *الإجمالي: ${totalPrice} جنيه*`,
    ];
    if (notes.trim()) lines.push(``, `📝 *ملاحظات:* ${notes}`);
    return encodeURIComponent(lines.join("\n"));
  }

  function handleSubmit() {
    if (!name.trim() || !phone.trim() || cartItems.length === 0) return;
    const url = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${buildWhatsAppMessage()}`;
    window.open(url, "_blank");
    setSent(true);
    setTimeout(() => { clearCart(); setSent(false); setName(""); setPhone(""); setAddress(""); setNotes(""); }, 3000);
  }

  const inputClass = "w-full bg-[#1a0800] border border-[var(--color-border)] rounded-xl px-4 py-3 text-[var(--color-text)] text-sm placeholder:text-[var(--color-subtle)] focus:outline-none focus:border-[var(--color-accent)] transition-colors duration-200 text-right";

  return (
    <section id="order" className="px-4 sm:px-6 lg:px-[8%] py-16 md:py-24">
      <AnimatedSection>
        <div className="relative overflow-hidden rounded-3xl border border-[#C84B1140] bg-gradient-to-br from-[#1a0500] via-[#2d0e00] to-[#1a0500] px-5 sm:px-10 md:px-16 py-12 md:py-16">

          {/* Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#C84B1112_0%,transparent_65%)] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-accent text-xs font-bold tracking-widest">✦ اطلب دلوقتي ✦</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--color-text)] mt-2 leading-tight">
                {cartItems.length === 0 ? "اختار من القائمة 🍽️" : `طلبك جاهز! 🎉`}
              </h2>
              {cartItems.length === 0 && (
                <p className="text-[var(--color-muted)] text-sm mt-3">
                  روح للقائمة فوق وضيف اللي عايزه، هنبعته على الواتساب بضغطة واحدة
                </p>
              )}
            </div>

            {/* ── Cart summary ── */}
            {cartItems.length > 0 && (
              <div className="mb-8 rounded-2xl border border-[var(--color-border)] overflow-hidden">
                <div className="bg-[#1a0800] px-5 py-3 border-b border-[var(--color-border)] flex justify-between items-center">
                  <span className="text-[var(--color-muted)] text-xs">{totalQty} صنف</span>
                  <span className="text-accent text-sm font-bold">🛒 طلبك</span>
                </div>

                <div className="divide-y divide-[var(--color-border)]">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center justify-between px-5 py-3 bg-[#120500]">
                      {/* Name + price */}
                      <div className="text-right flex-1">
                        <p className="text-[var(--color-text)] text-sm font-semibold">{item.name}</p>
                        <p className="text-[var(--color-subtle)] text-xs">{item.price} ج × {item.qty} = <span className="text-accent font-bold">{item.price * item.qty} ج</span></p>
                      </div>

                      {/* +/- */}
                      <div className="flex items-center gap-2 mr-4">
                        <button onClick={() => removeItem(item.id)}
                          className="w-7 h-7 rounded-lg border border-[var(--color-border)] text-[var(--color-muted)] font-bold flex items-center justify-center hover:border-accent hover:text-accent transition-colors">
                          −
                        </button>
                        <span className="font-display text-base font-bold text-accent w-5 text-center">{item.qty}</span>
                        <button onClick={() => addItem(item)}
                          className="w-7 h-7 rounded-lg bg-[#C84B11] text-white font-bold flex items-center justify-center hover:opacity-80 transition-opacity">
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Total */}
                <div className="bg-[#1a0800] px-5 py-4 flex justify-between items-center border-t border-[var(--color-border)]">
                  <span className="font-display text-2xl font-bold text-accent">{totalPrice} جنيه</span>
                  <span className="text-[var(--color-muted)] text-sm font-bold">الإجمالي</span>
                </div>
              </div>
            )}

            {/* ── Form fields ── */}
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input value={name} onChange={(e) => setName(e.target.value)}
                  placeholder="اسمك" className={inputClass} />
                <input value={phone} min="11" max="11" inputMode="numeric" pattern="[0-9]*" onChange={(e) => setPhone(e.target.value)}
                  placeholder="رقم تليفونك" type="tel" className={inputClass} />
              </div>
              <input value={address} onChange={(e) => setAddress(e.target.value)}
                placeholder="عنوان التوصيل" className={inputClass} />

              <textarea value={notes} onChange={(e) => setNotes(e.target.value)}
                placeholder="ملاحظات إضافية (اختياري) — مثلاً: بدون بصل، ..."
                rows={3} className={`${inputClass} resize-none`} />

              {/* Submit */}
              <button
                onClick={handleSubmit}
                disabled={!name.trim() || !phone.trim() || !address.trim() || cartItems.length === 0}
                className={`w-full py-4 rounded-2xl font-body font-bold text-base transition-all duration-300 flex items-center justify-center gap-3
                  ${sent
                    ? "bg-green-700 text-white"
                    : (!name.trim() || !phone.trim() || !address.trim() || cartItems.length === 0)
                      ? "bg-[#3d1a00] text-[var(--color-subtle)] cursor-not-allowed"
                      : "bg-gradient-to-br from-[#C84B11] to-[#FF6B35] text-white shadow-[0_8px_30px_#C84B1155] hover:scale-[1.02] hover:brightness-110 animate-pulse-glow"
                  }`}
              >
                {sent
                  ? "✅ تم الإرسال! شكراً"
                  : cartItems.length === 0
                    ? "اضيف أصناف من القائمة الأول"
                    : `📲 ابعت طلبك على الواتساب (${totalPrice} ج)`}
              </button>

              {(!name.trim() || !phone.trim() || !address.trim()) && cartItems.length > 0 && (
                <p className="text-center text-[var(--color-subtle)] text-xs">
                  ✏️ اكتب اسمك ورقمك وعنوانك الأول عشان تقدر تبعت
                </p>
              )}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}