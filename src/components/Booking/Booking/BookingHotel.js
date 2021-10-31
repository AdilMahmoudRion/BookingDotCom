import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./BookingHotel.css";
import "../../Hotel/Hotel.css"

const BookingHotel = (props) => {
  const { bookingId } = useParams();
  const [booking, setBooking] = useState([]);
  const { HotelName, img, Details, address, rate, rating } = booking;

  useEffect(() => {
    fetch(`https://gentle-mountain-63376.herokuapp.com/addhotel/${bookingId}`)
      .then((res) => res.json())
      .then((data) => {
        setBooking(data);
      });
  }, []);

  return (
//  -----------------Hotel Details information-----------
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
        <div>
          <Link to="/home" className="p-1 text-center booking-button btn1 w-50">Home</Link>
          <Link to="/booking" className="text-center p-1 booking-button btn2 w-50">
            Booking now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookingHotel;
