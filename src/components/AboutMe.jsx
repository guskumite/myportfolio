import imgTrip from "../assets/mytoon.png";
import usFlag from "../assets/flag-united-states_1f1fa-1f1f8.png";
import esFlag from "../assets/flag-spain_1f1ea-1f1f8.png";
import { useEffect, useState } from "react";
import mobileImg from "../assets/mobile.png";
import desktopImg from "../assets/desktop.png";
import "../App.css";
import NavBar from "./NavBar";
import NavBarMobile from "./NavBarMobile";

const AboutMe = () => {
  const [bgImg, setBgImg] = useState();
  const [isOpen, setIsOpen] = useState(
    localStorage.getItem("navbarOpen") === "true" ? true : false
  );
  const [Labels, setLabels] = useState(0);
  const [Dark, setDark] = useState(0);
  const [Left, setLeft] = useState("translate-x-[8rem]");

  function toggleOpen() {
    setIsOpen(!isOpen);
    localStorage.setItem("navbarOpen", isOpen);
  }

  const label1 = ["About Me", "Acerca de mi"];
  const label2 = [
    "Hi again! My name is Gustavo Molano and I was born in Bogota," +
      "Colombia. I love programming and I began programming when I was 12" +
      "years old. In the eighties and nineties of past century I studied my" +
      "IT career at Anahuac University in Mexico City. When I finished my career " +
      "I worked for an IT company in Atizapan de Zaragoza called Prisma " +
      "Software. Then I worked for Grupo Videovisa the owner of the " +
      "Videocentros from 1996 to 2001. Later on, I worked for the mexican " +
      "government mainly operating the databases of the mexican police at " +
      "Agencia Federal de Investigacion. When I came back to Colombia in " +
      "2009, I worked for a colombian IT company called Acies from 2009 to " +
      "2017. My main work had to do with learning the functionality of the " +
      "Academic System to later explain it to customers in training sessions." +
      "I also created SQL sentences in oracle SQL to later design reports in " +
      "jasper reports for the Academic system developed using oracle forms 6i " +
      "and later migrated to Google Web Tools. Since 2017 to date I have " +
      "worked in other jobs not related to my career and in 2023 I found " +
      "Academlo. Academlo brings to me the opportunity to refresh and develop " +
      "my professional skills to become a better version of myself.",
    "¡Hola nuevamente! Mi nombre es Gustavo Molano y nací en Bogotá, Colombia." +
      "Me encanta programar y comencé a programar cuando tenía 12 años." +
      "En los ochenta y noventa del siglo pasado estudié mi carrera de Informática " +
      "en la Universidad Anáhuac en Ciudad de México. Cuando me gradué de mi carrera " +
      "trabajé para una empresa IT en Atizapán de Zaragoza llamada Prisma Software. " +
      "Después trabajé para Grupo Videovisa, la dueña de los Videocentros, de 1996 a 2001. " +
      "Un tiempo después, trabajé para el gobierno mexicano principalmente operando bases de " +
      "datos de la policía mexicana en la Agencia Federal de Investigación. Cuando regresé a " +
      "Colombia en el 2009, trabajé para una empresa colombiana de IT llamada Acies de 2009 a " +
      "2017. Mi trabajo tenía que ver con aprender la funcionalidad del sistema Académico para " +
      "posteriormente poder explicarlo a los clientes en sesiones de capacitación." +
      "También realicé consultas SQL en el SQL de oracle para posteriormente diseñar reportes " +
      "en jasper reports para el sistema académico que estaba diseñado en oracle forms 6i y " +
      "después fue migrado a Google Web Tools. Desde 2017 a la fecha he trabajado en otras " +
      "actividades que no se relacionan con mi carrera y en 2023 encontré Academlo. Academlo " +
      "me ha brindado la oportunidad de actualizar y desarrollar mis habilidades profesionales " +
      "para convertirme en una mejor versión de mi mismo.",
  ];
  const Home = ["Home", "Inicio"];
  const About = ["About", "Acerca de mi"];
  const Skills = ["Skills", "Experiencia"];
  const Contact = ["Contact Me", "Contacto"];
  const Academlo = ["Academlo", "Academlo"];

  const handleResize = () => {
    if (window.innerWidth < 600) {
      setBgImg(mobileImg);
      setLeft("translate-x-[1rem]");
    } else {
      setBgImg(desktopImg);
      setLeft("translate-x-[8rem]");
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
      <h2
        className={`absolute ml-72 text-md mt-32 mb-4 font-bold text-3xl text-bold hover:text-4xl
        top-[3rem] ${Left}`}
        onClick={handleLang}
      >
        {label1[Labels]}
      </h2>
      <div
        className={`absolute grid grid-cols-[2fr,3fr,2fr] ${Left} top-[14rem]`}
      >
        <img className="opacity-80 imgTrip" src={imgTrip} />
        <p
          className="text-justify text-lg hover:text-2xl translate-x-[-3/4]"
          onClick={handleLang}
        >
          {label2[Labels]}
        </p>
        <span className="hidden">x</span>
      </div>
    </main>
  );
};

export default AboutMe;
