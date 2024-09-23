import React, { useState } from 'react';
import AuthContext from './Auth.context';
import toast from 'react-hot-toast';
const AuthState = (props) => {
    const { children, setAuth } = props;
    const [loading, setLoading] = useState(false);
    const host = import.meta.env.VITE_HOST;

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

    return (
        <AuthContext.Provider value={{
            loading,
            login
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthState