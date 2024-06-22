import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
      <div className="nav-bar">
        <div className="left-logo">
          <Link>
          <img
            to = '/'
            className="img-file"
            src="https://play-lh.googleusercontent.com/hkFt0QUYeUPeSjFi0lwJIj7FaqJQd3XLVWO4-58WHyAdRmLvoQ-4ACtZnydtmoxnHSw"
            alt="Logo"
          /> </Link>
        </div>
        <div className="right-options">
          <ul className="right-options-ul">
            <li>
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li>
              <Link to="/PureVeg" className="nav-link">Pure Veg</Link>
            </li>
            <li>
              <Link to="/NonVeg" className="nav-link">Non-Veg</Link>
            </li>
            <li>
              <Link to="/About" className="nav-link">About Us</Link>
            </li>
            <li>
              <Link to="/Contact-Us" className="nav-link">Contact Us</Link>
            </li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
