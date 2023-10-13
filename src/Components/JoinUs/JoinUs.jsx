import useInformation from "../../hooks/useInformation";

const JoinUs = () => {
  const [info] = useInformation();
  console.log("info", info);
  return (
    <div>
      <h1>join </h1>
    </div>
  );
};

export default JoinUs;
