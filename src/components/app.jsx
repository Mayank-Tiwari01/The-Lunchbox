import React, { useState, useEffect } from 'react';
import Header from './Header';
import Restaurant from './Restaurant';
import TopRatedButton from './TopRatedButton';
import localRestaurants from '../../data/data.json';

const App = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch("https://mocki.io/v1/4f61ea24-8625-496b-9518-57ae2a21def9");
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const json = await response.json();
      setFilteredRestaurants(json);
    } catch (error) {
      console.error("Error occurred while fetching data from remote API, falling back to local data", error);
      setFilteredRestaurants(localRestaurants);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <TopRatedButton
        restaurants={filteredRestaurants}
        setFilteredRestaurants={setFilteredRestaurants}
      />
      <div className="res-container">
        {filteredRestaurants.map((res) => (
          <Restaurant
            key={res.id}
            name={res.name}
            rating={res.rating}
            price={res.price / 100}
            image={res.image}
            deliveryTime={res.avgDeliveryTime}
          />
        ))}
      </div>
    </>
  );
};

export default App;
