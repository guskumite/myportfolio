import { useEffect, useState, useRef } from "react";
import mobileImg from "./assets/mobile.png";
import desktopImg from "./assets/desktop.png";
import "./App.css";
import Animation1 from "./components/Animation1";
import NavBar from "./components/NavBar";
import NavBarMobile from "./components/NavBarMobile";

function App() {
  const [bgImg, setBgImg] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef(null);

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
      return <NavBarMobile open={isOpen} setOpen={setIsOpen} />;
    }

    return <NavBar />;
  }

  const txt1 = "() => { and I Welcome you to My portfolio! }";

  return (
    <main className="bg-cover bg-no-repeat h-full w-full" ref={ref}>
      <img src={bgImg} />
      <section>{getNav()}</section>
      <section>
        {" "}
        <h2 className="absolute top-[4rem] text-2xl font-bold text-cyan-400">
          Hi!
        </h2>
        <h2 className="absolute top-[4rem] left-[2.7rem] text-2xl text-zinc-300">
          I am a Dev
        </h2>
        <h1 className="absolute top-[6rem] text-2xl text-zinc-400">
          I am Gustavo Molano {txt1}
        </h1>
      </section>
      <Animation1 />
    </main>
  );
}

export default App;
