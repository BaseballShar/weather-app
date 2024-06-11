import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Baseball's Weather Panel",
  description: "Powered by HKO",
};

const space = " ";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <footer className="flex justify-around bg-blue-200 py-2 text-lg font-mono">
          <p>
            Email:{space}
            <a className="footer-link" href="mailto:workingcth@gmail.com">
              workingcth@gmail.com
            </a>
          </p>
          <p>
            Github:{space}
            <a className="footer-link" href="https://github.com/BaseballShar/">
              BaseballShar
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}
