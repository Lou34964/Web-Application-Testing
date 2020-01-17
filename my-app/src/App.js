import React, { useState } from "react";
import "./App.css";

import Display from "./components/Display";
import Dashboard from "./components/Dashboard";

function App() {
  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);
  const [hit, setHit] = useState(0);
  

 

  return (
    <div className="App-Container">      
        <Display strikes={strikes} balls={balls} hit={hit}/>
        <Dashboard setStrikes={setStrikes} setBalls={setBalls} setHit={setHit} strikes={strikes} balls={balls} hit={hit} />      
    </div>
  );
}

export default App;
