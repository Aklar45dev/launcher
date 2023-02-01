import './App.css'
import React, { useState, useContext } from 'react'
import { AccountContext } from './Account'

function Login() {

    //jp.racing02@hotmail.com

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")

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
          setMessage("Email ou mot de passe invalide")
        })
        
    }
  
  return (
    <div className='wrapper-log'>
      <form onSubmit={onSubmit} className="logcontainer">
        <div className='row-login'>
          <label htmlFor='email'>Email:</label>
          <input
              className='inputLog'
              value={email}
              onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className='row-login'>
          <label htmlFor='password'>Mot de passe:</label>
          <input
              className='inputLog'
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
          />
        </div>
        <div className='message'>{message}</div>
        <button className='inputSubmit' type="submit">Connexion</button>
      </form>
    </div>
  )
}

export default Login
