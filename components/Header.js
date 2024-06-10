import React from 'react';

const Header = () => {
  return (
    <>
      <div className="nav-bar">
        <div className="left-logo">
          <img
            className="img-file"
            src="https://play-lh.googleusercontent.com/hkFt0QUYeUPeSjFi0lwJIj7FaqJQd3XLVWO4-58WHyAdRmLvoQ-4ACtZnydtmoxnHSw"
            alt="Logo"
          />
        </div>
        <div className="right-options">
          <ul className="right-options-ul">
            <li>Home</li>
            <li>Pure Veg food options</li>
            <li>Non Veg food options</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
