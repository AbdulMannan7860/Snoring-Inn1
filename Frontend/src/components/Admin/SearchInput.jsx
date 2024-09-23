import React, { useContext, useEffect, useState } from 'react';
import HotelContext from '../../Context/Hotel Context/Hotel.context';

function SearchInput() {
  const context = useContext(HotelContext);
  const { hotels } = context;

  const [data, setData] = useState(hotels)

  useEffect(() => {
    setData(hotels);
  }, [hotels])

  return (
    <div className="d-flex justify-content-between">
      <div className="selectContainer">
        <select name="hotelName" defaultValue={'hotelName1'}>
          <option value="">Select Hotel</option>
          <>
            {
              data.map((hotel) => {
                return (
                  <option key={hotel._id} value={hotel._id}>{hotel.name}</option>
                )
              })
            }
          </>
        </select>
      </div>
      <div className="searchContainer">
        <input type="text" placeholder="Search..." />
        <button>🔍</button>
      </div>
    </div>
  );
}

export default SearchInput;
