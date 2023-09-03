import img from "../assets/0.png";
import "../styles/Animation1.css";

const Animation1 = () => {
  return (
    <div>
      <img
        className="slow-spin absolute
        w-[14rem] absolute top-[16rem] right-[2rem]"
        src={img}
      />
    </div>
  );
};

export default Animation1;
