import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaLeaf, FaDrumstickBite, FaInfoCircle, FaPhoneAlt, FaShoppingCart } from 'react-icons/fa';
import style from '../styles/navbar.css';

const Header = () => {
  return (
    <div className="nav-bar">
      <div className="left-logo">
        <Link to="/">
          <img
            className="img-file"
            src="https://play-lh.googleusercontent.com/hkFt0QUYeUPeSjFi0lwJIj7FaqJQd3XLVWO4-58WHyAdRmLvoQ-4ACtZnydtmoxnHSw"
            alt="Logo"
          />
        </Link>
      </div>
      <div className="right-options">
        <ul className="right-options-ul">
          <li>
            <Link to="/" className="nav-link">
              <FaHome className="icon" /> Home
            </Link>
          </li>
          <li>
            <Link to="/PureVeg" className="nav-link">
              <FaLeaf className="icon" /> Pure Veg
            </Link>
          </li>
          <li>
            <Link to="/NonVeg" className="nav-link">
              <FaDrumstickBite className="icon" /> Non-Veg
            </Link>
          </li>
          <li>
            <Link to="/About" className="nav-link">
              <FaInfoCircle className="icon" /> About Us
            </Link>
          </li>
          <li>
            <Link to="/Contact-Us" className="nav-link">
              <FaPhoneAlt className="icon" /> Contact Us
            </Link>
          </li>
          <li>
            <Link to="/Cart" className="nav-link">
              <FaShoppingCart className="icon" /> Cart
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
