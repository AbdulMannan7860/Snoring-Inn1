import React, { useContext, useEffect, useState } from 'react';
import BookingContext from '../../Context/Booking Context/Booking.context';
import AuthContext from '../../Context/Auth Context/Auth.context';
import HotelContext from '../../Context/Hotel Context/Hotel.context';
import { FaCheck, FaEdit, FaTrash } from 'react-icons/fa';

function Table({ search, bool }) {
  const userContext = useContext(AuthContext);
  const hotelContext = useContext(HotelContext);
  const context = useContext(BookingContext);

  const { users } = userContext;
  const { hotels } = hotelContext;
  const { loading, booking, issueBooking, deleteBooking } = context;

  const [userData, setUserData] = useState(users);
  const [hotelsData, setHotelsData] = useState(hotels);
  const [data, setData] = useState(booking);
  const [searchData, setSearchData] = useState([]);

  const [id, setId] = useState(null);
  const [formData, setFormData] = useState({
    roomNumber: '',
    ticketNumber: '',
  });

  useEffect(() => {
    setUserData(users);
  }, [users]);

  useEffect(() => {
    setData(booking);
    setSearchData(booking);
  }, [booking]);

  useEffect(() => {
    setHotelsData(hotels);
  }, [hotels]);

  // const getUserName = (id) => {
  //   const user = userData.find((user) => user._id === id);
  //   return user?.name;
  // }
  // const getUserEmail = (id) => {
  //   const user = userData.find((user) => user._id === id);
  //   return user?.email;
  // }
  // const getUserContact = (id) => {
  //   const user = userData.find((user) => user._id === id);
  //   return user?.contactInfo;
  // }

  const getHotelName = (id) => {
    const hotel = hotelsData.find((hotel) => hotel._id === id);
    return hotel?.name;
  }

  const handleCheck = (id) => {
    const { roomNumber, ticketNumber } = formData;

    if (!roomNumber || !ticketNumber || !id) {
      return;
    }

    issueBooking(id, roomNumber, ticketNumber);

    setFormData({
      roomNumber: '',
      ticketNumber: '',
    });

    setId(null);
  }


  return (
    <table>
      <thead>
        <tr>
          <th>Sno.</th>
          <th>Name</th>
          <th>Email</th>
          <th>Contact</th>
          <th>Hotel Name</th>
          <th>Room No.</th>
          <th>Ticket No.</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data && data.map((booking, index) => (
          <tr key={booking?._id}>
            <td>{index + 1}</td>
            <td>{booking?.name ? booking?.name : "-"}</td>
            <td>{booking?.email ? booking?.email : "-"}</td>
            <td>{booking?.contactInfo ? booking?.contactInfo : "-"}</td>
            <td>{getHotelName(booking?.hotelId) ? getHotelName(booking?.hotelId) : "-"}</td>
            <td>
              {id === booking?._id ?
                <input
                  type="text"
                  value={formData.roomNumber}
                  onChange={(e) => setFormData({ ...formData, roomNumber: e.target.value })}
                />
                :
                booking?.roomNumber ? booking?.roomNumber : "-"
              }
            </td>
            <td>
              {id === booking?._id ?
                <input
                  type="text"
                  value={formData.ticketNumber}
                  onChange={(e) => setFormData({ ...formData, ticketNumber: e.target.value })}
                />
                :
                booking?.ticketNumber ? booking?.ticketNumber : "-"
              }

            </td>
            <td>
              <button
                onClick={() => deleteBooking(booking._id)}
                disabled={loading}
                className='text-danger border-0 bg-transparent'
              >
                <FaTrash />
              </button>
              <button
                disabled={loading}
                className='text-success border-0 bg-transparent'
              >{id === booking?._id ?
                <FaCheck
                  onClick={() => handleCheck(booking._id)}
                />
                :
                <FaEdit
                  onClick={() => setId(booking._id)}
                />
                }
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
