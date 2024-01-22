import { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Props {
  toggleMenu: () => void;
}

const DEFAULT_OPACITY_DIV_CLOSE_MENU = 0;
const NEW_OPACITY_DIV_CLOSE_MENU = 1;
const DEFAULT_OPACITY_MENU = 0;
const NEW_OPACITY_MENU = 1;
const DEFAULT_TRANSFORM_MENU = "scale(0)";
const NEW_TRANSFORM_MENU = "scale(1)";

function Menu({ toggleMenu }: Props) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [widthWindow, setWidthWindow] = useState(window.innerWidth);
  const localTheme = localStorage.getItem("theme") || "dark";

  const toggleTheme = () => {
    const html = document.querySelector("html");
    if (theme)
      localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
    setTheme(theme === "dark" ? "light" : "dark");

    html?.setAttribute("data-theme", theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    setTheme(localTheme);
  }, [localTheme]);

  useEffect(() => {
    const menuCloseDiv = document.getElementById("close-menu");
    const menu = document.getElementById("menu-header");
    if (!(menuCloseDiv instanceof HTMLDivElement)) return;
    if (!(menu instanceof HTMLElement)) return;
    menuCloseDiv.style.opacity = `${DEFAULT_OPACITY_DIV_CLOSE_MENU}`;
    menu.style.opacity = `${DEFAULT_OPACITY_MENU}`;
    menu.style.transform = `${DEFAULT_TRANSFORM_MENU}`;
    document.body.style.overflow = "hidden";

    const addOptions = async () => {
      await new Promise((resolve) => setTimeout(resolve, 100));
      menuCloseDiv.style.opacity = `${NEW_OPACITY_DIV_CLOSE_MENU}`;
      await new Promise((resolve) => setTimeout(resolve, 100));
      menu.style.opacity = `${NEW_OPACITY_MENU}`;
      menu.style.transform = `${NEW_TRANSFORM_MENU}`;
    };

    const deleteOptions = async () => {
      document.body.style.overflow = "auto";
      menu.style.opacity = `${DEFAULT_OPACITY_MENU}`;
      menu.style.transform = `${DEFAULT_TRANSFORM_MENU}`;
      await new Promise((resolve) => setTimeout(resolve, 200));
      menuCloseDiv.style.opacity = `${DEFAULT_OPACITY_DIV_CLOSE_MENU}`;
      await new Promise((resolve) => setTimeout(resolve, 100));
      toggleMenu();
    };

    addOptions();

    menuCloseDiv.addEventListener("click", deleteOptions);

    return () => {
      menuCloseDiv.removeEventListener("click", deleteOptions);
    };
  }, []);

  useEffect(() => {
    const handleChangeSize = () => setWidthWindow(window.innerWidth);
    window.addEventListener("resize", handleChangeSize);

    const menuCloseDiv = document.getElementById("close-menu");
    const menu = document.getElementById("menu-header");
    if (!(menuCloseDiv instanceof HTMLDivElement)) return;
    if (!(menu instanceof HTMLElement)) return;

    const deleteOptions = async () => {
      document.body.style.overflow = "auto";
      menu.style.opacity = `${DEFAULT_OPACITY_MENU}`;
      menu.style.transform = `${DEFAULT_TRANSFORM_MENU}`;
      await new Promise((resolve) => setTimeout(resolve, 200));
      menuCloseDiv.style.opacity = `${DEFAULT_OPACITY_DIV_CLOSE_MENU}`;
      await new Promise((resolve) => setTimeout(resolve, 100));
      toggleMenu();
    };

    if (widthWindow > 700) deleteOptions();

    return () => {
      window.removeEventListener("resize", handleChangeSize);
    };
  }, [widthWindow]);
  return (
    <section className="menu-header">
      <div className="close-menu" id="close-menu"></div>
      <nav className="menu" id="menu-header">
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
          <li className="nav_item">
            <Link
              className="nav_link"
              to="https://github.com/Kuda-Development"
              target="_blank"
            >
              Github
            </Link>
          </li>
        </ul>
        <hr className="menu_divider" />
        <div className="switch-theme">
          <h1 className="title">Switch Theme</h1>
          <button
            className="switch toggle_theme"
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
              {localTheme === "dark" ? (
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
        </div>
      </nav>
    </section>
  );
}

export default memo(Menu);
