import React, { useContext, useEffect, useState } from 'react';
import HotelContext from '../../Context/Hotel Context/Hotel.context';
import loadingGif from '../../assets/loading.gif';

import './LoginForm.css';

function SearchInput() {
  const context = useContext(HotelContext);
  const { hotels, loading } = context;

  const [formData, setFormData] = useState({
    name: '',
    city: '',
    address: '',
    description: '',
  })
  const [data, setData] = useState(hotels);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setData(hotels);
  }, [hotels]);

  const handleCreateHotelClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmit = async () => {

  }

  return (
    <>
      <div className="d-flex justify-content-between">
        <div className="selectContainer">
          <select name="hotelName" defaultValue={'hotelName1'}>
            <option value="">Select Hotel</option>
            <>
              {data.map((hotel) => {
                return (
                  <option key={hotel._id} value={hotel._id}>
                    {hotel.name}
                  </option>
                );
              })}
            </>
          </select>
        </div>
        <div className="selectContainer">
          <button className="btn btn-primary rounded w-100 p-2" onClick={handleCreateHotelClick}>
            Create Hotel
          </button>
        </div>
        <div className="searchContainer">
          <input type="text" placeholder="Search..." />
          <button>🔍</button>
        </div>
      </div>

      {/* Modal */}
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
                  <div className='loginBox'>
                    <form onSubmit={handleSubmit}>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Hotel Name"
                        required
                      />
                      <input
                        type="email"
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
                      <button type="submit">
                        {!loading ? (
                          <span className='text-lg font-bold font-inter text-darkText'>
                            submit
                          </span>
                        ) : (
                          <img
                            className='mx-auto'
                            src={loadingGif}
                            width={33}
                            height={33}
                            alt="Loading"
                          />
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
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SearchInput;
