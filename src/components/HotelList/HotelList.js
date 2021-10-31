import React from 'react';
import { Link } from 'react-router-dom';
import './HotelList.css';
const HotelList = (props) => {
    const { HotelName, img, address } = props.hotel;
    console.log(props.hotel);
    const shorten = address ? address.substring(0, 50) : "";
    return (
      <div className="hotel">
        <div className="img-sec">
          <img className="hotels-img" src={img} alt="" />
        </div>
        <div className="detail-sec">
          <div className="hotel-details">
            <div>
              <h5>{HotelName}</h5>
              <p>{shorten}</p>
            </div>
          </div>
          <div className="button-grp">
            <Link className="up-btn up-btn1" to="./home">
              Update
            </Link>
            <Link className="up-btn2 up-btn" to="./home">
             Remove
            </Link>
          </div>
        </div>
      </div>
    );
};

export default HotelList;