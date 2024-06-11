import React from 'react';

const Restaurant = ({ name, rating, price, image, deliveryTime}) => {
  return (
    <div className="res-card">
      <div className="res-items">
        <img
          className="res-image"
          src={image}
          alt={name}
        />
        <h1>{name}</h1>
        <p ><span className='rating'>{rating}</span></p>
        <p>{price}</p>
        <p>{deliveryTime}</p>
      </div>
    </div>
  );
};

export default Restaurant;
