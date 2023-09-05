import imgTrip from "../assets/profile2.png";
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

  return (
    <main className="bg-cover bg-no-repeat h-full w-full max-width-[1200px] md:max-width-[619px]">
      {getNav()}
      <img
        className="absolute top-[0rem] z-[-1] opacity-30 min-w-[320px] w-full"
        src={bgImg}
      />
      <section className="w-[84%] absolute top-[4rem]">
        <h2 className="ml-4 text-md mt-16 mb-4 text-bold">About Me</h2>
        <p className="ml-8 text-justify mr-4">
          Hi again! My name is Gustavo Molano and I was born in Bogota,
          Colombia. I love programming and I began programming when I was 12
          years old. Now, in 2023, I am 54. I studied in Mexico an IT career
          during the eighties and the nineties and worked during many years in
          Mexico and in Colombia. When I decided it was time to get an update on
          my programming skills I found Academlo! I think they use an excellent
          methodology to assure that everybody has the opportunity to learn new
          things, explode creativeness and update those skills! I also love
          travelling and specially I wanted to share a photo of my most recent
          trip to Las Vegas and Phoenix.
        </p>
        <img className="ml-8 w-[10rem] h-[15rem] mt-4" src={imgTrip} />
      </section>
    </main>
  );
};

export default AboutMe;
