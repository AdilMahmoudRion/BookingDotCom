import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HotelList.css";
const HotelList = (props) => {

  // -------------Hotel update and delete section----------
    
  const [hotel, setHotel] = useState([]);
  useEffect(() => {
    const url = "https://gentle-mountain-63376.herokuapp.com/addhotel";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setHotel(data));
  }, []);
 


    
  

    const handleDelete = (id) => {
      const proceed = window.confirm('are you sure you want to delete?')
      if (proceed) {
        const url = `https://gentle-mountain-63376.herokuapp.com/addhotel/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              alert("Delete Successfully");
              const remaining = hotel.filter((hotel) => hotel._id !== id);
              setHotel(remaining);
            }
          });
      }
    };


  return (
    <div>
      {hotel.map((hotel) => (
        <div className="hotel" key={hotel._id}>
          <div className="img-sec">
            <img className="hotels-img" src={hotel.img} alt="" />
          </div>
          <div className="detail-sec">
            <div className="hotel-details">
              <div>
                <h5>{hotel.HotelName}</h5>
                <p>{hotel.address}</p>
              </div>
            </div>
            <div className="button-grp">
              <Link className="up-btn up-btn1" to={`/updateHotel/addHotel/${hotel._id}`}>
                Update
              </Link>
              <button
                onClick={() => handleDelete(hotel._id)}
                className="up-btn2 up-btn"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HotelList;
