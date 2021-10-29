import React, { useEffect, useState } from "react";

const Hotels = () => {
  const [hotel, setHotel] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/addHotel")
      .then((res) => res.json())
      .then((data) => {
        setHotel(data);
      });
  }, []);

  console.log(hotel);

  return <div></div>;
};

export default Hotels;
