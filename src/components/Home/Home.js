import React from 'react';
import Banner from '../Banner/Banner';
import Hotels from '../Hotels/Hotels';

const Home = () => {
    return (
      <div className="container">
       <Banner></Banner>
        <Hotels></Hotels>
      </div>
    );
};

export default Home;