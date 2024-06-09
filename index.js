import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  return (
    <>
      <Header />
      <div className="res-container">
        <Restaurant />
        <Restaurant />
        <Restaurant />
        <Restaurant />
        <Restaurant />
        <Restaurant />
        <Restaurant />
        <Restaurant />
        <Restaurant />
      </div>
    </>
  );
};

// Header component
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

// Restaurant component
const Restaurant = () => {
  return (
    <div className="res-card">
      <div className="res-items">
        <img
          className="res-image"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/28/10b977ca-c111-4d96-945e-2807119818d7_899667.jpg"
          alt="Restaurant"
        />
        <h1>Mayank's Bar</h1>
        <p>30-35 mins</p>
        <p>Church Gate, Udaipur</p>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
