import React from "react";
import { Link } from "react-router-dom";
import "./Hotel.css";
const Hotel = (props) => {
  const { HotelName, img, _id, rate, address, rating } = props.hotel;
  const shorten = address ? address.substring(0, 70) : "";
 

  return (
    <div>
      <div className="hotel-information">
        <div className="logo">
          <img className="hotel-img" src={img} alt="" />
        </div>
        <div className="hotel-details">
          <div className="name-ret">
            <h5>{HotelName}</h5>
            <div>
              <p className="reviews">
                reviews <span className="span-tag">{rating}</span>
              </p>
            </div>
          </div>
          <p>Address: {shorten}...</p>
          <h4>
            <span className="text-muted">From: </span>
            <strong className="rate">BDT {rate}</strong>
          </h4>
          <div className="cnf-button">
            <Link
              className="p-1 text-center booking-button btn1 w-50"
              to={`/bookingHotel/${_id}`}
            >
              Details{" "}
            </Link>
            <Link
              className="text-center p-1 booking-button btn2 w-50"
              to={`/bookingHotel/${_id}`}
            >
              Booking Now{" "}
            </Link>
 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
