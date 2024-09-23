import React, { useEffect, useState } from 'react';
import HotelContext from './Hotel.context';
import toast from 'react-hot-toast';

const HotelState = (props) => {
    const [loading, setLoading] = useState(false);
    const [hotels, setHotels] = useState([]);
    const host = import.meta.env.VITE_HOST;
    const token = localStorage.getItem("token");

    const getHotels = async () => {
        try {
            setLoading(true);
            const res = await fetch(`${host}/api/hotel/hotels`, {
                method: "GET",
                headers: {
                    "auth-token": token,
                },
            });

            const data = await res.json();

            if (data.message) {
                toast.error(data.message);
                return;
            }
            if (data.success) {
                setHotels(data.hotels);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const createHotel = async (name, city, address, description) => {
        try {
            setLoading(true);

            const res = await fetch(`${host}/api/hotel/createhotel`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": token,
                },
                body: JSON.stringify({ name, city, address, description }),
            });

            const data = await res.json();

            if (data.message) {
                toast.error(data.message);
                return;
            }

            if (data.success) {
                toast.success(data.success);
                setHotels([...hotels, data.hotel]);
            }

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const editHotel = async (id, name, city, address, description) => {
        try {
            setLoading(true);

            const res = await fetch(`${host}/api/hotel/edithotel/${id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": token,
                },
                body: JSON.stringify({ name, city, address, description }),
            });

            const data = await res.json();

            if (data.message) {
                toast.error(data.message);
                return;
            }

            if (data.success) {
                toast.success(data.success);
                setHotels((prevHotels) =>
                    prevHotels.map((hotel) =>
                        hotel._id === id ? data.hotel : hotel
                    )
                );
            }

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const deleteHotel = async (id) => {
        try {
            setLoading(true);

            const res = await fetch(`${host}/api/hotel/deletehotel/${id}`, {
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
                setHotels((prevHotels) =>
                    prevHotels.filter((hotel) => hotel._id !== id)
                );
            }

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!token) {
            return;
        }
        getHotels();
    }, [token]);
    return (
        <HotelContext.Provider
            value={{
                loading,
                hotels,
                createHotel,
                editHotel,
                deleteHotel
            }}
        >
            {props.children}
        </HotelContext.Provider>
    );
};

export default HotelState;