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
    function gotoProfile(){
        navigate('/profile')
    }
    return (
        <div className='app-header'>
            <div className="app-name"></div>
            <div className="user-info">
                <span>
                    Welcome,
                </span>
                <span  onClick={gotoProfile}>
                    {userName}
                </span>
                <br />
                <span onClick={logout}>Logout</span>
            </div>
        </div>
    )
}
