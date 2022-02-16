import React from "react";
import Banner from "../Banner/Banner";
import ExBangladesh from "../ExBangladesh/ExBangladesh";
import Footer from "../Footer/Footer";
import Hotels from "../Hotels/Hotels";
import OurService from "../OurService/OurService";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <Hotels></Hotels>
      <OurService></OurService>
      <ExBangladesh></ExBangladesh>
      <Footer></Footer>
    </div>
  );
};

export default Home;
