import './App.css'
import Row from "./Row"
import { useEffect, useState } from 'react'
import $ from "jquery"

function App() {

  useEffect(() => {
    init()
    $("#popup").fadeOut(0)
  }, [])

  const [users, setUsers] = useState([])

  let id = ""

  const init = () => {
    fetch('https://xaluarb41m.execute-api.ca-central-1.amazonaws.com/Prod/launcher')
    .then((response) => response.json())
    .then((data) => setUsers(data.Items))
  }

  const showpopup = (user) => {
    id = user
    $("#popup").fadeIn(200)
    $("#text-prompt").html(`Supprimer le casque ${id}?`)
  }

  const hidepopup = () => {
    $("#popup").fadeOut(200)
  }

  const deleteUser = () => {
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    }
    
    fetch(`https://xaluarb41m.execute-api.ca-central-1.amazonaws.com/Prod/launcher/${id}`, requestOptions)
    $("#"+id).css("display", "none")
    hidepopup()
}


  return (
    <div className="App">
      <div className='PopUpContainer' id="popup">
        <div id="text-prompt" className='prompt-text'>Supprimer le casque?</div>
        <div>
          <button onClick={() => deleteUser()} className='prompt-btn'>Ok</button>
          <button onClick={() => hidepopup()} className='prompt-btn'>Annuler</button>
        </div>
      </div>
      <div className='title'>Gestionnaire de licence</div>
      <div className="main-container">
        {users && users.map(user => {
          return(
          <Row key={user.id.toString()} data={user} showpopup={showpopup} />)
        })}
      </div>
    </div>
  )
}

export default App
