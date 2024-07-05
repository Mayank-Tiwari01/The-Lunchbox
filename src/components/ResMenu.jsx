import React, { useEffect, useState } from 'react';
import ApiDown from './ApiDown';
import { useParams } from 'react-router-dom';
import { RES_MENU_API } from '../utils/constants';
function ResMenu() {
  const [resInfo, setResInfo] = useState(null);
  const {resId} = useParams();
  async function fetchData() {
    try {
      let response = await fetch(RES_MENU_API + resId);

      // let response = await fetch('https://thingproxy-760k.onrender.com/fetch/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8947446&lng=75.8301169&restaurantId=44359&catalog_qa=undefined&submitAction=ENTER');

      response = await response.json();
      setResInfo(response);
      console.log(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (resInfo === null) return <ApiDown/>

  const { id, name, city, areaName, cuisines, costForTwoMessage, feeDetails, avgRating, totalRatingsString } = resInfo?.data?.cards[2]?.card?.card?.info;


  const {title, carousel} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <>
      <div className="res-menu-header">
        <div className='left-side-info'>
          <h1>{name}</h1>
          <p>{cuisines.join(', ')} , {city}</p>
          <p>{areaName}, {costForTwoMessage}</p>
          <p>{feeDetails?.message}</p>
        </div>

        <div className='right-side-info'>
          <p>⭐{avgRating}</p>
          <p>{totalRatingsString}</p>
        </div>
      </div>

      <div className="res-menu-items">
        <div className='top-pics'>
          <h1>{title}</h1>
          <ul>
            {
              carousel.map((item) => {
                return <li key={item?.bannerId}> {item?.title} &#8377; {item?.dish?.info?.price/100 || 100}</li>
              })
            }
          </ul>

          <br></br> <br></br>
          <p>This component is still in production, more menu items and better styling will come in future. See you later 🔥</p>
        </div>
        
      </div>
    </>
  );
}

export default ResMenu;
