import React from 'react';
import Banner from '../Banner/Banner';
import Hotels from '../Hotels/Hotels';
import Login from '../Login/Login';
import OurService from '../OurService/OurService';

const Home = () => {
    return (
      <div className="">
       <Banner></Banner>
        <Hotels></Hotels>
        <OurService></OurService>
        <Login></Login>
      </div>
    );
};

export default Home;