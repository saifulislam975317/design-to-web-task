import "./Css/header.css";
import image1 from "../../assets/headerImages/image1.jpg";
import image2 from "../../assets/headerImages/image2.jpg";
import image3 from "../../assets/headerImages/image3.jpg";
const Header = () => {
  return (
    <div className="md:flex gap-5 justify-center my-24 items-center">
      <div>
        <h1 className="text-[65px] sectionTitle">
          Find
          <span className="mx-2 partnersStyle">Partners</span>
          (CAs) <br /> available online
        </h1>
        <p>
          CONNECT with us where your services are listed and visible to a myriad
          <br />
          of businesses seeking CA’s for compliance support
        </p>
        <div className="relative">
          <input
            type="text"
            placeholder="search by name"
            className="input input-bordered  w-full max-w-md"
          />
          <button className="btn absolute searchButton">Search</button>
        </div>
      </div>
      <div className="flex gap-4">
        <img className="w-[198px] h-[403px] mt-[83px]" src={image2} alt="" />
        <img className="w-[198px] h-[403px]" src={image3} alt="" />
        <img className="w-[198px] h-[403px] my-[42px]" src={image1} alt="" />
      </div>
    </div>
  );
};

export default Header;
