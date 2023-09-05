import { useEffect, useState } from "react";
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

  function toggleOpen() {
    setIsOpen(!isOpen);
    localStorage.setItem("navbarOpen", isOpen);
  }

  const handleResize = () => {
    if (window.innerWidth < 600) {
      setBgImg(mobileImg);
    } else {
      setBgImg(desktopImg);
    }
  };

  useEffect(() => {
    handleResize();
    const onResize = () => {
      handleResize();
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  function getNav() {
    if (window.innerWidth < 600) {
      localStorage.setItem("navbarOpen", isOpen);
      return <NavBarMobile open={isOpen} onToggle={toggleOpen} />;
    } else {
      return <NavBar />;
    }
  }

  const txt1 = "() => { and I Welcome you to My portfolio! }";

  return (
    <main className="bg-cover bg-no-repeat h-full w-full lg:max-width-[1200px] md:max-width-[619px]">
      <img className="w-full min-w-[320px]" src={bgImg} />
      <section>{getNav()}</section>
      <section className="absolute flex flex-row flex-wrap w-[24rem] mr-[2rem] top-[8rem] left-[2rem]">
        {" "}
        <h2 className="relative lg:text-2xl font-bold text-cyan-400 md:text-sm">
          Hi!
        </h2>
        <h2 className="px-4 relative lg:text-2xl text-zinc-300 md:text-sm">
          I am a Dev
        </h2>
        <h1 className="relative lg:text-xl text-zinc-400 md:text-sm">
          I am Gustavo Molano
        </h1>
        <h2 className="relative lg:text-xl text-zinc-400 md:text-sm">
          {txt1}{" "}
        </h2>
      </section>
      <section>
        <div className="flex justify-between">
          <div
            id="projects"
            className="absolute top-[12.5rem] left-[2rem] bg-emerald-100
               w-[60%] h-[auto] flex flex-row flex-wrap align-items rounded-[30px] md:w-[30%] md:top-[17rem] md:w-[20%] md:flex-col"
          >
            <p className="text-center mt-[1rem] ml-[1rem] mb-[1rem] opacity-55 w-[14rem] h-[2rem] bg-zinc-300 hover:bg-amber-200 rounded-[30px]">
              My projects so far:
            </p>
            <a
              className="text-center mt-[1rem] ml-[1.5rem] mb-[1rem] opacity-55 w-[9rem] h-[9rem] bg-zinc-100 hover:bg-amber-200 rounded-[30px]"
              href="https://bodegacool.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img className="ml-[20%] w-[4rem] h-[4rem]" src={clothIco} />
                <p className="text-sm relative w-[9rem] font-bold">
                  A store made with HTML, Javascript and CSS
                </p>
              </div>
            </a>
            <a
              className="text-center mt-[1rem] ml-[1.5rem] mb-[1rem] opacity-75 w-[9rem] h-[9rem] bg-zinc-100 hover:bg-amber-200 rounded-[30px]"
              href="https://guskumitenopokedex.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img className="ml-[20%] w-[4rem] h-[4rem]" src={pokeIco} />
                <p className="text-sm relative font-bold">
                  The Pokedex. It uses React Router, Redux, axios & taiwind{" "}
                </p>
              </div>
            </a>
            <a
              className="text-center mt-[1rem] ml-[1.5rem] mb-[1rem] opacity-75 w-[9rem] h-[9rem] bg-zinc-100 hover:bg-amber-200 rounded-[30px]"
              href="https://theuserscrud.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img className="ml-[20%] w-[4rem] h-[4rem]" src={crudIco} />
                <p className="text-sm relative font-bold">
                  User's CRUD with API, axios & tailwind
                </p>
              </div>
            </a>
            <a
              className="text-center mt-[1rem] ml-[1.5rem] mb-[1rem] opacity-75 w-[9rem] h-[9rem] bg-zinc-100 hover:bg-amber-200 rounded-[30px]"
              href="https://myfavoritebooksapp.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img className="ml-[20%] w-[4rem] h-[4rem]" src={amznIco} />
                <p className="text-sm relative font-bold">
                  A real Amazon bookstore funnel with vite & React
                </p>
              </div>
            </a>
            <a
              className="text-center mt-[1rem] ml-[1.5rem] mb-[1rem] opacity-75 w-[9rem] h-[9rem] bg-zinc-100 hover:bg-amber-200 rounded-[30px]"
              href="https://myfavoritebooksapp.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img className="ml-[20%] w-[4rem] h-[4rem]" src={wthrIco} />
                <p className="text-sm relative font-bold">
                  A simple weather channel with React
                </p>
              </div>
            </a>
          </div>
        </div>
        <div>
          <Animation1 />
        </div>
      </section>
    </main>
  );
};

export default Root;
