import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProtectedRoute({ children }) {
    const navigate = useNavigate()
    useEffect(() => {
        if (localStorage.getItem('token')) {
            setIsAuthenticated(true)
        }
        else {
            setIsAuthenticated(false)
            localStorage.clear()
            navigate('/login')
        }
    }, [])
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    return (
        <>
            {
                isAuthenticated ? children : <></>
            }
        </>
    )
}
