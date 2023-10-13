import boy from "../../assets/images/boy.jpg";
import girl from "../../assets/images/girl.jpg";
const SocialPlatform = () => {
  return (
    <div className="md:flex justify-center  gap-4">
      <div>
        <h1 className="sectionTitle text-center">
          <span className="styleColor">All-in-One</span> platform <br /> that
          Makes Easier
        </h1>
        <p>
          We are more than a platform; We are your success partner. Discover our
          services to achieve your business and educational goals
        </p>
      </div>
      <div className="">
        <div className="flex gap-4">
          <div className="space-y-4">
            <p className="bg-[#EFD9F9] w-[286px] p-1 rounded-l-lg rounded-tr-2xl text-center">
              Hey, check out loreumipsum services.
            </p>
            <h1 className="bg-[#EFD9F9] w-[320px] p-1 rounded-l-lg rounded-tr-2xl text-center">
              I learned from their videos, got my first job.
            </h1>
            <h2 className="bg-[#EFD9F9] w-[340px] p-1 rounded-l-lg rounded-tr-2xl text-center">
              You won't be disappointed with their services.
            </h2>
            <h3 className="bg-[#DDF3FF] mt-12 w-[340px] p-1 rounded-r-lg rounded-tl-2xl text-center">
              I got a perfect analysis report from them too
            </h3>
            <h4 className="bg-[#DDF3FF] w-[200px] p-1 rounded-r-lg rounded-tl-2xl text-center">
              oh,that's great
            </h4>
          </div>
          <div>
            <img className="w-[280px] h-[300px]" src={boy} alt="" />
          </div>
        </div>
        <img className="w-[280px] h-[300px] border-2 " src={girl} alt="" />
      </div>
    </div>
  );
};

export default SocialPlatform;
