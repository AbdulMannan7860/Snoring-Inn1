import React, { useEffect } from 'react';
import RegistrationForm from '../../components/Admin/RegistrationForm.jsx';
import { useNavigate } from 'react-router-dom';

function RegistrationPage() {
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
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
    return (
        <div className="RegistrationPage" style={style}>
            <RegistrationForm />
        </div>
    );
}

export default RegistrationPage;
