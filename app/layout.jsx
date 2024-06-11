import { Inter } from "next/font/google";
import "./globals.css";
import { FaGithub, FaHome, FaLinkedin } from "react-icons/fa";
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
        <header className="flex justify-between items-center bg-blue-200 px-8 py-2 gap-4">
          <a href="https://baseballshar.github.io">
            <FaHome className="header-icon" />
          </a>
          <p className="font-mono text-xl">Baseball&#39;s Weather panel</p>
          <div className="flex gap-4">
            <a href="https://github.com/BaseballShar/weather-app">
              <FaGithub className="header-icon" />
            </a>
            <a href="https://www.linkedin.com/in/chan-tsz-ho-baseball-98b00923b/">
              <FaLinkedin className="header-icon" />
            </a>
          </div>
        </header>
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
