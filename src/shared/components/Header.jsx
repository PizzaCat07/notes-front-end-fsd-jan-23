import React, { useEffect, useState } from 'react'
import jwtDecode from 'jwt-decode'
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const [userName, setUsename] = useState('')
    const navigate = useNavigate()
    useEffect(() => {
        let token = localStorage.getItem('token');
        if (token) {
            let decoded = jwtDecode(token);
            setUsename(decoded.username)
        }
    }, [])

    function logout() {
        localStorage.clear();
        navigate('/login')
    }
    return (
        <div className='app-header'>
            <div className="app-name"></div>
            <div className="user-info">Welcome, {userName}<br /><span onClick={logout}>Logout</span></div>
        </div>
    )
}
