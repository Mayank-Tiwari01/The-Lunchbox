import React, { useEffect, useState } from 'react';

function ResMenu() {
  const [data, setData] = useState(null);

  async function fetchData() {
    let response = await fetch('https://mocki.io/v1/343fc5d8-0e48-41d5-9fe9-92c39686418a');
    response = await response.json();
    setData(response[0]); // Assuming the JSON is an array with a single object
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {data && (
        <>
          <div>{data.name}</div>
          <div>{data.costForTwo}</div>
          <div>{data.rating}</div>
          <div>
            {data.menu.map((item) => (
              <div key={item.id}>
                <img src={item.img} alt={item.dishname} width="100" />
                <div>{item.dishname}</div>
                <div>{item.price}</div>
                <div>{item.veg ? 'Vegetarian' : 'Non-Vegetarian'}</div>
                <div>{item.rating}</div>
                <div>{item.numRating} ratings</div>
                <div>{item.bestSeller ? 'Best Seller' : ''}</div>
                <div>{item.dishInfo}</div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default ResMenu;
