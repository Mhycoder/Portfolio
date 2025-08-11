import style from "./NavBar.module.css";
import { CiDark, CiSun } from "react-icons/ci";
import { MdOutlineMessage } from "react-icons/md";
import { IoNewspaperOutline, IoHomeOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { HiOutlineUserCircle } from "react-icons/hi";
import React, { useEffect, useState, createContext } from "react";
import useLocalStorage from "../../useLocalStorage";
import Pattern from "../../PatternBg/Pattern";

export const PatternContext = createContext();

export default function NavBar() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  const [themeIcon, setThemeIcon] = useState("dark");
  const [activeNav, setActiveNav] = useState(0);
  const [prevNav, setPrevNav] = useState(0);

  function handleToggleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setThemeIcon(newTheme);
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    updatePrevAnimation();
  }, [activeNav]);

  function handleActiveNav(index) {
    setPrevNav(activeNav);
    setActiveNav(index);
  }

  function updatePrevAnimation() {
    if (prevNav < 0 || prevNav > 3) return;

    const navLinks = document.querySelectorAll(`.${style.prevNav}`);
    let lastElement = null;

    navLinks.forEach((nav, i) => {
      if (i < navLinks.length - 1) {
        nav.classList.remove(style.prevNav);
        i++;
      } else {
        lastElement = nav;
      }
    });

    if (!lastElement) return;

    let diff = activeNav - prevNav;
    let x1 = diff * 120;

    lastElement.style.setProperty("--x1", `${x1}%`);

    lastElement.classList.remove(style.prevNav);
    void lastElement.offsetWidth;
    lastElement.classList.add(style.prevNav);
  }

  const iconComponents = [
    <IoHomeOutline key="home" className={style.icons} />,
    <HiOutlineUserCircle key="user" className={style.icons} />,
    <IoNewspaperOutline key="resume" className={style.icons} />,
    <RxDashboard key="projects" className={style.icons} />,
  ];

  const labels = ["Home", "About", "Resume", "Projects"];

  return (
    <>
      <div className={style.nav}>
        <ul>
          {[0, 1, 2, 3].map((index) => {
            return (
              <li key={index}>
                <a
                  href={`#${labels[index].toLowerCase()}`}
                  className={`${activeNav == index ? style.active : null} ${
                    prevNav == index ? style.prevNav : null
                  }`}
                  onClick={() => handleActiveNav(index)}
                >
                  <p>{labels[index]}</p>
                  {iconComponents[index]}
                </a>
              </li>
            );
          })}
        </ul>
        <div className={style.navActions}>
          <a className={style.themeToggle} onClick={handleToggleTheme}>
            {themeIcon === "dark" ? (
              <CiDark className={style.toggleIcons} />
            ) : (
              <CiSun className={style.toggleIcons} />
            )}
          </a>
          <a href="#" className={style.contactBtn}>
            <p>Contact Me </p>
            <MdOutlineMessage className={style.contactIcon} />
          </a>
        </div>
      </div>
      <PatternContext.Provider value={theme}>
        <Pattern />
      </PatternContext.Provider>
    </>
  );
}
