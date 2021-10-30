import React from 'react';
import './Hotel.css'
const Hotel = (props) => {
    const { HotelName, Details, img } = props.hotel;
    return (
      <div>
        <div className="Hotel ">
          <img src={img} alt="" />
          <h5>{HotelName}</h5>
          <p>{Details}</p>
          <button type="button" className="btn btn-primary btn-sm">
            Small button
          </button>
        </div>
      </div>
    );
};

export default Hotel;