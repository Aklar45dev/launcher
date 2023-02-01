import './App.css'
import React, { useState, useContext } from 'react'
import { AccountContext } from './Account'

function Login() {

    //jp.racing02@hotmail.com

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { authenticate } = useContext(AccountContext)

    const onSubmit = (event) => {
        event.preventDefault();

        authenticate(email, password)
        .then(data => {
          console.log("Logged in!", data)
          window.location.reload(true)
        })
        .catch(err => {
          console.error("Failed to login", err)
        })
        
    }
  
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor='email'>Email</label>
        <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
        />
        <label htmlFor='password'>Password</label>
        <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
