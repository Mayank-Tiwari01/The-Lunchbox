import React from 'react';

const SearchBar = ({ searchText, setSearchText, searchRestaurant, setSearchRestaurant, filteredRestaurants, setDisplayRestaurants, setNoResults }) => {

  const handleChange = (e) => {
    setSearchText(e.target.value);
  }

  const handleClick = () => {
    let searchedRes = filteredRestaurants.filter((res) => 
      res.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchRestaurant(searchedRes);
    setDisplayRestaurants(searchedRes);
    setNoResults(searchedRes.length === 0); 
  }

  return (
    <div>
      <input 
        className="input-box" 
        type="text" 
        value={searchText} 
        onChange={handleChange} 
        placeholder="Search for your Fav Restaurants here!"
      />
      <button className="search-button" onClick={handleClick}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
