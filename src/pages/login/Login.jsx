import React, { useState } from 'react'
import { commonGetJson, commonPostJson } from '../../shared/utils/api-helpers'
import { useNavigate } from 'react-router-dom'
import Spinner from '../../shared/components/Spinner'
import Loader from '../../shared/components/Loader'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLoggingIn, setIsLoggingIn] = useState(false)

  const navigate = useNavigate()

  function login() {
    setIsLoggingIn(true)
    commonGetJson('/login', { username: username, password: password })
      .then(x => {

        setIsLoggingIn(false)

        console.log({
          Response: x
        })
        if (x.status == true) {
          // navigate user to notes page
          // store token in local storage
          localStorage.setItem('token', x.token)
          navigate('/notes')
        } else {
          // clear all controls
          localStorage.clear();
          alert("Login failed!")
        }
      })
  }

  return (
    <div>
      <h1>Login</h1>
      <input value={username} onChange={e => setUsername(e.target.value)} placeholder='Username' />
      <br />
      <br />
      <input value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' />
      <br />
      <br />
      {
        isLoggingIn
          ? <Loader />
          : <button onClick={login}>Login</button>
      }
    </div>
  )
}
