import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  <Routes>
    <Routes />
    <Routes />
  </Routes>;
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="app">
        <Navbar />
        <img
          src="https://images.unsplash.com/photo-1611843467160-25afb8df1074?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="cover"
        />
        <div className="container">
          <h1>Global Warming crisis Calculator</h1>
          <p>
            Climate change is often cast as a prediction made by complicated
            computer models. But the scientific basis for climate change is much
            broader, and models are actually only one part of it (and, for what
            it’s worth, they’re surprisingly accurate). 
            
            <br />For more than a century,
            scientists have understood the basic physics behind why greenhouse
            gases like carbon dioxide cause warming. These gases make up just a
            small fraction of the atmosphere but exert outsized control on
            Earth’s climate by trapping some of the planet’s heat before it
            escapes into space. This greenhouse effect is important: It’s why a
            planet so far from the sun has liquid water and life! However,
            during the Industrial Revolution, people started burning coal and
            other fossil fuels to power factories, smelters and steam engines,
            which added more greenhouse gases to the atmosphere. Ever since,
            human activities have been heating the planet.
          </p>
        </div>
      </div>
      <div className="footer">
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

      <div className="wrapper"></div>
    </>
  );
}

export default App;
