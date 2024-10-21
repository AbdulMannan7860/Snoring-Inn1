import React, { useEffect } from 'react';
import LoginForm from '../../components/Admin/LoginForm';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const user = JSON.parse(localStorage.getItem('user'));
  const nav = useNavigate();

  useEffect(() => {
    if ((user)) {
      nav('/portal');
    }
  })
  const style = {
    margin: 0,
    padding: 0,
    fontFamily: `'Poppins', sans-serif`,
    background: `linear-gradient(135deg, #fea116, #D8F0F0)`,
    height: '100vh',
  }

  return (
    <div className="loginPage" style={style}>
      <LoginForm />
    </div>
  );
}

export default LoginPage;
