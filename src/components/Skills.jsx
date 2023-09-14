import usFlag from "../assets/flag-united-states_1f1fa-1f1f8.png";
import esFlag from "../assets/flag-spain_1f1ea-1f1f8.png";
import { useEffect, useState } from "react";
import mobileImg from "../assets/mobile.png";
import desktopImg from "../assets/desktop.png";
import "../App.css";
import NavBar from "./NavBar";
import NavBarMobile from "./NavBarMobile";

const Skills = () => {
  const [bgImg, setBgImg] = useState();
  const [isOpen, setIsOpen] = useState(
    localStorage.getItem("navbarOpen") === "true" ? true : false
  );
  const [Labels, setLabels] = useState(0);
  const [Dark, setDark] = useState(0);
  const [Left1, setLeft1] = useState("left-[15rem]");

  function toggleOpen() {
    setIsOpen(!isOpen);
    localStorage.setItem("navbarOpen", isOpen);
  }

  const label1 = ["Skills", "Habilidades"];
  const label2 = ["Soft Skills", "Habilidades Blandas"];
  const label3 = ["Learning constantly", "Aprendizaje constante"];
  const label4 = [
    "Take challenges in a creative way to find the best solution",
    "  Asumir retos de forma creativa para llegar a la mejor solución",
  ];
  const label5 = ["Team work", "Trabajo en equipo"];
  const label6 = ["Resiliency", "Resiliencia"];
  const label7 = ["Assertive communication", "Comunicación Asertiva"];
  const label8 = [
    "Persist in achieving objectives",
    "Persistencia en el logro de objetivos",
  ];
  const label9 = ["Analytic Thinking", "Pensamiento analítico"];
  const labelA = ["Self learning", "Autoaprendizaje"];
  const labelB = ["Self management", "Autogestión"];

  const Home = ["Home", "Inicio"];
  const About = ["About", "Acerca de mi"];
  const Skills = ["Skills", "Habilidades"];
  const Contact = ["Contact Me", "Contacto"];
  const Academlo = ["Academlo", "Academlo"];

  const handleResize = () => {
    if (window.innerWidth < 600) {
      setBgImg(mobileImg);
      setLeft1("left-[2rem]");
    } else {
      setBgImg(desktopImg);
      setLeft1("left-[15rem]");
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

  return (
    <main className="absolute top-[0rem] bg-cover h-screen w-screen text-gray-400">
      <img className="w-full min-w-[320px] opacity-80" src={bgImg} />
      <section> {getNav()} </section>
      <div className="flex flex-rows">
        <button
          className="border-2 ml-8 absolute text-md top-[3.7rem] left-[8rem] gap-2 flex flex-rows"
          onClick={handleLang}
        >
          Language | Idioma <img className="w-[2rem] h-[2rem]" src={usFlag} />{" "}
          <img className="w-[2rem] h-[2rem]" src={esFlag} />
        </button>
        <button
          className="border-2 ml-8 absolute text-md top-[7.2rem] left-[8rem] gap-2 flex flex-rows"
          onClick={handleDark}
        >
          Darkmode | Modo oscuro 🌞🌛
        </button>
      </div>
      <div
        className={`w-[50%] absolute top-[12rem] bg-zinc-300 text-[#333] ${Left1}`}
      >
        <h1 className="font-bold text-lg">{label1[Labels]}</h1>
        <br></br>
        <p> {label2[Labels]} </p>
        <br></br>
        <ul className="">
          <li className="border-2 border-red-300">{label3[Labels]}</li>
          <li className="border-2 border-red-300">{label4[Labels]}</li>
          <li className="border-2 border-red-300">{label5[Labels]}</li>
          <li className="border-2 border-red-300">{label6[Labels]}</li>
          <li className="border-2 border-red-300">{label7[Labels]}</li>
          <li className="border-2 border-red-300">{label8[Labels]}</li>
          <li className="border-2 border-red-300">{label9[Labels]}</li>
          <li className="border-2 border-red-300">{labelA[Labels]}</li>
          <li className="border-2 border-red-300">{labelB[Labels]}</li>
        </ul>
      </div>
    </main>
  );
};

export default Skills;
