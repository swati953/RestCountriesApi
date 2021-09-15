import "./App.css";
import Continent from "./component/Continent";
import Navbar from "./component/Navbar";

import React, { useState } from "react";
import { Route, Router, Switch } from "react-router";
import Deailcountry from "./component/Deailcountry";
function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };

  return (
    <div>
      <Navbar
        title="soemthing"
        aboutText="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />
         
      <Continent mode={mode} />

    </div>
  );
}

export default App;
