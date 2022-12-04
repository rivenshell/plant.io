import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './styles/App.css'
import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'

import Navbar from './components/navbar'
import Footer from './components/footer'

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
        <img src='https://images.unsplash.com/photo-1611843467160-25afb8df1074?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='cover' />
        
        </div>
        <div className='footer'>
          <Footer />
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
