import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Baseball's Weather Panel",
  description: "Powered by HKO",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
