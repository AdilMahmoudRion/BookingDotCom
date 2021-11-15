import React, { useEffect, useState } from "react";
import Hotel from "../Hotel/Hotel";
import './Hotels.css';

const Hotels = () => {
  const [hotels, setHotel] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/bikes")
      .then((res) => res.json())
      .then((data) => {
        setHotel(data);
      });
  }, []);

  

  return (
    <div className="mt-4">
      <div className="text-center">
        <h1>Find the perfect hotel on Booking.com</h1>
        <p className="text-muted">From budget hotels to luxury rooms and everything in between</p>
      </div>
      <div>
        <div className="Hotels container">
          {hotels.map((hotel) => (
            <Hotel key={hotel._id} hotel={hotel}></Hotel>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hotels;
