import React from 'react';
import { Link } from 'react-router-dom';
import './Hotel.css'
const Hotel = (props) => {
  const { HotelName, Details, img, _id } = props.hotel;
    return (
      <div>
        <div className="Hotel ">
          <img className="hotel-img" src={img} alt="" />
          <h5>{HotelName}</h5>
          <p>{Details}</p>
          <Link to={`/bookingHotel/${_id}`}>
            <button type="button" className="btn btn-primary btn-sm">
              Small button
            </button>
          </Link>
        </div>
      </div>
    );
};

export default Hotel;