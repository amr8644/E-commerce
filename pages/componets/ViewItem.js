import React, { useState, useEffect } from "react";

const ViewItem = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const url = "https://fakestoreapi.com/products/1";
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return <div>ViewItem</div>;
};

export default ViewItem;
