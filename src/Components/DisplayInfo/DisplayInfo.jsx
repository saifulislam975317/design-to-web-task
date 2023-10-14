import { Link } from "react-router-dom";

const DisplayInfo = ({ info }) => {
  return (
    <div className="flex gap-2">
      {info.map((user) => (
        <div key={user.id} className="card w-24 mt-4 bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <h2 className="text-lg">{user.name}</h2>

            <div className="card-actions">
              <Link to={`/details/${user.id}`}>
                <button className="text-[12px] text-white btn-sm btn-info rounded-lg">
                  Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayInfo;
