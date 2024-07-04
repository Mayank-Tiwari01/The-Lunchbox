import React, { useEffect, useState } from 'react';

function ResMenu() {
  const [resData, setResData] = useState(null);

  async function fetchData() {
    try {
      let response = await fetch('https://thingproxy-760k.onrender.com/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8947446&lng=75.8301169&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
      response = await response.json();
      setResData(response);
      console.log("Here is the fetched data: ", response?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []); // We have used an empty dependency array to ensure it runs only once after the initial render.

  return (
    <>
      <h1>Res Comp:</h1>
      {resData && 
        <div>
          {
            resData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map((restaurant, index) => (
              <p key={index}>
                {restaurant.info.name} - {restaurant.info.locality} - {restaurant.info.areaName} - {restaurant.info.avgRatingString} - {restaurant.info.costForTwo}
              </p>
            ))
          }
        </div>     
      }
    </>
  );
}

export default ResMenu;
