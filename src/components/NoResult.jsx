import React from 'react';
import '../styles/noResults.css';

const NoResults = () => {
  return (
    <div className="no-results-container">
      <img src="https://cdni.iconscout.com/illustration/premium/thumb/no-result-found-2161436-1815078.png?f=webp" alt="No Results" className="no-results-image" />
      <div className="no-results-text">
        <h2>No Restaurants Found</h2>
        <p>We couldn't find any restaurants matching your search. Please try again with different keywords.</p>
      </div>
    </div>
  );
}

export default NoResults;
