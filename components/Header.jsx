import { FaGithub, FaHome, FaLinkedin } from "react-icons/fa";

export default function Header({ language, setLanguage }) {
  function toggleLanguage() {
    if (language === "en") {
      setLanguage("zh");
    } else {
      setLanguage("en");
    }
  }

  return (
    <header className="bg-blue-200 px-8 py-3 gap-4">
      {/* Render title as a separate line on small devices */}
      <p className="font-mono text-xl text-center pb-2 sm:hidden">
        Baseball&#39;s Weather Panel
      </p>
      <div className="flex justify-between items-center">
        <a href="https://baseballshar.github.io">
          <FaHome className="header-icon" />
        </a>
        {/* Render title inline on large devices */}
        <p className="font-mono text-xl hidden sm:block">
          Baseball&#39;s Weather Panel
        </p>
        <div className="flex gap-4 items-center">
          <a href="https://github.com/BaseballShar/weather-app">
            <FaGithub className="header-icon" />
          </a>
          <a href="https://www.linkedin.com/in/chan-tsz-ho-baseball-98b00923b/">
            <FaLinkedin className="header-icon" />
          </a>
          {/* Toggle between displaying in English and Chinese */}
          <div className="w-8">
            <p
              className="text-2xl header-icon cursor-pointer"
              onClick={toggleLanguage}
            >
              {language === "en" ? "EN" : "中"}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
