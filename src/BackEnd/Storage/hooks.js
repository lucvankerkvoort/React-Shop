import React, { useEffect, useState } from "react";
import { testData } from "../../testData";

const useStorage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(testData);
  });

  return { data, setData };
};

export default useStorage;
