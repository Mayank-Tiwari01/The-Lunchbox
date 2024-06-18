import React from 'react';
import '../styles/ShimmerUi.css';

const ShimmerUi = () => {
  return (
    <div className="shimmer-container">
      {Array(6).fill('').map((_, index) => (
        <div key={index} className="shimmer-card">
          <div className="shimmer-image"></div>
          <div className="shimmer-line shimmer-title"></div>
          <div className="shimmer-line"></div>
          <div className="shimmer-line"></div>
          <div className="shimmer-line"></div>
        </div>
      ))}
    </div>
  );
};

export default ShimmerUi;
