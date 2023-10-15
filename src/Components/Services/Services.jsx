import { Link, useLoaderData } from "react-router-dom";

const Services = () => {
  const service = useLoaderData();

  return (
    <div>
      <div className="lg:flex justify-center my-5 px-12">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={service.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{service.name}</h2>
            <h1 className="text-[#999] text-[16px] mb-2 font-bold">
              SERVICES I OFFER
            </h1>
            {service.about.services.map((service) => (
              <li className="space-y-12" key={service.id}>
                {service}
              </li>
            ))}
          </div>
        </div>
      </div>
      <div className="lg:flex justify-center px-12 ml-20 lg:ml-0">
        <Link className="btn btn-success ml-10" to="/">
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default Services;
