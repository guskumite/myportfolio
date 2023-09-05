function NavBarMobile({ open, onToggle }) {
  console.log(open);
  return (
    <div className="flex absolute top-[2rem] right-[1.8rem] w-[8rem]">
      <button className="block md:hidden px-4 bg-slate-50" onClick={onToggle}>
        <svg
          className="w-6 h-6 text-cyan-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <div
        className={`${
          open ? "block" : "hidden"
        } md:block md:static absolute md:h-auto h-[12rem] top-[4rem] left-0 md:w-[70%] w-[80%] bg-cyan-400 px-4 py-4`}
        style={{ zIndex: 9999 }}
      >
        <a className="text-sm hover:text-cyan-700 hover:text-lg" href="/">
          {" "}
          Home{" "}
        </a>
        <a className="text-sm hover:text-cyan-700 hover:text-lg" href="/about">
          {" "}
          About Me
        </a>
        <a
          className="text-xs hover:text-cyan-700 hover:text-lg"
          href="/contact"
        >
          {" "}
          Contact Me
        </a>
        <a
          className="text-sm hover:text-cyan-700 hover:text-lg"
          href="https://www.academlo.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Academlo
        </a>
      </div>
    </div>
  );
}

export default NavBarMobile;
