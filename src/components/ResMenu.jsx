import React from 'react';
import ApiDown from './ApiDown';
import { useParams } from 'react-router-dom';
import useResMenu from '../utils/useResMenu';

function ResMenu() {
  const { resId } = useParams();
  const resInfo = useResMenu(resId);

  if (resInfo === null) return <ApiDown />;

  const info = resInfo?.data?.cards[2]?.card?.card?.info || {};
  const carouselData = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {};

  const { name, city, areaName, cuisines, costForTwoMessage, feeDetails, avgRating, totalRatingsString } = info;
  const { title, carousel } = carouselData;

  return (
    <>
      <div className="res-menu-header">
        <div className="left-side-info">
          <h1>{name}</h1>
          <p>{cuisines?.join(', ')}, {city}</p>
          <p>{areaName}, {costForTwoMessage}</p>
          <p>{feeDetails?.message}</p>
        </div>

        <div className="right-side-info">
          <p>⭐{avgRating}</p>
          <p>{totalRatingsString}</p>
        </div>
      </div>

      <div className="res-menu-items">
        <div className="top-pics">
          <h1>{title}</h1>
          <ul>
            {carousel?.map((item) => (
              <li key={item?.bannerId}>
                {item?.title} &#8377; {item?.dish?.info?.price / 100 || 100}
              </li>
            ))}
          </ul>

          <br /><br />
          <p>This component is still in production, more menu items and better styling will come in the future. See you later 🔥</p>
        </div>
      </div>
    </>
  );
}

export default ResMenu;
