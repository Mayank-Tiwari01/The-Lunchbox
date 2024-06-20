import React from 'react';
import "../styles/topRated.css";

const TopRatedButton = ({ restaurants, setFilteredRestaurants, setDisplayRestaurants }) => {
  const handleClick = () => {
    const filteredList = restaurants.filter((item) => item.rating > 4.5);
    setFilteredRestaurants(filteredList);
    setDisplayRestaurants(filteredList);
  };

  return (
    <button className="top-rated-button" onClick={handleClick}>
      See Top Rated Restaurants✨
    </button>
  );
};

export default TopRatedButton;
