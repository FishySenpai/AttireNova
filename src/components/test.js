import React, { useEffect } from "react";
import axios from "axios";

const Test = () => {
  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://kohls.p.rapidapi.com/products/list",
        params: {
          limit: "24",
          offset: "1",
          dimensionValueID: "AgeAppropriate:Teens",
        },
        headers: {
          "X-RapidAPI-Key":
            "325a7f72damshf16ffcb2c3ed7bep1f566djsn006db2e1a65a",
          "X-RapidAPI-Host": "kohls.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return <div>Fetching data...</div>;
};

export default Test;
