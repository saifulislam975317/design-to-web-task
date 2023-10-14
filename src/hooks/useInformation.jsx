import { useEffect, useState } from "react";

const useInformation = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    fetch("/ca.json")
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, []);
  return [info];
};

export default useInformation;
