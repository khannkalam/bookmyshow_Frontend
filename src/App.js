import React from "react";
import "./App.css";
import BsState from "./Context/BsState";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <BsState>
        <Navbar/>
        <Home />
      </BsState>
    </>
  )
}

export default App;
