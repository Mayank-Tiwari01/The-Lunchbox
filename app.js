import React from 'react';
import Header from './components/Header';
import Restaurant from './components/Restaurant';
import { restaurants } from './data/eg';

const App = () => {
  return (
    <>
      <Header />
      <div className="res-container">
        {restaurants.map((res) => (
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
    </>
  );
};

export default App;
