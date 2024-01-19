import { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const html = document.querySelector("html");
    const theme = (localStorage.getItem("theme") as "dark" | "light") || "dark";

    if (!theme) localStorage.setItem("theme", "dark");
    setTheme(theme);

    html?.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const html = document.querySelector("html");
    const theme = (localStorage.getItem("theme") as "dark" | "light") || "dark";

    if (theme)
      localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
    setTheme(theme === "dark" ? "light" : "dark");

    html?.setAttribute("data-theme", theme);
  };

  return (
    <header role="banner" className="app_header">
      <section className="logo">
        <a href="/" aria-label="Home">
          <img
            className="img"
            src="/kuda-logo-no-background.png"
            alt="Kuda LLC Logo"
          />
        </a>
      </section>
      <section className="content" role="navigation">
        <nav className="nav" aria-label="Main Navigation">
          <ul className="nav_list">
            <li className="nav_item">
              <Link className="nav_link" to="/" replace>
                Home
              </Link>
            </li>
            <li className="nav_item">
              <Link className="nav_link" to="/projects" replace>
                Projects
              </Link>
            </li>
            <li className="nav_item">
              <Link className="nav_link" to="/about" replace>
                About
              </Link>
            </li>
            <li className="nav_item">
              <Link
                className="nav_link"
                to="https://discord.gg/qDRcUqhU46"
                target="_blank"
              >
                Discord
              </Link>
            </li>
          </ul>
        </nav>
        <hr className="content_hr" />
        <button
          className="content_btn toggle_theme"
          onClick={toggleTheme}
          aria-label="Toggle Theme"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {theme === "dark" ? (
              <>
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
              </>
            ) : (
              <>
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
              </>
            )}
          </svg>
        </button>
        <a
          className="content_link github"
          href="https://github.com/Kuda-Development"
          target="_blank"
          aria-label="GitHub Link"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
          </svg>
        </a>
        <button className="content_btn toggle_menu" aria-label="Toggle Menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          </svg>
        </button>
      </section>
    </header>
  );
}

export default memo(Header);
