import { Link } from "react-router-dom";

const NavBar = ({ home, about, skills, contact, academlo }) => {
  return (
    <section className="flex flex-col flex-wrap w-[90%] gap-8 absolute top-[6rem] left-[4.5rem]">
      <Link
        to="/"
        className="relative text-lg w-[7rem] text-gray-400 hover:text-lg hover:text-zinc-500"
      >
        {home}
      </Link>
      <Link
        to="/about"
        className="relative text-lg w-[7rem] text-gray-400 hover:text-lg hover:text-zinc-500"
      >
        {about}
      </Link>
      <Link
        to="/skills"
        className="relative text-lg w-[7rem] text-gray-400 hover:text-lg hover:text-zinc-500"
      >
        {skills}
      </Link>
      <Link
        to="/contact"
        className="relative animate-text-slide text-lg w-[7rem] text-gray-400 hover:text-lg hover:text-cyan-500"
      >
        {contact}
      </Link>
      <div className="relative text-lg w-[7rem] text-gray-400 hover:text-lg hover:text-cyan-500">
        <a
          href="https://www.academlo.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {academlo}
        </a>
      </div>
    </section>
  );
};

export default NavBar;
