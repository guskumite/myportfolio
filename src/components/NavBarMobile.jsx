import { useState } from "react";

function NavBarMobile({ open, setOpen }) {
  setOpen(localStorage.getItem("navbarOpen") === "true" ? true : false);
  console.log(open);
  return (
    <div className="flex absolute top-[2rem] right-[2rem]">
      <button
        className="block md:hidden px-4 bg-slate-50"
        onClick={() => setOpen(!open)}
      >
        <svg
          className="w-6 h-6"
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
        } md:block md:static absolute md:h-auto h-screen top-[4rem] left-0 md:w-auto w-full bg-gray-100 px-4 py-4`}
      >
        <a href="https://google.com.mx"> Hola </a>
      </div>
    </div>
  );
}

export default NavBarMobile;
