import './App.css';
import { Best5Star } from './components/Best5Star';
import { Best4Star } from './components/Best4Star';
import { Intro } from './components/Intro';
import { NavigationBar } from './components/NavigationBar';
import "./style/landingPage.css";
import React from 'react';

function App() {
  return (
    <div>
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>

      <div className="trending">
        <Best5Star />
      </div>

      <div className="best">
        <Best4Star />
      </div>
    </div>
  )
}

export default App();