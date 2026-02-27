<div align="center">

<img src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/NextJS-Dark.svg" width="60" />

# 🍽️ مطعم الحاج محفوظ

### Landing Page — أكل شعبي مصري أصيل

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38BDF8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-FF0055?style=flat-square&logo=framer)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](./LICENSE)

</div>

---

## 📌 نظرة عامة

Landing page احترافية ومتجاوبة مع جميع الأجهزة لمطعم مأكولات شعبية مصرية. المشروع مبني على **Next.js 14 App Router** مع تصميم عربي RTL أصيل، أنيميشن سلس بـ **Framer Motion**، وكود منظم بهيكل component-based واضح.

---

## ✨ المميزات

- 📱 **Fully Responsive** — متجاوب مع موبايل، تابلت، وديسكتوب
- 🌙 **Dark Theme** — تصميم داكن بألوان برتقالية مستوحاة من أجواء المطابخ المصرية
- ⚡ **Framer Motion** — أنيميشن على الـ scroll وعند الـ hover
- 🍔 **Mobile Hamburger Menu** — قائمة جانبية على الشاشات الصغيرة
- 🔠 **Arabic RTL Support** — دعم كامل للنص العربي من اليمين لليسار
- 🗂️ **Clean Architecture** — تقسيم واضح: layout / sections / ui / lib
- 📦 **Single Source of Truth** — كل الداتا في `lib/constants.js`
- 🪝 **Custom Hooks** — `useScrollReveal` للكشف عن العناصر عند الـ scroll
- 🛢️ **Barrel Exports** — `index.js` في كل فولدر لـ imports نظيفة

---

## 🖥️ المعاينة

| الصفحة | الوصف |
|--------|-------|
| Hero | عنوان رئيسي مع visual متحرك وإحصائيات |
| Marquee | شريط متحرك بأسماء الأكل |
| القائمة | 6 أطباق مع كاردات تفاعلية |
| المميزات | 4 نقاط قوة المطعم |
| الآراء | 3 تقييمات من العملاء |
| CTA | دعوة للتواصل والطلب |

---

## 🗂️ هيكل المشروع

```
egyptian-food-restaurant/
│
├── app/
│   ├── globals.css          ← CSS variables + animations + utility classes
│   ├── layout.js            ← Root layout + metadata + viewport
│   └── page.js              ← Main page — يجمع كل الـ sections
│
├── components/
│   │
│   ├── layout/              ← مكونات الهيكل العام
│   │   ├── Navbar.js        ← Sticky navbar + hamburger menu
│   │   ├── Footer.js        ← Footer بـ social links
│   │   └── index.js         ← Barrel export
│   │
│   ├── sections/            ← أقسام الصفحة الرئيسية
│   │   ├── HeroSection.js       ← Hero مع parallax + floating emojis
│   │   ├── MarqueeStrip.js      ← شريط متحرك
│   │   ├── MenuSection.js       ← قائمة الطعام
│   │   ├── FeaturesSection.js   ← المميزات
│   │   ├── TestimonialsSection.js ← آراء العملاء
│   │   ├── CTASection.js        ← Call to action
│   │   └── index.js             ← Barrel export
│   │
│   └── ui/                  ← مكونات قابلة لإعادة الاستخدام
│       ├── MenuCard.js          ← كارت الأكلة مع hover effect
│       ├── FeatureCard.js       ← كارت المميزات
│       ├── TestimonialCard.js   ← كارت رأي العميل
│       ├── SectionHeader.js     ← عنوان قسم (reusable)
│       └── index.js             ← Barrel export
│
├── lib/
│   ├── constants.js         ← 🔑 كل الداتا في مكان واحد
│   └── hooks/
│       └── useScrollReveal.js  ← Custom hook للـ scroll animation
│
├── .gitignore
├── package.json
├── tailwind.config.js
└── README.md
```

---

## 🚀 تشغيل المشروع محلياً

### المتطلبات

- Node.js >= 18
- npm أو yarn أو pnpm

### الخطوات

```bash
# 1. Clone المشروع
git clone https://github.com/your-username/egyptian-food-restaurant.git
cd egyptian-food-restaurant

# 2. تنزيل الـ dependencies
npm install

# 3. تشغيل dev server
npm run dev
```

افتح المتصفح على 👉 [http://localhost:3000](http://localhost:3000)

---

## 🛠️ الأوامر المتاحة

```bash
npm run dev      # تشغيل development server
npm run build    # build للـ production
npm run start    # تشغيل production server
npm run lint     # فحص الكود بـ ESLint
```

---

## 🎨 Tech Stack

| التقنية | الإصدار | الاستخدام |
|---------|---------|-----------|
| [Next.js](https://nextjs.org/) | 14.2 | Framework — App Router |
| [React](https://react.dev/) | 18.3 | UI Library |
| [Tailwind CSS](https://tailwindcss.com/) | 3.4 | Styling |
| [Framer Motion](https://www.framer.com/motion/) | 11 | Animations |
| [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) | — | Design tokens |

---

## ✏️ تخصيص الداتا

كل بيانات الموقع موجودة في ملف واحد فقط:

```
lib/constants.js
```

عدّل فيه وكل حاجة هتتغير تلقائياً:

```js
// اسم المطعم وبياناته
export const SITE = { name: "...", phone: "...", ... };

// روابط الـ navigation
export const NAV_LINKS = [...];

// قائمة الطعام
export const MENU_ITEMS = [...];

// المميزات
export const FEATURES = [...];

// آراء العملاء
export const TESTIMONIALS = [...];
```

---

## 📦 Deploy على Vercel

أسهل طريقة للـ deploy:

```bash
# عن طريق Vercel CLI
npx vercel

# أو ارفع على GitHub وربطه بـ Vercel من الـ dashboard
```

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

---

## 📐 Responsive Breakpoints

| Breakpoint | الشاشة | التخطيط |
|-----------|--------|---------|
| `default` | < 640px (موبايل) | عمود واحد — stacked |
| `sm` | 640px+ (تابلت صغير) | عمودين في القائمة |
| `md` | 768px+ (تابلت) | navbar كاملة تظهر |
| `lg` | 1024px+ (ديسكتوب) | 3–4 أعمدة — full layout |

---

## 🤝 المساهمة

1. Fork المشروع
2. أنشئ branch جديد: `git checkout -b feature/your-feature`
3. Commit تغييراتك: `git commit -m 'feat: add something'`
4. Push: `git push origin feature/your-feature`
5. افتح Pull Request

---

## 📄 الرخصة

هذا المشروع تحت رخصة [MIT](./LICENSE) — تقدر تستخدمه وتعدّل عليه بحرية.

---

<div align="center">

صُنع بـ ❤️ وكود نظيف

</div>
