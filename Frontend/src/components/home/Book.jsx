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
    name: "",
    email: "",
    contactInfo: "",
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

    const { hotelId, checkIn, checkOut, adults, children, name, email, contactInfo } = formData;
    if (!hotelId || !checkIn || !checkOut || !adults || !children || !name || !email || !contactInfo) {
      alert("Please fill all fields before submitting!");
      return;
    }

    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);

    if (checkInDate > checkOutDate) {
      alert("Check-in date cannot be greater than check-out date!");
      return;
    }

    if (adults < 1 || children < 0) {
      alert("Invalid number of adults or children!");
      return;
    }

    if (isNaN(checkInDate.getTime()) || isNaN(checkOutDate.getTime())) {
      alert("Invalid check-in or check-out date!");
      return;
    }

    await createBooking(hotelId, checkIn, checkOut, adults, children, name, email, contactInfo);

    setFormData({
      name: "",
      email: "",
      contactInfo: "",
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
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      onChange={handleChange}
                      value={formData.name}
                      className="form-control"
                      placeholder="Enter Name"
                      required
                      id="name"
                      name="name"
                    />
                  </div>
                  <div className="col-md-2">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      onChange={handleChange}
                      value={formData.email}
                      className="form-control"
                      placeholder="Enter Email"
                      required
                      id="email"
                      name="email"
                    />
                  </div>
                  <div className="col-md-2">
                    <label htmlFor="contactInfo">Contact Info</label>
                    <input
                      type="text"
                      onChange={handleChange}
                      value={formData.contactInfo}
                      className="form-control"
                      placeholder="Enter Contact Info"
                      required
                      id="contactInfo"
                      name="contactInfo"
                    />
                  </div>
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
        </div >
      </div >
    </>
  );
}
