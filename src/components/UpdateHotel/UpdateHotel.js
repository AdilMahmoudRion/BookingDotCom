import "./UpdateHotel.css";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";

const UpdateHotel = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [update, setUpdate] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://gentle-mountain-63376.herokuapp.com/addhotel/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUpdate(data);
      });
  }, []);

  const handleNameChange = (e) => {
    const updatedName = e.target.value;
    const updatedUser = {
      HotelName: updatedName,
      rating: update.rating,
      rate: update.rate,
      address: update.address,
      img: update.img,
      Details: update.Details,
    };
    setUpdate(updatedUser);
  };
  const handleRatingChange = (e) => {
    const updatedRating = e.target.value;
    const updatedUser = {
      HotelName: update.HotelName,
      rating: updatedRating,
      rate: update.rate,
      img: update.img,
      address: update.address,
      Details: update.Details,
    };
    setUpdate(updatedUser);
  };
  const handleAddressChange = (e) => {
    const updatedAddress = e.target.value;
    const updatedUser = {
      HotelName: update.HotelName,
      rating: update.rating,
      rate: update.rate,
      img: update.img,
      address: updatedAddress,
      Details: update.Details,
    };
    setUpdate(updatedUser);
  };
  const handleRateChange = (e) => {
    const updatedRate = e.target.value;
    const updatedUser = {
      HotelName: update.HotelName,
      rating: update.rating,
      rate: updatedRate,
      img: update.img,
      address: update.address,
      Details: update.Details,
    };
    setUpdate(updatedUser);
  };
  const handleImgChange = (e) => {
    const updatedImg = e.target.value;
    const updatedUser = {
      HotelName: update.HotelName,
      rating: update.rating,
      rate: update.rate,
      img: updatedImg,
      address: update.address,
      Details: update.Details,
    };
    setUpdate(updatedUser);
  };
  const handleDetailsChange = (e) => {
    const updatedDetails = e.target.value;
    const updatedUser = {
      HotelName: update.HotelName,
      rating: update.rating,
      rate: update.rate,
      img: update.img,
      address: update.address,
      Details: updatedDetails,
    };
    setUpdate(updatedUser);
  };

  const onSubmit = (e) => {
    const url = `https://gentle-mountain-63376.herokuapp.com/addHotel/${id}`;
    console.log(url);
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(update),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Update Successful");
          setUpdate({});
          reset();
        }
      });
  };

  return (
    <div className="container mt-5 updated">
      <div className="up-box">
        <h2 className="text-center mb-5 hed">Updated {update.HotelName}</h2>
        <div>
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <input
              placeholder="Type Hotel Name"
              value={update.HotelName}
              {...register("HotelName", { required: true })}
              onChange={handleNameChange}
            />
            {errors.HotelName && <p>Hotel name is required.</p>}
            <input
              placeholder="Hotel Retting"
              value={update.rating}
              {...register("rating", { min: 2, max: 10 }, { required: true })}
              onChange={handleRatingChange}
            />
            {errors.rating && (
              <p className="text-muted">Rating required Out of 10.</p>
            )}
            <input
              placeholder="Address"
              value={update.address}
              type="text"
              {...register("address", { min: 1, max: 10 }, { required: true })}
              onChange={handleAddressChange}
            />
            {errors.address && <p>Address required.</p>}
            <input
              placeholder="Rate"
              value={update.rate}
              type="number"
              {...register("rate", { required: true })}
              onChange={handleRateChange}
            />
            {errors.rate && <p>Rate required.</p>}
            <input
              placeholder="insert Hotel image link"
              value={update.img}
              {...register("img", { required: true })}
              onChange={handleImgChange}
            />
            {errors.img && <p>Hotel image is required.</p>}
            <textarea
              className="text-area"
              placeholder="Type Hotel description"
              value={update.Details}
              {...register("Details")}
              onChange={handleDetailsChange}
            />
            {errors.Details && <p>Hotel Info Required</p>}
            <input type="submit" />
          </form>
        </div>
      </div>
    
    </div>
  );
};

export default UpdateHotel;
