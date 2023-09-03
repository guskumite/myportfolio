import { Link } from "react-router-dom";
import { useEffect } from "react";

const NavBar = () => {
  return (
    <section className="flex flex-row flex-wrap w-full absolute top-[2rem] left-[5rem]">
      <Link
        to="/"
        className="relative text-sm w-[7rem] text-slate-50 hover:text-md hover:text-cyan-500"
      >
        Home
      </Link>
      <Link
        to="/#projects"
        className="relative text-sm w-[7rem] text-slate-50 hover:text-md hover:text-cyan-500"
      >
        Projects
      </Link>
      <Link
        to="/about"
        className="relative text-sm w-[7rem] text-slate-50 hover:text-md hover:text-cyan-500"
      >
        About Me
      </Link>
      <Link
        to="/contact"
        className="relative text-sm w-[7rem] text-slate-50 hover:text-md hover:text-cyan-500"
      >
        Contact Me
      </Link>
      <div className="relative text-sm w-[7rem] text-slate-50 hover:text-md hover:text-cyan-500">
        <a
          href="https://www.academlo.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Academlo{" "}
        </a>
      </div>
    </section>
  );
};

export default NavBar;
