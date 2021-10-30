import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const BookingHotel = (props) => {
  const { bookingId } = useParams();
  const [booking, setBooking] = useState([]);
  const { HotelName, img, Details } = booking;
  useEffect(() => {
    fetch(`http://localhost:5000/addHotel/${bookingId}`)
      .then((res) => res.json())
      .then((data) => {
        setBooking(data);
      });
  }, []);

  return (
    <div className="w-50">
      <img src={img} alt="" />
      <h1>{HotelName}</h1>
      <p>{Details}</p>
    </div>
  );
};

export default BookingHotel;
