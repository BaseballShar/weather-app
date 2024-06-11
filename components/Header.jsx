"use client";
import { FaGithub, FaHome, FaLinkedin } from "react-icons/fa";

export default function Header() {
  /* For small devices */
  if (window.innerWidth < 640) {
    return (
      <header className="bg-blue-200 px-8 py-2 gap-4">
        <p className="font-mono text-xl text-center">
          Baseball&#39;s Weather panel
        </p>
        <div className="flex justify-between">
          <a href="https://baseballshar.github.io">
            <FaHome className="header-icon" />
          </a>
          <div className="flex gap-4">
            <a href="https://github.com/BaseballShar/weather-app">
              <FaGithub className="header-icon" />
            </a>
            <a href="https://www.linkedin.com/in/chan-tsz-ho-baseball-98b00923b/">
              <FaLinkedin className="header-icon" />
            </a>
          </div>
        </div>
      </header>
    );
  }

  /* For medium or larger devices */
  return (
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
  );
}
