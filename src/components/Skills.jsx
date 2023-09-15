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
  const [Left2, setLeft2] = useState("left-[29rem]");
  const [Label2, setLabel2] = useState(["Soft Skills", "Habilidades Blandas"]);
  const [Label3, setLabel3] = useState([
    "Learning constantly",
    "Aprendizaje constante",
  ]);
  const [Label4, setLabel4] = useState([
    "Take challenges in a creative way to find the best solution",
    "  Asumir retos de forma creativa para llegar a la mejor solución",
  ]);
  const [Label5, setLabel5] = useState(["Team work", "Trabajo en equipo"]);
  const [Label6, setLabel6] = useState(["Resiliency", "Resiliencia"]);
  const [Label7, setLabel7] = useState([
    "Assertive communication",
    "Comunicación Asertiva",
  ]);
  const [Label8, setLabel8] = useState([
    "Persist in achieving objectives",
    "Persistencia en el logro de objetivos",
  ]);
  const [Label9, setLabel9] = useState([
    "Analytic Thinking",
    "Pensamiento analítico",
  ]);

  const [LabelA, setLabelA] = useState(["Self learning", "Autoaprendizaje"]);
  const [LabelB, setLabelB] = useState(["Self management", "Autogestión"]);

  function toggleOpen() {
    setIsOpen(!isOpen);
    localStorage.setItem("navbarOpen", isOpen);
  }

  const Selector1 = ["Soft Skills", "Habilidades Blandas"];
  const Selector2 = ["Hard Skills", "Habilidades Duras"];
  const label1 = ["Skills", "Habilidades"];

  const Home = ["Home", "Inicio"];
  const About = ["About", "Acerca de mi"];
  const Skills = ["Skills", "Habilidades"];
  const Contact = ["Contact Me", "Contacto"];
  const Academlo = ["Academlo", "Academlo"];
  const Opacity = ["opacity-30", "opacity-80"];
  let Color1 = "";
  if (Dark === 0) {
    Color1 = "text-stone-950";
  }
  if (Dark === 1) {
    Color1 = "text-gray-400";
  }

  const handleResize = () => {
    if (window.innerWidth < 600) {
      setBgImg(mobileImg);
      setLeft1("left-[2rem]");
      setLeft2("left-[15rem]");
    } else {
      setBgImg(desktopImg);
      setLeft1("left-[15rem]");
      setLeft2("left-[29rem]");
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
          dark={Dark}
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

  const handleSkills = (e) => {
    if (e.target.name === "soft") {
      setLabel2(["Soft Skills", "Habilidades Blandas"]);
      setLabel3(["Learning constantly", "Aprendizaje constante"]);
      setLabel4([
        "Take challenges in a creative way to find the best solution",
        "  Asumir retos de forma creativa para llegar a la mejor solución",
      ]);
      setLabel5(["Team work", "Trabajo en equipo"]);
      setLabel6(["Resiliency", "Resiliencia"]);
      setLabel7(["Assertive communication", "Comunicación Asertiva"]);
      setLabel8([
        "Persist in achieving objectives",
        "Persistencia en el logro de objetivos",
      ]);
      setLabel9(["Analytic Thinking", "Pensamiento analítico"]);
      setLabelA(["Self learning", "Autoaprendizaje"]);
      setLabelB(["Self management", "Autogestión"]);
    }
    if (e.target.name === "hard") {
      setLabel2(["Hard Skills", "Habilidades Duras"]);
      setLabel3([
        "Experience in Software Technical Support",
        "Experiencia en Soporte Técnico de Software",
      ]);
      setLabel4([
        "Knowledge of Oracle SQL databases and other SQL databases",
        "Conocimiento de bases de datos de Oracle y de otras bases de datos SQL",
      ]);
      setLabel5([
        "Academlo: Recent Certified Knowledge of FrontEnd and BackEnd Development",
        "Academlo: Conocimiento Reciente certificado en desarrollo FrontEnd y BackEnd",
      ]);
      setLabel6([
        "Cisco: Introduction to Cybersecurity and Cybersecurity Essentials",
        "Cisco: Introducción a la Ciberseguridad y Esenciales de Ciberseguridad",
      ]);
      setLabel7(["Intermediate English", "Inglés Intermedio"]);
      setLabel8([
        "Basic Knowledge of prompts for generative AI like ChatGPT, Claude, DALL-E, etc.",
        "Conocimiento básico de prompts para IA generativa como ChatGPT, Claude, DALL-E, etc. ",
      ]);
      setLabel9([
        "Knowledge of Windows, Linux, Ubuntu",
        "Conocimiento de Windows, Linux, Ubuntu",
      ]);
      setLabelA([
        "Knowledge of ofimatic suites like Office and OpenOffice",
        "Conocimiento de herramientas ofimáticas como Office y OpenOffice",
      ]);
      setLabelB([
        "Experience in code maintainance in different platforms and languages",
        "Experiencia en mantenimiento de código en diversas plataformas y lenguajes",
      ]);
    }
  };

  return (
    <main className="absolute top-[0rem] bg-cover h-screen w-screen text-gray-400">
      <img className={`w-full min-w-[320px] ${Opacity[Dark]}`} src={bgImg} />
      <section> {getNav()} </section>
      <div className="flex flex-rows">
        <button
          className={`border-2 ml-8 absolute ${Color1} text-md top-[3.7rem] left-[8rem] gap-2 flex flex-rows`}
          onClick={handleLang}
        >
          Language | Idioma <img className="w-[2rem] h-[2rem]" src={usFlag} />{" "}
          <img className="w-[2rem] h-[2rem]" src={esFlag} />
        </button>
        <button
          className={`border-2 ml-8 absolute ${Color1} text-md top-[7.2rem] left-[8rem] gap-2 flex flex-rows`}
          onClick={handleDark}
        >
          Darkmode | Modo oscuro 🌞🌛
        </button>
        <button
          className={`absolute top-[9.6rem] ${Left1} text-zinc-300 text-md
         border-[#D2D8DA] border-2 bg-[#230B06] hover:text-xl`}
          onClick={(e) => {
            handleSkills(e);
          }}
          name="soft"
        >
          {Selector1[Labels]}
        </button>
        <button
          className={`absolute top-[9.6rem] ${Left2} text-zinc-300 text-md
         border-[#D2D8DA] border-2 bg-[#230B06] hover:text-xl`}
          onClick={(e) => {
            handleSkills(e);
          }}
          name="hard"
        >
          {Selector2[Labels]}
        </button>
      </div>
      <div
        className={`w-[50%] absolute top-[12rem] bg-zinc-300 text-[#333] ${Left1}`}
      >
        <h1 className="font-bold text-lg">{label1[Labels]}</h1>
        <br></br>
        <p> {Label2[Labels]} </p>
        <br></br>
        <ul className="">
          <li className="border-2 border-red-300">{Label3[Labels]}</li>
          <li className="border-2 border-red-300">{Label4[Labels]}</li>
          <li className="border-2 border-red-300">{Label5[Labels]}</li>
          <li className="border-2 border-red-300">{Label6[Labels]}</li>
          <li className="border-2 border-red-300">{Label7[Labels]}</li>
          <li className="border-2 border-red-300">{Label8[Labels]}</li>
          <li className="border-2 border-red-300">{Label9[Labels]}</li>
          <li className="border-2 border-red-300">{LabelA[Labels]}</li>
          <li className="border-2 border-red-300">{LabelB[Labels]}</li>
        </ul>
      </div>
    </main>
  );
};

export default Skills;
