import img from "../assets/0.png";
import "../styles/Animation1.css";

const Animation1 = () => {
  return (
    <div>
      <img
        className="slow-spin absolute top-[15rem] right-[-2rem] w-[10rem] mr-[3rem]"
        src={img}
      />
    </div>
  );
};

export default Animation1;
