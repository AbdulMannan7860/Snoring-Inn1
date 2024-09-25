import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import loadingGif from '../../assets/loading.gif';

import AuthContext from '../../Context/Auth Context/Auth.context';

import './LoginForm.css';

function LoginForm() {
  const context = useContext(AuthContext);
  const { login, loading } = context;

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const { email, password } = formData;

    if (!email || !password) {
      return;
    }

    const boolean = await login(email, password);

    if (boolean?.bool) {
      if (boolean.user?.role === 'admin') {
        navigate('/portal');
      } else {
        navigate('/');
      }
    }
  };

  return (
    <div className="loginContainer">
      <div className='loginBox'>
        <h1>LOGIN PAGE</h1>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="Username"
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
        <p>Dont have an account? <Link to="/registration">Register here</Link></p>
      </div>
    </div>
  );
}

export default LoginForm;
