import React, { useContext, useEffect, useRef, useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Import edit and delete icons
import HotelContext from '../../Context/Hotel Context/Hotel.context';
import loadingGif from '../../assets/loading.gif';

function SearchInput() {
  const context = useContext(HotelContext);
  const { hotels, createHotel, loading } = context;

  const [formData, setFormData] = useState({
    name: '',
    city: '',
    address: '',
    description: '',
  });
  const [data, setData] = useState(hotels);
  const [selectedHotel, setSelectedHotel] = useState(null); // Track selected hotel for actions
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setData(hotels);
  }, [hotels]);

  const ref = useRef();

  const handleCreateHotelClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.name || formData.city || formData.address || formData.description) {
      await createHotel(formData.name, formData.city, formData.address, formData.description);
      setShowModal(false);
      setFormData({
        name: '',
        city: '',
        address: '',
        description: '',
      });
    }
  };

  const handleEditHotel = (hotel) => {
    console.log(`Edit hotel ${hotel.name}`);
    // Add edit logic here
  };

  const handleDeleteHotel = (hotel) => {
    console.log(`Delete hotel ${hotel.name}`);
    // Add delete logic here
  };

  return (
    <>
      <div className="d-flex justify-content-between">
        <div className="searchContainer w-25 mx-3">
          <select
            name="hotelName"
            className="w-75 rounded border-none"
            value={selectedHotel || ''}
            onChange={(e) => setSelectedHotel(e.target.value)} // Capture selected hotel
          >
            <option value="">Select Hotel</option>
            {data.map((hotel) => (
              <option key={hotel._id} value={hotel._id}>
                {hotel.name}
              </option>
            ))}
          </select>
          <div className='w-25 pt-3 mt-1'>
            {selectedHotel && (
              <div className="d-flex align-items-center mx-3">
                <FaEdit
                  className="mx-2 text-white"
                  style={{ cursor: 'pointer' }}
                  title="Edit"
                  onClick={() => handleEditHotel(data.find(h => h._id === selectedHotel))}
                />
                <FaTrash
                  className="text-white"
                  style={{ cursor: 'pointer' }}
                  title="Delete"
                  onClick={() => handleDeleteHotel(data.find(h => h._id === selectedHotel))}
                />
              </div>
            )}
          </div>
        </div>
        <div className="searchContainer w-25">
          <button className="w-100 btn btn-primary py-md-3 px-md-5 mx-3 animated slideInLeft" onClick={handleCreateHotelClick}>
            Create Hotel
          </button>
        </div>
        <div className="searchContainer w-25">
          <input type="text" placeholder="Search..." />
          <button>🔍</button>
        </div>
      </div>

      {showModal && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Create Hotel</h5>
                <button type="button" className="close" onClick={handleCloseModal}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="loginContainer">
                  <div className="loginBox">
                    <form onSubmit={handleSubmit}>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Hotel Name"
                        required
                      />
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="Enter City"
                        required
                      />
                      <input
                        type="text"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        placeholder="Hotel Address"
                        required
                      />
                      <input
                        type="text"
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        placeholder="Add Description"
                        required
                      />
                      <button type="submit" className="d-none" ref={ref}>
                        {!loading ? (
                          <span className="text-lg font-bold font-inter text-darkText">submit</span>
                        ) : (
                          <img className="mx-auto" src={loadingGif} width={33} height={33} alt="Loading" />
                        )}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                  Close
                </button>
                <button type="button" className="btn btn-primary" onClick={() => ref.current.click()}>
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SearchInput;
