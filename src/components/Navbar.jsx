import { useCallback, useContext, useEffect, useState } from "react";
import { IoIosClose } from "react-icons/io";
import { TbMenu3 } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import greenLogo from "../assets/green-logo.png";
import "../styles/navbar.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import CustomToggle from "./CustomToggle";
import { ThemeContext } from "../context/ThemeContext";
import { SiLeetcode } from "react-icons/si";

const ExpandedNavbarComponent = ({ isOpen, onAnimationComplete, theme }) => {
  useEffect(() => {
    const nav = document.querySelector(".nav");
    const listItems = document.querySelectorAll(".nav ul li");
    const socialLinks = document.querySelectorAll(".nav ul div a");
    if (nav) {
      if (isOpen) {
        nav.style.height = "100vh";
        nav.style.padding = "4rem";
        let lastIndex = -1;
        listItems.forEach((item, index) => {
          item.style.transitionDelay = `${index * 0.1}s`;
          item.style.transform = "translateY(0) scaleY(1)";
          item.style.opacity = "1";
          lastIndex = index;
        });
        socialLinks.forEach((link) => {
          link.style.transitionDelay = `${lastIndex * 0.1}s`;
          link.style.scale = "1";
        });
      } else {
        nav.style.height = "0";
        nav.style.padding = "0";
        listItems.forEach((item) => {
          item.style.transitionDelay = "0s";
          item.style.transform = "translateY(100%) scaleY(0)";
        });
        socialLinks.forEach((link) => {
          link.style.transitionDelay = "0s";
          link.style.scale = "0";
        });
      }
    }
  }, [isOpen]);
  useEffect(() => {
    if (!isOpen) {
      const nav = document.querySelector(".nav");
      if (nav) {
        nav.addEventListener("transitionend", onAnimationComplete);
      }
      return () => {
        nav?.removeEventListener("transitionend", onAnimationComplete);
      };
    }
  }, [isOpen, onAnimationComplete]);
  return (
    <div
      className="nav"
      style={{ background: theme === "dark" ? "#897934" : "" }}
    >
      <div
        className="flex items-center justify-center gap-4 pt-16 opacity-0"
        role="presentation"
      >
        <Link to="/">
          <img src={logo} alt="Pinnata Logo" className="w-80" />
        </Link>
        <button>
          <TbMenu3 size={60} color="#efead5" />
        </button>
      </div>
      <ul
        className="flex flex-col items-center font-garamond text-[#50a3ab] text-5xl font-black overflow-y-scroll gap-8 no-scrollbar flex-1 max-md:text-4xl"
        style={{ color: theme === "dark" ? "#fff" : "" }}
      >
        <li>
          <Link to="/" className="nav-link" data-text="Home">
            Home
          </Link>
        </li>
        <li>
          <Link to="/my-event" className="nav-link" data-text="Recipes">
            Events
          </Link>
        </li>
        <li>
          <Link to="/add-event" className="nav-link">
            Add Event
          </Link>
        </li>
        <div className="flex items-center justify-center gap-8 mt-8">
          <Link
            to="https://www.linkedin.com/in/priya-pandey-292176206/"
            className="nav-link"
            aria-label="Facebook"
          >
            <FaLinkedin />
          </Link>
          <Link
            to="https://leetcode.com/u/sleepyTinker/"
            className="nav-link"
            aria-label="Instagram"
          >
            <SiLeetcode />
          </Link>
          <Link
            to="https://github.com/tinkerish"
            className="nav-link"
            aria-label="Twitter"
          >
            <FaGithub />
          </Link>
        </div>
      </ul>
    </div>
  );
};
const NavbarComponent = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAnimationEnded, setIsAnimationEnded] = useState(false);
  const location = useLocation();
  const themeContext = useContext(ThemeContext);
  const { theme, setTheme } = themeContext;
  useEffect(() => {
    setIsExpanded(false);
  }, [location]);
  const handleExpand = () => {
    if (!isExpanded) {
      setIsAnimationEnded(true);
    }
    setIsExpanded((prev) => !prev);
  };
  const handleAnimationEnd = () => {
    setIsAnimationEnded(false);
  };
  const handleThemeContext = useCallback(
    (value) => {
      setTheme(value === true ? "dark" : "light");
    },
    [setTheme]
  );
  return (
    <nav
      className="flex items-center justify-between px-24 pt-16 pb-4 nav-background-color max-xsm:px-16 max-xxsm:px-8"
      style={{ background: theme === "dark" ? "#2a6c74" : "" }}
    >
      <div className="cursor-pointer huh flex items-center justify-between w-full relative z-[100]">
        <Link to="/">
          <img
            src={
              isAnimationEnded ? (theme === "light" ? greenLogo : logo) : logo
            }
            alt="Pinnata Logo"
            className="w-72 max-md:w-60 flex-shrink-0 max-xxsm:w-48"
          />
        </Link>
        <div className="flex items-center gap-2">
          <button
            onClick={handleExpand}
            className={`${
              isAnimationEnded
                ? theme === "dark"
                  ? "bg-white text-black rounded-full w-fit"
                  : "close-button"
                : ""
            }`}
          >
            {isAnimationEnded ? (
              <IoIosClose
                size={60}
                color={theme === "dark" ? "#50a3ab" : "#efead5"}
                className="max-md:w-12 max-md:h-12 max-xxsm:w-10 max-xxsm:h-10"
              />
            ) : (
              <TbMenu3
                size={60}
                color="#efead5"
                className="max-md:w-12 max-xxsm:w-10"
              />
            )}
          </button>
          <CustomToggle
            value={theme === "light" ? false : true}
            onChange={handleThemeContext}
            type={"switch"}
            size={3}
          />
        </div>
      </div>
      <ExpandedNavbarComponent
        isOpen={isExpanded}
        onAnimationComplete={handleAnimationEnd}
        theme={theme}
      />
    </nav>
  );
};

export const Navbar = NavbarComponent;
