import React from 'react';

const TopRatedButton = ({ restaurants, setFilteredRestaurants }) => {
  const handleClick = () => {
    const filteredList = restaurants.filter((item) => item.rating > 4.5);
    setFilteredRestaurants(filteredList);
  };

  return (
    <button onClick={handleClick}>
      See Top Rated Restaurant✨
    </button>
  );
};

export default TopRatedButton;