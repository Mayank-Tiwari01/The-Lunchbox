import React from 'react';
import style from '../styles/topRated.css'
function TopRatedButton({ resData, setRestaurants }) {

  const handleClick = () => {
    let filteredRes = resData.filter((res) => res?.info?.avgRating > 4);
    setRestaurants(filteredRes);
    console.log(filteredRes);
  };

  return (
    <>
      <button className="top-rated-button" onClick={handleClick}>
        See Top Rated Restaurants✨
      </button>
    </>
  );
}

export default TopRatedButton;
