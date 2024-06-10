import React from 'react';

const Restaurant = ({ name, rating, price, image }) => {
  return (
    <div className="res-card">
      <div className="res-items">
        <img
          className="res-image"
          src={image}
          alt={name}
        />
        <h1>{name}</h1>
        <p>Rating: {rating}</p>
        <p>Price: {price}</p>
      </div>
    </div>
  );
};

export default Restaurant;
