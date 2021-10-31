import axios from "axios";
import { useForm } from "react-hook-form";
import HotelList from "../HotelList/HotelList";
import "./AddHotel.css";
const AddHotel = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();


  const onSubmit = (data) => {
    axios
      .post("https://gentle-mountain-63376.herokuapp.com/addhotel", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("added successfully");
          reset();
        }
      });
  
  };

 
  


  return (
    <div className="container hotel-section mt-5">
      <div className="w-50 hotel-list">
        <h1 className="text-center">List Off Hotel</h1>
        <div>
          
            <HotelList></HotelList>
          
        </div>
      </div>
      <div className="w-50 hotel-added">
        <h1 className="text-center">Please Add a Service</h1>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Type Hotel Name"
            {...register("HotelName", { required: true })}
          />
          {errors.HotelName && <p>Hotel name is required.</p>}
          <input
            placeholder="Hotel Retting"
            {...register("rating", { min: 2, max: 10 }, { required: true })}
          />
          {errors.rating && (
            <p className="text-muted">Rating required Out of 10.</p>
          )}
          <input
            placeholder="Address"
            type="text"
            {...register("address", { min: 1, max: 10 }, { required: true })}
          />
          {errors.address && <p>Address required.</p>}
          <input
            placeholder="Rate"
            type="number"
            {...register("rate", { required: true })}
          />
          {errors.rate && <p>Rate required.</p>}
          <input
            placeholder="insert Hotel image link"
            {...register("img", { required: true })}
          />
          {errors.img && <p>Hotel image is required.</p>}
          <textarea
            placeholder="Type Hotel description"
            {...register("Details")}
          />
          {errors.Details && <p>Hotel Info Required</p>}
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddHotel;
