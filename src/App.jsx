import React, { useState } from 'react'
import Login from './Components/Login'
import Chart from './Components/Chart'

const App = () => {

  const[login, setLogin] = useState(false)

  

  return (
    <div className="app" >
      {login ? <Chart/> : <Login setLogin={setLogin}/>}
    </div>
  )
}

export default App
