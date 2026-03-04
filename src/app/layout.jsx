import "./globals.css";
// import { Navbar, Footer } from "@/components/layout";
import { CartProvider } from "@/context/CartContext";

export const metadata = {
  title: "مطعم الحاج محفوظ | أكل شعبي أصيل",
  description: "من قلب دمنهور — كشري، فول، طعمية، وأكثر. وصفات متوارثة بمكونات طازجة.",
};

export const viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <CartProvider>
          {/* <Navbar /> */}
          <main>{children}</main>
          {/* <Footer /> */}
        </CartProvider>
      </body>
    </html>
  );
}