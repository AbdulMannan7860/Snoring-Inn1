import React, { useEffect, useState } from 'react'
import BookingContext from './Booking.context.js'
import toast from 'react-hot-toast';

const BookingState = (props) => {
    const { children } = props;
    const [booking, setBooking] = useState([]);
    const [loading, setLoading] = useState(false);
    const host = import.meta.env.VITE_HOST;
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));

    const getBooking = async () => {
        try {
            setLoading(true);
            const res = await fetch(`${host}/api/booking/getbookings`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": token,
                },
            });

            const data = await res.json();
            

            if (data.success) {
                setBooking(data.bookings);
            }

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    const createBooking = async (hotelId, checkIn, checkOut, adults, children) => {
        try {
            setLoading(true);
            const res = await fetch(`${host}/api/booking/createbooking`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": token,
                },
                body: JSON.stringify({ hotelId, checkIn, checkOut, adults, children }),
            });

            const data = await res.json();
            
            if (data.success) {
                setBooking([...booking, data.booking]);
                toast.success("Booking is under review");
            }

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    const issueBooking = async (id, roomNumber, ticketNumber) => {
        try {
            setLoading(true);
            const res = await fetch(`${host}/api/booking/issuebooking/${id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": token,
                },
                body: JSON.stringify({ roomNumber, ticketNumber }),
            });

            const data = await res.json();

            if (data.message) {
                toast.error(data.message);
                return;
            }

            if (data.success) {
                toast.success(data.success);
                setBooking((prevBooking) =>
                    prevBooking.map((book) =>
                        book._id === id ? data.booking : book
                    )
                );
            }

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    const deleteBooking = async (id) => {
        try {
            setLoading(true);
            const res = await fetch(`${host}/api/booking/deletebooking/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": token,
                },
            });

            const data = await res.json();

            if (data.message) {
                toast.error(data.message);
                return;
            }

            if (data.success) {
                toast.success(data.success);
                setBooking(booking.filter((booking) => booking._id !== id));
            }

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (!token && user?.role !== "admin") {
            return;
        }
        getBooking();
    }, [token]);

    return (
        <BookingContext.Provider value={{
            loading,
            booking,
            createBooking,
            issueBooking,
            deleteBooking
        }}>
            {children}
        </BookingContext.Provider>
    )
}

export default BookingState