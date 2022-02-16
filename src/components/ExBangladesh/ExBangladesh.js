import React from "react";
import "./ExBangladesh.css";

const bangladesh = [
  {
    name: "Cox's Bazar",
    properties: "60",
    img: "https://media-cdn.tripadvisor.com/media/photo-s/15/99/54/30/swimming-pool.jpg",
  },
  {
    name: "Dhaka",
    properties: "78",
    img: "https://cdn.britannica.com/97/189797-050-1FC0041B/Night-view-Dhaka-Bangladesh.jpg",
  },
  {
    name: "Sylhet",
    properties: "23",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/5d/b2/55/jaflong.jpg?w=700&h=500&s=1",
  },
  {
    name: "Chittagong",
    properties: "67",
    img: "https://www.joc.com/sites/default/files/field_feature_image/Chittagong.1111_4.jpg",
  },
  {
    name: "Sreemangal",
    properties: "23",
    img: "https://sgp1.digitaloceanspaces.com/cosmosgroup/news/9782559_best%20tea%20gardens%20Bangladesh.jpg",
  },
  {
    name: "Bāndarban",
    properties: "5",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Nilachol%2C_Bandarban%2C_Bangladesh_%2806%29.jpg/1200px-Nilachol%2C_Bandarban%2C_Bangladesh_%2806%29.jpg",
  },
  {
    name: "Kuākāta",
    properties: "4",
    img: "https://cdn.bitlanders.com/users/galleries/714386/714386_gallery_5a17a9dea59bd_jpg_fa_rszd.jpg",
  },
  {
    name: "Rāngāmāti",
    properties: "11",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG2H9keWE6nbNlEEWep5jzyJhUic59opqq6w&usqp=CAU",
  },
  {
    name: "Rājshāhi",
    properties: "4",
    img: "https://i.pinimg.com/originals/ca/1e/2e/ca1e2ea2634f97ad2d33ffd69dfc7ba6.jpg",
  },
];

const ExBangladesh = () => {
  return (
    <div>
      <div className="container Ex-bangladesh-section">
        <div className="ex-bangladesh-header">
          <h2>Explore Bangladesh</h2>
          <p>These popular destinations have a lot to offer</p>
        </div>
        <div className="e-ba-section">
          {bangladesh.map((propertiy) => (
            <div className="place-div">
              <img className="place-img" src={propertiy.img} alt="" />

              <div className="place-title">
                <h2>{propertiy.name}</h2>
                <p>{propertiy.properties} Properties</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExBangladesh;
