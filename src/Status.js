import './App.css'
import React, { useContext, useState, useEffect } from 'react'
import { AccountContext } from './Account'
import Login from './Login'
import Content from './Content'

function Status() {

  const [status, setStatus] = useState(false)
  const { getSession, logout } = useContext(AccountContext)

  useEffect(() => {
    getSession()
      .then(session => {
        console.log("session: ", session)
        setStatus(true)
      })
  }, [])

  const logoutStatus = () => {
    logout()
    setStatus(false)
  }

  return <div>{status ? <div><button className='inputLogout' onClick={logoutStatus}>Quitter</button><Content/></div> : <Login/>}</div>

}

export default Status;

