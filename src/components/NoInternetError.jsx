import React from 'react';
import '../styles/NoInternet.css';

const NoInternetError = () => {
  return (
    <div className="no-internet-container">
      <div className="no-internet-text">
        <h1>Oh No!</h1>
        <p>It looks like you're not connected to the internet.</p>
        <p>Please check your connection and try again.</p>
      </div>
    </div>
  );
}

export default NoInternetError;