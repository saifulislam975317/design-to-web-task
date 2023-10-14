import { useLoaderData } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { RiCalendar2Line } from "react-icons/ri";
const CADetails = () => {
  const user = useLoaderData();
  console.log(user);
  return (
    <div className="flex gap-4">
      <div className="w-[1/2]">
        <h1 className="userTitle">{user.name}</h1>
        <p>{user.intro}</p>
        <h3 className="text-blue-500">
          <AiFillStar className="text-xl mr-2 inline-block" />
          {user.rating}
          <span className="text-black ml-2">({user.reviewCount})</span>
        </h3>

        <div className="card w-[515px] bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl">{user.taskComplexity}</h2>
              </div>
              <div>
                <p className="text-xl font-bold">{user.price}</p>
              </div>
            </div>
            <p>
              <RiCalendar2Line className="text-xl inline-block mr-2" />
              {user.deliveryTime}
            </p>
            <div className="flex">
              <button className="rounded-xl font-bold bg-[#0076CE] text-white text-[16px] w-[220px] mr-6">
                Request Proposal
              </button>
              <button className="btn font-bold w-[220px] btn-outline bg-white">
                Chat with me
              </button>
            </div>
          </div>
        </div>
        <div className="card w-[515px] mt-8 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="userTitle">What people say?</h2>
            <p>{user.testimonial.text}</p>
          </div>
        </div>
      </div>
      <div className="w-[1/2]">
        <img
          className="w-[733px] h-[412px] rounded-2xl"
          src={user.image}
          alt=""
        />
        <h1 className="userTitle mt-8">About {user.name}</h1>
        <div className="flex justify-between">
          <div>
            <h1 className="text-[#999] text-[16px] font-bold mb-2">FROM</h1>
            <h2>{user.about.from}</h2>
          </div>
          <div>
            <h1 className="text-[#999] text-[16px] font-bold mb-2">
              PARTNER SINCE
            </h1>
            <h2>{user.about.partnerSince}</h2>
          </div>
          <div>
            <h1 className="text-[#999] text-[16px] font-bold mb-2">
              AVERAGE RESPONSE TIME
            </h1>
            <h2>{user.about.averageResponseTime}</h2>
          </div>
        </div>
        <h3 className="text-[#999] text-[16px] mt-8 font-bold">About</h3>
      </div>
    </div>
  );
};

export default CADetails;
