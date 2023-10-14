import { useLoaderData } from "react-router-dom";

const Services = () => {
  const service = useLoaderData();
  console.log(service);
  return (
    <div className="flex justify-center my-5">
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
  );
};

export default Services;
