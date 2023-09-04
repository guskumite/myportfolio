import { useEffect, useState, useRef } from "react";
import mobileImg from "../assets/mobile.png";
import desktopImg from "../assets/desktop.png";
import pokeIco from "../assets/pokedex_icon.png";
import clothIco from "../assets/clothing.png";
import crudIco from "../assets/crud.png";
import amznIco from "../assets/amazon_bookstore.png";
import wthrIco from "../assets/weather_icon.png";
import "../App.css";
import Animation1 from "./Animation1";
import NavBar from "./NavBar";
import NavBarMobile from "./NavBarMobile";

const Root = () => {
  const [bgImg, setBgImg] = useState();
  const [isOpen, setIsOpen] = useState(
    localStorage.getItem("navbarOpen") === "true" ? true : false
  );

  const ref = useRef(null);

  function toggleOpen() {
    setIsOpen(!isOpen);
    localStorage.setItem("navbarOpen", isOpen);
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 620) {
        setBgImg(mobileImg);
      } else {
        setBgImg(desktopImg);
      }
    };

    const observer = new ResizeObserver(handleResize);
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  function getNav() {
    if (window.innerWidth < 620) {
      localStorage.setItem("navbarOpen", isOpen);
      return <NavBarMobile open={isOpen} onToggle={toggleOpen} />;
    }

    return <NavBar />;
  }

  const txt1 = "() => { and I Welcome you to My portfolio! }";

  return (
    <main className="bg-cover bg-no-repeat h-full w-full" ref={ref}>
      <img className="w-full" src={bgImg} />
      <section>{getNav()}</section>
      <section className="absolute flex flex-row flex-wrap left-[4rem] top-[7rem]">
        {" "}
        <h2 className="relative text-2xl font-bold text-cyan-400 md:text-sm">
          Hi!
        </h2>
        <h2 className="px-4 relative text-2xl text-zinc-300 md:text-sm">
          I am a Dev
        </h2>
        <h1 className="relative text-xl text-zinc-400 md:text-sm">
          I am Gustavo Molano {txt1}
        </h1>
      </section>
      <div className="relative left-[20rem] top-[2rem]">
        <Animation1 />
      </div>
      <section
        id="projects"
        className="absolute top-[12.5rem] left-[2rem] bg-emerald-100
      w-[60%] h-[auto] flex flex-row flex-wrap align-items rounded-[30px]"
      >
        <a
          className="mt-[1rem] ml-[1rem] mb-[1rem] opacity-55 w-[8rem] h-[8rem] bg-zinc-100 hover:bg-amber-200 rounded-[30px]"
          href="https://bodegacool.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <img className="ml-[20%] w-[4rem] h-[4rem]" src={clothIco} />
            <p className="text-sm relative w-[9rem] font-bold">
              A clothing store
            </p>
          </div>
        </a>
        <a
          className="mt-[1rem] ml-[1rem] mb-[1rem] opacity-75 w-[8rem] h-[8rem] bg-zinc-100 hover:bg-amber-200 rounded-[30px]"
          href="https://guskumitenopokedex.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <img className="ml-[20%] w-[4rem] h-[4rem]" src={pokeIco} />
            <p className="text-sm relative font-bold">The Pokedex </p>
          </div>
        </a>
        <a
          className="mt-[1rem] ml-[1rem] mb-[1rem] opacity-75 w-[8rem] h-[8rem] bg-zinc-100 hover:bg-amber-200 rounded-[30px]"
          href="https://theuserscrud.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <img className="ml-[20%] w-[4rem] h-[4rem]" src={crudIco} />
            <p className="text-sm relative font-bold">User's CRUD with API</p>
          </div>
        </a>
        <a
          className="mt-[1rem] ml-[1rem] mb-[1rem] opacity-75 w-[8rem] h-[8rem] bg-zinc-100 hover:bg-amber-200 rounded-[30px]"
          href="https://myfavoritebooksapp.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <img className="ml-[20%] w-[4rem] h-[4rem]" src={amznIco} />
            <p className="text-sm relative font-bold">
              A real Amazon bookstore funnel
            </p>
          </div>
        </a>
        <a
          className="mt-[1rem] ml-[1rem] mb-[1rem] opacity-75 w-[8rem] h-[8rem] bg-zinc-100 hover:bg-amber-200 rounded-[30px]"
          href="https://myfavoritebooksapp.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <img className="ml-[20%] w-[4rem] h-[4rem]" src={wthrIco} />
            <p className="text-sm relative font-bold">
              A simple weather channel
            </p>
          </div>
        </a>
      </section>
    </main>
  );
};

export default Root;
