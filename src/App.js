import './App.css'
import Row from "./Row"
import { useEffect, useState } from 'react'

function App() {

  useEffect(() => {
    init()
  }, [])

  const [users, setUsers] = useState([])

  const init = () => {
    fetch('https://xaluarb41m.execute-api.ca-central-1.amazonaws.com/Prod/launcher')
    .then((response) => response.json())
    .then((data) => setUsers(data.Items))
  }


  return (
    <div className="App">
      <div className='title'>Launcher Manager</div>
      <div className="main-container">
        {users && users.map(user => {
          return(
          <Row key={user.id.toString()} data={user} />)
        })}
      </div>
    </div>
  )
}

export default App
