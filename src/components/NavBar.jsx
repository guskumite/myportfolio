import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <section className="flex flex-row flex-wrap w-[90%] absolute top-[2rem] left-[9.5rem]">
      <Link
        to="/"
        className="relative text-lg w-[7rem] text-slate-50 hover:text-md hover:text-cyan-500"
      >
        Home
      </Link>
      <Link
        to="/about"
        className="relative text-lg w-[7rem] text-slate-50 hover:text-md hover:text-cyan-500"
      >
        About Me
      </Link>
      <Link
        to="/"
        className="relative text-lg w-[7rem] text-slate-50 hover:text-md hover:text-cyan-500"
      >
        Skills
      </Link>
      <Link
        to="/contact"
        className="relative animate-text-slide text-lg w-[7rem] text-slate-50 hover:text-md hover:text-cyan-500"
      >
        Contact Me
      </Link>
      <div className="relative text-lg w-[7rem] text-slate-50 hover:text-md hover:text-cyan-500">
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
