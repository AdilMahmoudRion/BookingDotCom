import React from 'react';
import { Link } from 'react-router-dom';
import './Hotel.css'
const Hotel = (props) => {
  const { HotelName, Details, img, _id } = props.hotel;
    return (
      <div>
        <div className="hotel-information">
          <div className="logo">
            <img className="hotel-img" src={img} alt="" />
          </div>
          <div className="hotel-details">
            <div className="name-ret">
              <h5>{HotelName}</h5>
              <p className="reviews">
                reviews <span className="span-tag">8.5</span>
              </p>
            </div>
            <p>Address</p>
            <h4>
              <span className="text-muted">From: </span>
              <strong>BDT 4,197</strong>
            </h4>
            <div className="cnf-button">
              <button className="booking-button btn1 w-50 me-1">
                Booking Now
              </button>
              {/* <Link className="m-0 p-0" to={`/bookingHotel/${_id}`}> */}
              <button className="booking-button btn2 w-50">Details More</button>
              {/* </Link> */}
              {/* to={`/bookingHotel/${_id}`} */}
            </div>
          </div>
        </div>
      </div>
    );
};

export default Hotel;