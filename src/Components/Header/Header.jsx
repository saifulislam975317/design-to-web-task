import "./Css/header.css";
import image1 from "../../assets/headerImages/image1.jpg";
import image2 from "../../assets/headerImages/image2.jpg";
import image3 from "../../assets/headerImages/image3.jpg";
import { useState } from "react";
import DisplayInfo from "../DisplayInfo/DisplayInfo";
const Header = () => {
  const [info, setInfo] = useState([]);
  const [error, setError] = useState("");
  const [input, setInput] = useState("");
  const fetchData = (value) => {
    fetch("ca.json")
      .then((res) => res.json())
      .then((data) => {
        const results = data.filter((user) => {
          if (!user || !user.name || !user.name.toLowerCase()) {
            setError("Result not found");
          } else {
            return (
              value &&
              user &&
              user.name &&
              user.name.toLowerCase().includes(value)
            );
          }
        });
        setInfo(results);
      });
  };
  const handleSearch = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="md:flex gap-5 justify-center my-24 items-center">
      <div>
        <h1 className="text-[65px] sectionTitle">
          Find
          <span className="mx-2 styleColor">Partners</span>
          (CAs) <br /> available online
        </h1>
        <p>
          <span className="font-bold text-gray-500">CONNECT</span> with us where
          your services are listed and visible to a myriad
          <br />
          of businesses seeking CA’s for compliance support
        </p>
        <div className="mt-[60px]">
          <div className="join">
            <div>
              <div>
                <input
                  value={input}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="input input-bordered join-item w-[400px]"
                  placeholder="Search by name"
                />
              </div>
            </div>

            <div className="indicator">
              <button className="btn join-item">Search</button>
            </div>
          </div>
        </div>
        <p className="text-red-500">{error}</p>
        <DisplayInfo info={info}></DisplayInfo>
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
