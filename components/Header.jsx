import { FaGithub, FaHome, FaLinkedin } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-blue-200 px-8 py-2 gap-4">
      {/* Render title as a separate line on small devices */}
      <p className="font-mono text-xl text-center sm:hidden">
        Baseball&#39;s Weather panel
      </p>
      <div className="flex justify-between">
        <a href="https://baseballshar.github.io">
          <FaHome className="header-icon" />
        </a>
        {/* Render title inline on large devices */}
        <p className="font-mono text-xl hidden sm:block">
          Baseball&#39;s Weather panel
        </p>
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
