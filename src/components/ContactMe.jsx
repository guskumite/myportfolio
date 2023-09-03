import { useEffect, useState, useRef } from "react";
import mobileImg from "../assets/mobile.png";
import desktopImg from "../assets/desktop.png";
import "../App.css";
import Animation1 from "./Animation1";
import NavBar from "./NavBar";
import NavBarMobile from "./NavBarMobile";

const ContactMe = () => {
  const [bgImg, setBgImg] = useState();
  const [isOpen, setIsOpen] = useState(
    localStorage.getItem("navbarOpen") === "true" ? true : false
  );

  const ref = useRef(null);

  function toggleOpen() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 400) {
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
    if (window.innerWidth < 400) {
      localStorage.setItem("navbarOpen", isOpen);
      return (
        <section className="absolute w-full top-[1rem]">
          <NavBarMobile open={isOpen} onToggle={toggleOpen} />{" "}
        </section>
      );
    }

    return (
      <section className="absolute w-full top-[1rem]">
        <NavBar />{" "}
      </section>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.Name.value;
    const email = e.target.Email.value;
    const message = e.target.Message.value;

    const URLWSP = "https://api.whatsapp.com/send?phone=573102612868&text=";
    const envio =
      URLWSP + "Name: " + name + " Email: " + email + " Message: " + message;
    location.href = envio;
    return 0;
  };

  return (
    <main ref={ref}>
      {getNav()}
      <img className="absolute top-[1rem] z-[-1] opacity-30" src={bgImg} />
      <section className="mt-16 h-screen bg-cover bg-no-repeat relative w-full">
        <ul className="absolute left-[2rem] top-[3.5rem] text-md">
          <li className="mb-[0.5rem]">Name:</li>
          <li>Email:</li>
          <li>Message:</li>
        </ul>
        <form
          onSubmit={handleSubmit}
          className="mt-4 absolute border-zinc-500 w-full md:w-3/4 lg:w-1/2"
        >
          <h2 className="ml-[39%] font-bold text-lg mb-2">Contact Me</h2>
          <div className="w-[45%] ml-32 border-2 border-zinc-500 border-solid grid grid-rows-[4]">
            <input
              className="ml-[2%] w-[89%] mt-[1%] mb-[1%] bg-[lightblue] border-solid custom-placeholder text-lg"
              autoComplete="off"
              required
              placeholder="Enter your name please ..."
              id="Name"
              type="text"
            />
            <input
              className="ml-[2%] w-[89%] mt-[1%] mb-[1%] bg-[lightblue] border-solid custom-placeholder text-lg"
              autoComplete="off"
              required
              placeholder="Enter your preferred Email ..."
              id="Email"
              type="text"
            />
            <input
              className="ml-[2%] w-[89%] mt-[1%] mb-[1%] h-[15rem] bg-[lightblue] border-solid custom-placeholder text-lg"
              autoComplete="off"
              required
              placeholder="Please type your message ..."
              id="Message"
              type="text"
            />
            <button className="ml-[15%] mt-4 mb-4 bg-cyan-600 w-32 text-black text-lg border-solid border-gray-400 md:ml-[10%] lg:ml-[20%] md:w-3/4 lg:w-1/2">
              Send message
            </button>
          </div>
        </form>
        <div className="relative left-[-32rem] top-[2rem]">
          <Animation1 />
        </div>
      </section>
    </main>
  );
};

export default ContactMe;
