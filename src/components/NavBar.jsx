import { Link } from "react-router-dom";

const NavBar = ({ home, about, skills, contact, academlo, dark }) => {
  let Color1 = "";
  if (dark === 0) {
    Color1 = "text-stone-950";
  }
  if (dark === 1) {
    Color1 = "text-gray-400";
  }
  console.log(Color1);
  return (
    <section className="flex flex-col flex-wrap w-[90%] gap-8 absolute top-[6rem] left-[2rem]">
      <Link
        to="/"
        className={`relative text-lg w-[7rem] ${Color1} hover:text-lg hover:text-zinc-500`}
      >
        {home}
      </Link>
      <Link
        to="/about"
        className={`relative text-lg w-[7rem] ${Color1} hover:text-lg hover:text-zinc-500`}
      >
        {about}
      </Link>
      <Link
        to="/skills"
        className={`relative text-lg w-[7rem] ${Color1} hover:text-lg hover:text-zinc-500`}
      >
        {skills}
      </Link>
      <Link
        to="/contact"
        className={`relative animate-text-slide text-lg w-[7rem] ${Color1} hover:text-lg hover:text-cyan-500`}
      >
        {contact}
      </Link>
      <div
        className={`relative text-lg w-[7rem] ${Color1} hover:text-lg hover:text-cyan-500`}
      >
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
