import React, { useState, useEffect } from 'react';
import ShimmerUi from './ShimmerUi';
import Restaurant from './Restaurant';
import TopRatedButton from './TopRatedButton';
import SearchBarNew from './SearchBar';
import NoResults from './NoResult'
import useInternetStatus from '../utils/useInternetStatus';
import { Link } from 'react-router-dom';
import NoInternetError from './NoInternetError';

const Body = () => {

  //to keep track of the original data, this never get's modified.
  const [resData, setResData] = useState([]);
  //modifies/shows data based on the giving condition.
  const [restaurants, setRestaurants] = useState([]);
  //shows the text on screen to the user.
  const [showText, setShowText] = useState("");

  const fetchLiveData = async () => {
    try {

      // let response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');

      let response = await fetch('https://thingproxy-760k.onrender.com/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8947446&lng=75.8301169&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');

      let json = await response.json();
      
      let res = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setResData(res);
      setRestaurants(res);
      console.log(res);
    } catch(error) {
      console.error('error fetching the data :(' + error);
    }
  };

  let status = useInternetStatus();

  useEffect(() => {
    fetchLiveData();
  }, []);

  
  if (status === false) return <NoInternetError/>

  if (resData.length === 0) return <ShimmerUi />;

  return (
    <>
      <div className='filter-area'>
        <SearchBarNew
          showText={showText}
          setShowText={setShowText}
          resData={resData}
          setRestaurants={setRestaurants}
        />
        <TopRatedButton
          resData={resData}
          setRestaurants={setRestaurants}
        />
      </div>
      {restaurants.length === 0? <NoResults /> :
      <div className="res-container">
        {restaurants.map((res) => (
          <Link key={res?.info?.id} to={"/Restaurants/" + res?.info?.id} className="res-menu-link">
            <Restaurant
              name={res?.info?.name}
              rating={res?.info?.avgRatingString}
              price={res?.info?.costForTwo}
              image={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${res?.info?.cloudinaryImageId}`}
              deliveryTime={res?.info?.sla?.deliveryTime}
            />
          </Link>
        ))}
      </div>}
    </>
  );
};

export default Body;
