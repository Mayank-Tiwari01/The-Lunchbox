import React from 'react'
import style from '../styles/filterArea.css'
const SearchBar = ({showText, setShowText, resData, setRestaurants}) => {
  const handleChange = (e) => {
    setShowText(e.target.value)
  }

  const handleClick = () => {
    let temp = resData.filter((res) => {
      return res?.info?.name.toLowerCase().includes(showText.toLowerCase());
    })
    setRestaurants(temp);
  }
  return (
    <>
      <input
        className="input-box" 
        type="text" 
        value={showText}
        onChange={handleChange}
        placeholder="Search for your Fav Restaurants here!"
        onKeyDown={handleClick}
      />
      <button className="search-button" onClick={handleClick}>
        Search
      </button>
    </>
  )
}

export default SearchBar;