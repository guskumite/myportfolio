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
import usFlag from "../assets/flag-united-states_1f1fa-1f1f8.png";
import esFlag from "../assets/flag-spain_1f1ea-1f1f8.png";

const Root = () => {
  const [bgImg, setBgImg] = useState();
  const [isOpen, setIsOpen] = useState(
    localStorage.getItem("navbarOpen") === "true" ? true : false
  );
  const [Labels, setLabels] = useState(0);
  const [Dark, setDark] = useState(0);
  const [Left1, setLeft1] = useState("left-[8rem]");
  const [Left2, setLeft2] = useState("left-[12rem]");
  const [Left3, setLeft3] = useState("left-[13rem]");

  const Home = ["Home", "Inicio"];
  const About = ["About", "Acerca de mi"];
  const Skills = ["Skills", "Experiencia"];
  const Contact = ["Contact Me", "Contacto"];
  const Academlo = ["Academlo", "Academlo"];

  function toggleOpen() {
    setIsOpen(!isOpen);
    localStorage.setItem("navbarOpen", isOpen);
  }

  const handleResize = () => {
    if (window.innerWidth < 600) {
      setBgImg(mobileImg);
      setLeft1("left-[-1rem]");
      setLeft2("left-[1rem]");
      setLeft3("left-[1rem]");
    } else {
      setBgImg(desktopImg);
      setLeft1("left-[8rem]");
      setLeft2("left-[12rem]");
      setLeft3("left-[13rem]");
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
      return (
        <NavBarMobile
          open={isOpen}
          onToggle={toggleOpen}
          home={Home[Labels]}
          about={About[Labels]}
          skills={Skills[Labels]}
          contact={Contact[Labels]}
          academlo={Academlo[Labels]}
        />
      );
    } else {
      return (
        <NavBar
          home={Home[Labels]}
          about={About[Labels]}
          skills={Skills[Labels]}
          contact={Contact[Labels]}
          academlo={Academlo[Labels]}
        />
      );
    }
  }

  const handleLang = () => {
    if (Labels === 0) {
      setLabels(1);
    }
    if (Labels === 1) {
      setLabels(0);
    }
  };

  const handleDark = () => {
    if (Dark === 0) {
      setDark(1);
    }
    if (Dark === 1) {
      setDark(0);
    }
  };

  const txt1 = [
    "() => { and I Welcome you to My portfolio! }",
    "() => { y te doy la bienvenida a mi portafolio! }",
  ];

  const Hello = ["Hi!", "¡Hola!"];
  const Iam = ["I am a Developer", "Soy un desarrollador"];
  const MyName = ["I am Gustavo Molano", "Yo me llamo Gustavo Molano"];
  const myProjects = ["My projects so far:", "Mis proyectos recientes:"];
  const theStore = [
    "A store made with HTML, Javascript and CSS",
    "Una tienda hecha con HTML, Javascript y CSS",
  ];
  const thePokedex = [
    "The Pokedex. It uses React Router, Redux, axios & tailwind",
    "El Pokedex. Utiliza React Router, Redux, axios y tailwind",
  ];
  const theCRUD = [
    "User's CRUD with API, axios & tailwind",
    "Un sistema CRUD (Crear, Leer, Actualizar, Borrar) con API, axios y tailwind",
  ];
  const theAmazon = [
    "A real Amazon bookstore funnel with vite & React",
    "Un funnel para una tienda real de libros de Amazon",
  ];
  const theWeather = [
    "A simple weather channel with React",
    "Un canal simple del clima hecho con React",
  ];

  return (
    <main className="bg-cover bg-no-repeat h-full w-full lg:max-width-[1200px] md:max-width-[619px] text-gray-400">
      <img className="w-full min-w-[320px] opacity-80" src={bgImg} />
      <section>{getNav()}</section>
      <div className="flex flex-rows">
        <button
          className="border-2 ml-8 absolute text-md top-[3.9rem] left-[9rem] gap-2 flex flex-rows"
          onClick={handleLang}
        >
          Language | Idioma <img className="w-[2rem] h-[2rem]" src={usFlag} />{" "}
          <img className="w-[2rem] h-[2rem]" src={esFlag} />
        </button>
        <button
          className="border-2 ml-8 absolute text-md top-[7.4rem] left-[9rem] gap-2 flex flex-rows"
          onClick={handleDark}
        >
          Darkmode | Modo oscuro 🌞🌛
        </button>
      </div>
      <section
        className={`w-[60%] absolute flex flex-row flex-wrap w-[24rem] mr-[2rem] top-[10rem] ${Left3}`}
      >
        {" "}
        <h2 className="relative lg:text-2xl font-bold text-cyan-400 md:text-md">
          {Hello[Labels]}
        </h2>
        <h2 className="px-4 relative lg:text-2xl text-zinc-300 md:text-md">
          {Iam[Labels]}
        </h2>
        <h1 className="relative lg:text-xl text-zinc-400 md:text-md">
          {MyName[Labels]}
        </h1>
        <h2 className="relative lg:text-xl text-zinc-400 md:text-md">
          {txt1[Labels]}{" "}
        </h2>
        <span className="hidden w-[25%]">x</span>
        <p
          className={`absolute top-[6rem] text-center mt-[1rem] ml-[1rem] mb-[1rem] opacity-55 w-[14rem]
       h-[2rem] bg-zinc-300 hover:bg-amber-200 rounded-[30px] ${Left1}`}
        >
          {myProjects[Labels]}
        </p>
      </section>
      <div
        className={`w-[60%] absolute top-[20rem] left-[12rem]
       flex flex-wrap justify-between bg-emerald-100 ${Left2}`}
      >
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4"></div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 hover:bg-amber-200">
          <a
            className="text-center mt-[1rem] ml-[1.5rem] mb-[1rem] opacity-55 w-[9rem] h-[9rem] bg-zinc-100 hover:bg-amber-200 rounded-[30px]"
            href="https://bodegacool.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <img className="ml-[20%] w-[4rem] h-[4rem]" src={clothIco} />
              <p className="text-sm relative w-[9rem] font-bold">
                {theStore[Labels]}
              </p>
            </div>
          </a>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 hover:bg-amber-200">
          <a
            className="text-center mt-[1rem] ml-[1.5rem] mb-[1rem] opacity-75 w-[9rem] h-[9rem] bg-zinc-100 hover:bg-amber-200 rounded-[30px]"
            href="https://guskumitenopokedex.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <img className="ml-[20%] w-[4rem] h-[4rem]" src={pokeIco} />
              <p className="text-sm relative font-bold">
                {thePokedex[Labels]}{" "}
              </p>
            </div>
          </a>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 hover:bg-amber-200">
          <a
            className="text-center mt-[1rem] ml-[1.5rem] mb-[1rem] opacity-75 w-[9rem] h-[9rem] bg-zinc-100 hover:bg-amber-200 rounded-[30px]"
            href="https://theuserscrud.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <img className="ml-[20%] w-[4rem] h-[4rem]" src={crudIco} />
              <p className="text-sm relative font-bold">{theCRUD[Labels]}</p>
            </div>
          </a>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 hover:bg-amber-200">
          <a
            className="text-center mt-[1rem] ml-[1.5rem] mb-[1rem] opacity-75 w-[9rem] h-[9rem] bg-zinc-100 hover:bg-amber-200 rounded-[30px]"
            href="https://myfavoritebooksapp.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <img className="ml-[20%] w-[4rem] h-[4rem]" src={amznIco} />
              <p className="text-sm relative font-bold">{theAmazon[Labels]}</p>
            </div>
          </a>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 hover:bg-amber-200">
          <a
            className="text-center mt-[1rem] ml-[1.5rem] mb-[1rem] opacity-75 w-[9rem] h-[9rem] bg-zinc-100 hover:bg-amber-200 rounded-[30px]"
            href="https://aniceweatherchannel.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <img className="ml-[20%] w-[4rem] h-[4rem]" src={wthrIco} />
              <p className="text-sm relative font-bold">{theWeather[Labels]}</p>
            </div>
          </a>
        </div>
        <span className="hidden w-[15%]">x</span>
      </div>
    </main>
  );
};

export default Root;
