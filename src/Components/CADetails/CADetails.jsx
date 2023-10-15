import { Link, useLoaderData } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { RiCalendar2Line } from "react-icons/ri";
import useInformation from "../../hooks/useInformation";
import { useEffect, useState } from "react";
const CADetails = () => {
  const [info] = useInformation();
  const [showAll, setShowAll] = useState(false);
  const [displayData, setDisplayData] = useState([]);
  const user = useLoaderData();

  useEffect(() => {
    if (showAll) {
      setDisplayData(info.slice(1, 10));
    } else {
      setDisplayData(info.slice(1, 4));
    }
  }, [info, showAll]);
  return (
    <div>
      <div className="flex justify-center px-20 mt-[80px] gap-4">
        <div className="w-[1/2]">
          <h1 className="userTitle">{user.name}</h1>
          <p>{user.intro}</p>
          <h3 className="text-blue-500 my-4 ">
            <AiFillStar className="text-xl mr-2 inline-block" />
            <span className="font-bold">{user.rating}</span>
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
            alt="Image Not found"
          />
          <h1 className="userTitle my-8">About {user.name}</h1>
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
          <p className="text-[15px]">{user.about.description}</p>

          <div className="flex justify-between mt-8">
            <div className="">
              <h1 className="text-[#999] text-[16px] mb-2 font-bold">
                SERVICES I OFFER
              </h1>
              {user.about.services.map((service) => (
                <li className="space-y-12" key={service.id}>
                  {service}
                </li>
              ))}
            </div>
            <div>
              <h1 className="text-[#999] text-[16px] font-bold mr-20">
                WHY ME?
              </h1>
              <li>One-time delivery</li>
              <li>24/7 customer support</li>
              <li>Error-free documents</li>
            </div>
          </div>
        </div>
      </div>
      <Link className="btn btn-success ml-10" to="/">
        Back To Home
      </Link>
      <h1 className="userTitle mt-8 ml-10">Recommended for you</h1>
      <div className="grid md:grid-cols-3 justify-items-center mt-8 gap-4">
        {displayData.map((accounted) => (
          <div key={accounted.id} className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={accounted.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-bold">{accounted.name}</h2>
                </div>
                <div>
                  <p className="text-xl font-bold">{accounted.price}</p>
                </div>
              </div>
              <p>{accounted.intro}</p>
              <h3 className="text-blue-500">
                <AiFillStar className="text-xl mr-2 inline-block" />
                {accounted.rating}
                <span className="text-black ml-2">
                  ({accounted.reviewCount})
                </span>
              </h3>
              <Link to={`/services/${accounted.id}`}>
                <button className="h-[30px] rounded-lg text-white bg-[#0076CE] btn-block">
                  View Services
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center my-5">
        <button
          className="btn btn-warning"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "Show All"}
        </button>
      </div>
    </div>
  );
};

export default CADetails;
