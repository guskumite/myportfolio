import { useEffect, useState } from "react";
import mobileImg from "../assets/mobile.png";
import desktopImg from "../assets/desktop.png";
import "../App.css";
import NavBar from "./NavBar";
import NavBarMobile from "./NavBarMobile";
import map1 from "../assets/maps1.png";

const ContactMe = () => {
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

  return (
    <main>
      {getNav()}
      <img
        className="absolute top-[0rem] z-[-1] opacity-30 min-w-[320px] w-full"
        src={bgImg}
      />
      <section className="mt-32 h-screen bg-cover bg-no-repeat relative w-full ml-[1.9rem]">
        <a
          className="absolute top-[21rem] left-[9rem] h-[60%] w-[40%]"
          href="https://www.google.com/maps/@4.6787691,-74.0621004,16z?hl=es&entry=ttu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="w-full" src={map1} />
        </a>
        <ul className="absolute left-[2rem] top-[3.5rem] text-md">
          <li className="ml-[2.3rem] mb-[0.5rem]">Name:</li>
          <li className="ml-[2.4rem]">Email:</li>
          <li className="ml-[1.1rem]">Message:</li>
        </ul>
        <form
          onSubmit={handleSubmit}
          className="mt-4 absolute border-zinc-500 w-full md:w-3/4"
        >
          <h2 className="ml-[39%] font-bold text-lg mb-2">Contact Me</h2>
          <div className="w-[45%] ml-32 border-2 border-zinc-500 border-solid grid grid-rows-[4]">
            <input
              className="ml-[2%] w-[89%] mt-[1%] mb-[1%] bg-[lightblue] border-solid custom-placeholder text-lg md:text-sm"
              autoComplete="off"
              required
              placeholder="Enter your name please ..."
              id="Name"
              type="text"
            />
            <input
              className="ml-[2%] w-[89%] mt-[1%] mb-[1%] bg-[lightblue] border-solid custom-placeholder text-lg md:text-sm"
              autoComplete="off"
              required
              placeholder="Enter your preferred Email ..."
              id="Email"
              type="text"
            />
            <textarea
              className="ml-[2%] w-[89%] mt-[1%] mb-[1%] h-[7rem] bg-[lightblue] border-solid custom-placeholder text-lg md:text-sm"
              rows={4}
              autoComplete="off"
              required
              placeholder="Please type your message ..."
              id="Message"
              type="text"
            />
            <button
              className="ml-[25%] mt-4 mb-4 bg-cyan-600 w-[5rem] text-black text-lg border-solid border-gray-400 md:ml-[10%]
                 md:w-3/4 md:text-sm"
            >
              Send message
            </button>
            <p className="absolute top-[-1.5rem] left-[8rem]">
              {" "}
              Follow me on:{" "}
            </p>
            <a
              className="w-[1rem] absolute top-[-1.5rem] left-[14.8rem]"
              href="https://www.facebook.com/guskumite/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <box-icon
                type="logo"
                className="w-[1rem] h-[1rem]"
                name="facebook-circle"
              ></box-icon>
            </a>
            <a
              className="w-[1rem] absolute top-[-1.5rem] left-[16.3rem]"
              href="https://www.instagram.com/guskumite/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <box-icon type="logo" name="instagram"></box-icon>
            </a>
          </div>
        </form>
      </section>
    </main>
  );
};

export default ContactMe;
