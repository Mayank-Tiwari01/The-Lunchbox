import React, { useState, useEffect } from 'react';
import Header from './Header';
import Restaurant from './Restaurant';
import TopRatedButton from './TopRatedButton';
import ShimmerUi from './ShimmerUi'; 
import localRestaurants from '../../data/data.json';
import NoResults from './NoResult'; 
import SearchBar from './SearchBar';
import '../styles/filterArea.css'
const App = () => {
  //used for filtering top restaurant.
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  //used to store and update the searched restaurant.
  const [searchText, setSearchText] = useState("");
  //used to filter restaurant based on searched text.
  const [searchRestaurant, setSearchRestaurant] = useState([]);
  //used to display restaurants based on current filter or search.
  const [displayRestaurants, setDisplayRestaurants] = useState([]);
  //used to show no results message.
  const [noResults, setNoResults] = useState(false);

  async function fetchData() {
    try {
      const response = await fetch("https://mocki.io/v1/4f61ea24-8625-496b-9518-57ae2a21def9");

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const json = await response.json();
      setFilteredRestaurants(json);
      setSearchRestaurant(json);
      setDisplayRestaurants(json);
      setNoResults(false); 
    } catch (error) {
      console.error("Error occurred while fetching data from remote API, falling back to local data", error);
      setFilteredRestaurants(localRestaurants);
      setSearchRestaurant(localRestaurants);
      setDisplayRestaurants(localRestaurants);
      setNoResults(false); 
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (filteredRestaurants.length === 0) ? <ShimmerUi /> : (
    <>
      <Header />
        <div className='filter-area'>
          <SearchBar
          searchText={searchText}
          setSearchText={setSearchText}
          searchRestaurant={searchRestaurant}
          setSearchRestaurant={setSearchRestaurant}
          filteredRestaurants={filteredRestaurants}
          setDisplayRestaurants={setDisplayRestaurants}
          setNoResults={setNoResults}
        />
        <TopRatedButton
          restaurants={filteredRestaurants}
          setFilteredRestaurants={setFilteredRestaurants}
          setDisplayRestaurants={setDisplayRestaurants}
        />
      </div>

      {noResults ? (
        <NoResults /> 
      ) : (
        <div className="res-container">
          {displayRestaurants.map((res) => (
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
      )}
    </>
  );
};

export default App;
