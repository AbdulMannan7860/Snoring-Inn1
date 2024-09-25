import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BookingContext from "../../Context/Booking Context/Booking.context.js";
import HotelContext from "../../Context/Hotel Context/Hotel.context.js";

export default function Book() {
  const user = JSON.parse(localStorage.getItem("user"));
  const context = useContext(BookingContext);
  const hotelContext = useContext(HotelContext);
  const { hotels } = hotelContext;
  const { createBooking } = context;

  const [formData, setFormData] = useState({
    hotelId: "",
    checkIn: "",
    checkOut: "",
    adults: "",
    children: ""
  });

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(hotels);
  }, [hotels]);

  const nav = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      nav("/login");
      return;
    }

    const { hotelId, checkIn, checkOut, adults, children } = formData;
    if (!hotelId || !checkIn || !checkOut || !adults || !children) {
      alert("Please fill all fields before submitting!");
      return;
    }
    await createBooking(hotelId, checkIn, checkOut, adults, children);

    setFormData({
      hotelId: "",
      checkIn: "",
      checkOut: "",
      adults: "",
      children: ""
    });
  };

  return (
    <>
      <div
        className="container-fluid booking pb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container">
          <div className="bg-white shadow" style={{ padding: "35px" }}>
            <div className="row g-2">
              <div className="col-md-12">
                <form className="row g-2" onSubmit={handleSubmit}>
                  <div className="col-md-2">
                    <label htmlFor="hotelId">Select Hotel</label>
                    <select
                      className="form-select"
                      onChange={handleChange}
                      value={formData.hotelId}
                      name="hotelId"
                    >
                      <option value="">Select Hotel</option>
                      {data.map((hotel) => (
                        <option key={hotel._id} value={hotel._id}>
                          {hotel.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-2">
                    <label htmlFor="checkIn">Check In</label>
                    <input
                      type="date"
                      onChange={handleChange}
                      value={formData.checkIn}
                      className="form-control"
                      name="checkIn"
                    />
                  </div>
                  <div className="col-md-2">
                    <label htmlFor="checkOut">Check Out</label>
                    <input
                      type="date"
                      onChange={handleChange}
                      value={formData.checkOut}
                      className="form-control"
                      name="checkOut"
                    />
                  </div>
                  <div className="col-md-2">
                    <label htmlFor="adults">Number Of Adults</label>
                    <select
                      className="form-select"
                      onChange={handleChange}
                      value={formData.adults}
                      name="adults"
                    >
                      <option value="">Adults</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>
                  <div className="col-md-2">
                    <label htmlFor="children">Number Of Children</label>
                    <select
                      className="form-select"
                      onChange={handleChange}
                      value={formData.children}
                      name="children"
                    >
                      <option value="">Children</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </div>
                  <div className="col-md-2 pt-4">
                    <button type="submit" className="btn btn-primary w-100">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
