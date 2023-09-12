import imgTrip from "../assets/mytoon.jpg";
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

  const handleLang = () => {
    if (Labels === 0) {
      setLabels(1);
    }
    if (Labels === 1) {
      setLabels(0);
    }
  };

  return (
    <main className="bg-cover bg-no-repeat h-full w-full max-width-[1200px] md:max-width-[619px]">
      {getNav()}
      <img
        className="absolute top-[0rem] z-[-1] opacity-30 min-w-[320px] w-full"
        src={bgImg}
      />
      <p className="ml-8 absolute animate-text-slide text-md top-[6rem]">
        Click en texto para cambiar idioma; Click on text to change language
        👇👇👇👇
      </p>
      <h2
        className="ml-12 text-md mt-32 mb-4 text-3xl text-bold hover:text-4xl"
        onClick={handleLang}
      >
        {label1[Labels]}
      </h2>
      <section className="w-[94%] absolute top-[10rem] flex flex-rows mt-8">
        <p
          className="ml-8 text-justify mr-4 w-[75%] text-lg hover:text-2xl"
          onClick={handleLang}
        >
          {label2[Labels]}
        </p>
        <img className="ml-8 w-[20rem] h-[25rem] opacity-[70%]" src={imgTrip} />
      </section>
    </main>
  );
};

export default AboutMe;
