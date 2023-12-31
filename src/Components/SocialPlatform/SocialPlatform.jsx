import boy from "../../assets/images/boy.png";
import girl from "../../assets/images/girl.png";
import search from "../../assets/icon/search.svg";
import research from "../../assets/icon/research.svg";
import connect from "../../assets/icon/connect.svg";
import academy from "../../assets/icon/academy.svg";
const SocialPlatform = () => {
  return (
    <div className="md:flex justify-center mt-8 gap-4">
      <div>
        <h1 className="lg:text-[65px] font-bold text-[50px] px-4">
          <span className="styleColor">All-in-One</span> platform
          <br />
          that Makes Easier
        </h1>
        <p className="text-lg px-6">
          We are more than a platform; We are your <br /> success partner.
          Discover our services to achieve <br /> your business and educational
          goals
        </p>
        <div className="flex gap-12 mt-8">
          <div className="flex flex-col px-1 space-y-16">
            <div className="flex">
              <img className="w-[50px] h-[50px] mr-4" src={search} alt="" />
              <h1>
                <span className="fontStyle">SEARCH </span> for vital <br />
                company <br /> information
              </h1>
            </div>
            <div className="flex">
              <img className="w-[50px] h-[50px] mr-4" src={research} alt="" />
              <h1>
                <span className="fontStyle"> RESEARCH</span> and <br /> generate
                reports <br /> that drive growth
              </h1>
            </div>
          </div>
          <div className="flex flex-col  space-y-16">
            <div className="flex">
              <img className="w-[50px] h-[50px] mr-4" src={connect} alt="" />
              <h1>
                <span className="fontStyle">CONNECT</span> with the <br />
                resources to meet <br /> your business needs
              </h1>
            </div>
            <div className="flex">
              <img className="w-[50px] h-[50px] mr-4" src={academy} alt="" />
              <h1>
                <span className="fontStyle"> ACADEMY</span> to give you <br />
                the skills for success <br /> in your career
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <div className="flex gap-4">
          <div className="space-y-4  flex flex-col justify-end items-end">
            <p className="bg-[#EFD9F9] w-[286px] p-1 rounded-l-lg rounded-tr-2xl text-center">
              Hey, check out loreumipsum services.
            </p>
            <h1 className="bg-[#EFD9F9] w-[320px] p-1 rounded-l-lg rounded-tr-2xl text-center">
              I learned from their videos, got my first job.
            </h1>
            <h2 className="bg-[#EFD9F9] w-[340px] p-1 rounded-l-lg rounded-tr-2xl text-center">
              You won't be disappointed with their services.
            </h2>
            <h3 className="bg-[#DDF3FF]  w-[350px] p-1 rounded-r-lg rounded-tl-2xl text-center">
              I got a perfect analysis report from them too
            </h3>
            <h4 className="bg-[#DDF3FF] w-[200px] p-1 rounded-r-lg rounded-tl-2xl text-center">
              oh,that's great
            </h4>
          </div>
          <div className=" bg-[#EFD9F9] rounded-2xl lg:w-[280px] w-[120px] lg:h-[300px] h-[140px] ">
            <img
              className="lg:w-[280px] w-[110px] lg:h-[300px] rounded-3xl"
              src={boy}
              alt=""
            />
          </div>
        </div>
        <div className=" bg-[#DDF3FF] rounded-2xl lg:w-[320px] w-[150px]  ">
          <img
            className="lg:w-[280px] w-[110px] lg:h-[300px]  rounded-3xl mt-5 ml-5"
            src={girl}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SocialPlatform;
