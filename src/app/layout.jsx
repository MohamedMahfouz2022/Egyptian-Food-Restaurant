import "./globals.css";

export const metadata = {
  title: "مطعم الحاج محفوظ | أكل شعبي أصيل",
  description:
    "من قلب الحواري المصرية، بنقدملك أكل شعبي بطعم البيت وروح الزمن الجميل",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
