import React from "react";
import { Link } from "react-router-dom";
import "./HotelList.css";
const HotelList = (props) => {
    
    const { HotelName, img, address, _id } = props.hotel;
    
  const shorten = address ? address.substring(0, 50) : "";

    const handleDelete = (id) => {
      const url = `http://localhost:5000/addHotel/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("Delete");
            // const remaining = hotles.filter((hotel) => hotel._id !== id);
            // sethotles(remaining);
          }
        });
    };
  

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
          <button
            onClick={() => handleDelete(_id)}
            className="up-btn2 up-btn"
            to="./home"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelList;
