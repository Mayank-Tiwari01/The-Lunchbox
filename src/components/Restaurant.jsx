import React from 'react';

const Restaurant = ({ name, rating, price, image, deliveryTime }) => {
  return (
    <div className="res-card">
      <div className="res-items">
        <img className="res-image" src={image} alt={name} />
        <h1>{name}</h1>
        <p>
          <span className='rating'>{rating}</span>
        </p>
        <p>Starting from &#8377;{price}</p>
        <p>
        <img
            src='https://cdn.iconscout.com/icon/premium/png-256-thumb/small-size-delivery-4984739-4142591.png'
            className='delivery-img'
            alt="Delivery Icon"
            aria-label="Delivery time icon"
          />
          {deliveryTime}
        </p>
      </div>
    </div>
  );
};

export default Restaurant;