import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import './BookingHotel.css'

const BookingHotel = (props) => {
  const { bookingId } = useParams();
  const [booking, setBooking] = useState([]);
  const { HotelName, img, Details, address, rate, rating } = booking;
  console.log(booking);
  useEffect(() => {
    fetch(`https://gentle-mountain-63376.herokuapp.com/addhotel/${bookingId}`)
      .then((res) => res.json())
      .then((data) => {
        setBooking(data);
      });
  }, []);

  return (
    <div className="container mt-5 container-box">
      <div className="booking-hotel">
        <div className="img-section ">
          <img className="" src={img} alt="" />
        </div>
        <div className="details-section">
          <h1>{HotelName}</h1>
          <address>{address}</address>
          <p>Reviews: {rating}</p>
          <h1>
            From: <strong>{rate}</strong>
          </h1>
          <p>{Details}</p>
        </div>
      </div>
    </div>
  );
};

export default BookingHotel;
