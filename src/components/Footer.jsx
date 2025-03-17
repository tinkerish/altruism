import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/footer.css";
import greenLogo from "../assets/green-logo.png";
import logo from "../assets/logo.png";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { SiLeetcode } from "react-icons/si";

const FooterComponent = () => {
  const themeContext = useContext(ThemeContext);

  const { theme } = themeContext;

  return (
    <div
      className="footer-irregular-shape bg-[#efead5] px-36 pt-20 pb-4 text-[#50a3ab] flex flex-col gap-10 text-2xl tracking-widest max-xl:px-10 max-sm:text-xl max-xxsm:text-lg"
      style={{
        background: theme === "dark" ? "#897934" : "",
        color: theme === "dark" ? "#fff" : "",
      }}
    >
      <div className="flex justify-between items-center max-lg:flex-col max-lg:gap-10 max-lg:items-start w-full">
        <img
          src={theme === "dark" ? logo : greenLogo}
          alt="Pinnata Logo"
          className="w-72 max-md:w-60 flex-shrink-0 max-xxsm:w-48"
        />
        <div className="flex justify-between items-center gap-10 max-[1400px]:flex-col max-[1400px]:gap-4 max-lg:flex-row max-lg:justify-between max-lg:w-full max-sm:flex-col max-sm:gap-4 max-sm:items-start ">
          <div className="flex flex-col gap-4">
            <Link to={"/"}>Our Story</Link>
            <Link to={"/"}>Contact Us</Link>
            <Link to={"/"}>Privacy Policy</Link>
          </div>
          <div className="flex flex-col gap-4">
            <Link to={"/"}>Location</Link>
            <Link to={"/"}>Contact Us</Link>
            <Link to={"/"}>Privacy Policy</Link>
          </div>
        </div>
        <div className="social-media flex flex-col gap-4 max-lg:w-full">
          <p>Join our community</p>
          <div className="flex gap-6 items-center">
            <Link to="https://www.linkedin.com/in/priya-pandey-292176206/">
              <FaLinkedin size={35} />
            </Link>
            <Link to="https://leetcode.com/u/sleepyTinker/">
              <SiLeetcode size={35} />
            </Link>
            <Link to="https://github.com/tinkerish">
              <FaGithub size={35} />
            </Link>
          </div>
          <hr
            className="bg-[#50a3ab] border-none h-[2px] mt-4"
            style={{
              background: theme === "dark" ? "#fff" : "",
            }}
          />
          <div className="flex items-center gap-2 mt-4">
            <span>
              <FaWhatsapp size={35} />
            </span>
            <span>+91 8617669061</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <span>&copy;2024, Pinata Pockets. All rights reserved</span>
        <span>
          {" "}
          Created by
          <Link to={"https://dev.to/priya2422"}> Priya</Link>
        </span>
      </div>
    </div>
  );
};

// export const Footer =         (FooterComponent);
export const Footer = FooterComponent;
