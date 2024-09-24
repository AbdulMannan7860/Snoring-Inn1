import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import loadingGif from '../../assets/loading.gif';

import AuthContext from '../../Context/Auth Context/Auth.context';

import './LoginForm.css';

function RegistrationForm() {
    const context = useContext(AuthContext);
    const { registration, loading } = context;

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contactInfo: "",
        role: "user",
        password: ""
    });

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        const { name, email, contactInfo, password } = formData;

        if (!email || !name || !contactInfo || !password) {
            return;
        }

        const boolean = await registration(name, email, contactInfo, password);

        if (boolean) {
            navigate('/login');
        }
    };

    return (
        <div className="loginContainer">
            <div className='loginBox'>
                <h1>Registration PAGE</h1>
                <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Full Name"
                        required
                    />
                    <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Email"
                        required
                    />
                    <input
                        type="text"
                        value={formData.contactInfo}
                        onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                        placeholder="Contact Number"
                        required
                    />
                    <input
                        type="password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        placeholder="Password"
                        required
                    />
                    <button type="submit">
                        {!loading ? (
                            <span className='text-lg font-bold font-inter text-darkText'>
                                Login
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
                <p>Forgot your password? <a href="/reset-password">Reset it here</a></p>
            </div>
        </div>
    );
}

export default RegistrationForm;
