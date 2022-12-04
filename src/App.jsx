import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './styles/App.css'
import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'

import Navbar from './components/navbar'

function App() {
  <Routes>
<Routes />
<Routes />
  </Routes>
  const [count, setCount] = useState(0)

  return (
   <>
      <div className='app'>
        <Navbar />
        
        </div>
    {/* <nav class="navbar bg-light">
    <div class="container-fluid">
    <a class="navbar-brand">Plant.io</a>
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
    </div>
    </nav> */}
   
     <div className='wrapper'>

    </div>


    
   </>


  )
}

export default App
