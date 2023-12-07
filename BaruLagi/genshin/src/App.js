import React from "react";

import Best4Star from "./components/Best4Star";
import Best5Star from "./components/Best5Star";
import Intro from "./components/Intro";
import NavigationBar from "./components/NavigationBar";

import './style/landingPage.css'

function App() {
  return (
    <div className="myBG">
      <div>
        <NavigationBar />
        <Intro />
      </div>

      <div className="best5star">
        <Best5Star />
      </div>
      
      <br />

      <div className="best4star">
        <Best4Star />
      </div>
    </div>
  );
}

export default App;
