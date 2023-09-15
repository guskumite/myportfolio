import usFlag from "../assets/flag-united-states_1f1fa-1f1f8.png";
import esFlag from "../assets/flag-spain_1f1ea-1f1f8.png";
import { useEffect, useState } from "react";
import mobileImg from "../assets/mobile.png";
import desktopImg from "../assets/desktop.png";
import gmolanodev from "../assets/gmolanodev_qr.png";
import linkedin from "../assets/qrcode-linkedin.png";
import "../App.css";
import NavBar from "./NavBar";
import NavBarMobile from "./NavBarMobile";
import map1 from "../assets/maps1.png";

const ContactMe = () => {
  const [bgImg, setBgImg] = useState();
  const [isOpen, setIsOpen] = useState(
    localStorage.getItem("navbarOpen") === "true" ? true : false
  );
  const [Labels, setLabels] = useState(0);
  const [Dark, setDark] = useState(0);
  const [LeftFollowMe, setLeftFollowMe] = useState("left-[0.1rem]");
  const [InstagramFollowMe, setInstagramFollowMe] = useState("left-[11rem]");
  const [LinkedInFollowMe, setLinkedInFollowMe] = useState("left-[19.2rem]");
  const [LeftForm, setLeftForm] = useState("left-[8rem]");
  const [TopMap, setTopMap] = useState("top-[21rem]");
  const [HideAuxLabels, setHideAuxLabels] = useState("");

  function toggleOpen() {
    setIsOpen(!isOpen);
    localStorage.setItem("navbarOpen", isOpen);
  }

  const handleResize = () => {
    if (window.innerWidth < 600) {
      setBgImg(mobileImg);
      setLeftFollowMe("left-[5rem]");
      setInstagramFollowMe("left-[13.5rem]");
      setLinkedInFollowMe("left-[18.9rem]");
      setLeftForm("left-[-6rem]");
      setTopMap("top-[33rem]");
      setHideAuxLabels("hidden");
    } else {
      setBgImg(desktopImg);
      setLeftFollowMe("left-[3rem]");
      setInstagramFollowMe("left-[11rem]");
      setLinkedInFollowMe("left-[19.2rem]");
      setLeftForm("left-[8rem]");
      setTopMap("top-[21rem]");
      setHideAuxLabels("");
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
  const PlaceHolder1 = [
    "Enter your name please ...",
    "Tu nombre por favor ...",
  ];
  const PlaceHolder2 = [
    "Enter your preferred Email ...",
    "Tu correo más usado por favor ...",
  ];
  const PlaceHolder3 = [
    "Please type your message ...",
    "Por favor deja tu mensaje ...",
  ];

  const FollowMeLabel = ["Follow me on:", "Sigueme en:"];
  const SendMessageLabel = ["Send message", "Enviar Mensaje"];
  const ContacMeLabel = ["Contact Me", "Contacto"];
  const FormLeftTag1 = ["Name:", "Nombre:"];
  const FormLeftTag2 = ["Email:", "Correo:"];
  const FormLeftTag3 = ["Message:", "  Mensaje:"];

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.Name.value;
    const email = e.target.Email.value;
    const message = e.target.Message.value;

    const URLWSP = "https://api.whatsapp.com/send?phone=573102612868&text=";
    const envio =
      URLWSP + "Name: " + name + " Email: " + email + " Message: " + message;
    window.open(envio, "_blank");
    return 0;
  };

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
    <main>
      <section className="">{getNav()}</section>
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
      </div>
      <img
        className={`absolute top-[0rem] z-[-1] ${Opacity[Dark]} min-w-[320px] w-full`}
        src={bgImg}
      />
      <section className="mt-32 left-[3rem] h-screen bg-cover bg-no-repeat relative w-full ml-[1.9rem]">
        <a
          className={`absolute ${TopMap} left-[0.5rem] h-[60%] w-[40%]`}
          href="https://www.google.com/maps/@4.6787691,-74.0621004,16z?hl=es&entry=ttu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="w-full hover:w-[80%]" src={map1} />
        </a>
        <ul
          className={`absolute text-right left-[8rem] ${HideAuxLabels} ${Color1} top-[14.5rem] text-md`}
        >
          <li className="ml-12">{FormLeftTag1[Labels]}</li>
          <li className="ml-12">{FormLeftTag2[Labels]}</li>
          <li className="ml-12">{FormLeftTag3[Labels]}</li>
        </ul>
        <form
          onSubmit={handleSubmit}
          className={`h-[25%] mt-4 absolute top-[9rem] pt-8
           border-zinc-500 w-full md:w-3/4 ${LeftForm}`}
        >
          <h2 className={`ml-[39%] font-bold text-lg mb-2 ${Color1}`}>
            {ContacMeLabel[Labels]}
          </h2>
          <div className="w-[48%] ml-32 border-2 border-zinc-500 border-solid grid grid-rows-[4]">
            <input
              className="ml-[2%] w-[89%] mt-[1%] mb-[1%] bg-[lightblue] border-solid custom-placeholder text-md
               md:text-sm hover:bg-blue-300"
              autoComplete="off"
              required
              placeholder={PlaceHolder1[Labels]}
              id="Name"
              type="text"
            />
            <input
              className="ml-[2%] w-[89%] mt-[1%] mb-[1%] bg-[lightblue] border-solid custom-placeholder text-md
               md:text-sm hover:bg-blue-300"
              autoComplete="off"
              required
              placeholder={PlaceHolder2[Labels]}
              id="Email"
              type="text"
            />
            <textarea
              className="ml-[2%] w-[89%] mt-[1%] mb-[1%] h-[7rem] bg-[lightblue] border-solid custom-placeholder
               text-md md:text-sm hover:bg-blue-300"
              rows={4}
              autoComplete="off"
              required
              placeholder={PlaceHolder3[Labels]}
              id="Message"
              type="text"
            />
            <button
              className="ml-[25%] mt-4 mb-4 bg-cyan-600 w-[5rem] text-black text-lg
               border-solid border-gray-400 md:ml-[10%]
                 md:w-3/4 md:text-sm hover:bg-blue-300"
            >
              {SendMessageLabel[Labels]}
            </button>
            <div className="grid grid-rows h-[0.5rem]">
              <p
                className={`absolute top-[-6.5rem] animate-text-slide
               ${Color1} text-lg hover:bg-blue-300 ${LeftFollowMe}`}
              >
                {" "}
                {FollowMeLabel[Labels]}{" "}
              </p>
              <a
                className={`w-[5rem] absolute top-[-6.5rem] ${Color1} ${InstagramFollowMe}`}
                href="https://www.instagram.com/gmolanodev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {"Instagram"}
                <img
                  src={gmolanodev}
                  className="w-[15rem] h-[5rem]"
                  name="instagram"
                />
              </a>
              <a
                className={`w-[5rem] absolute top-[-6.5rem] left-[19.2rem] ${Color1} ${LinkedInFollowMe}`}
                href="https://www.linkedin.com/in/gustavo-alberto-molano-ruiz-735a564/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {"LinkedIn"}
                <img
                  src={linkedin}
                  className="w-[15rem] h-[5rem]"
                  name="linkedin"
                />
              </a>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
};

export default ContactMe;
