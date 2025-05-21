import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './LoginOne.css'  

function Login() {
  const [loginData, setLoginData] = useState({ email: '', password: '' })
  const [text, setText] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    const signData = JSON.parse(localStorage.getItem('signupData')) || []
    const matchedData = signData.find(
      (f) => f.email === loginData.email && f.password === loginData.password
    )

    if (matchedData) {
      localStorage.setItem('loginMatchedUser', JSON.stringify(matchedData))
      navigate(`/${matchedData.role}dash`)
    } else {
      setText('Invalid credentials. Please enter valid details.')
    }
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2 className="login-title">Login</h2>

        <input
          type="email"
          placeholder="Enter email"
          name="email"
          required
          className="login-input"
          onChange={(e) =>
            setLoginData({ ...loginData, email: e.target.value })
          }
        />
        <input
          type="password"
          placeholder="Enter password"
          name="password"
          required
          className="login-input"
          onChange={(e) =>
            setLoginData({ ...loginData, password: e.target.value })
          }
        />

        {text && <p className="login-error">{text}</p>}

        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
