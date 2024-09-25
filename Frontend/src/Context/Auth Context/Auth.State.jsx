import React, { useEffect, useState } from 'react';
import AuthContext from './Auth.context';
import toast from 'react-hot-toast';
const AuthState = (props) => {
    const { children, setAuth } = props;
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const host = import.meta.env.VITE_HOST;

    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    const getUsers = async () => {
        try {
            setLoading(true)
            const res = await fetch(`${host}/api/auth/getusers`, {
                method: "GET",
                headers: {
                    "auth-token": localStorage.getItem("token")
                }
            })
            const data = await res.json();

            if (data.message) {
                toast.error(data.message);
                return false;
            }

            if (data.success) {
                setUsers(data.users);
            }

        } catch (error) {
            console.log(error);
            return false;
        } finally {
            setLoading(false);
        }
    }

    const login = async (email, password) => {
        try {
            setLoading(true)
            const res = await fetch(`${host}/api/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            })
            const data = await res.json();

            if (data.message) {
                toast.error(data.message);
                return false;
            }

            if (data.success) {
                toast.success(data.success);
                setAuth(data.token);
                localStorage.setItem("user", JSON.stringify(data.user));
                localStorage.setItem("token", data.token);
                return true;
            }

        } catch (error) {
            console.log(error);
            return false;
        } finally {
            setLoading(false);
        }
    }

    const registration = async (name, email, contactInfo, role, password) => {
        try {
            setLoading(true)
            const res = await fetch(`${host}/api/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, email, contactInfo, role, password })
            })
            const data = await res.json();

            if (data.message) {
                toast.error(data.message);
                return false;
            }

            if (data.success) {
                toast.success(data.success);
                return true;
            }

        } catch (error) {
            console.log(error);
            return false;
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (!token && user?.role !== "admin") {
            return;
        }
        getUsers();
    }, [token]);

    return (
        <AuthContext.Provider value={{
            loading,
            users,
            login,
            registration
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthState