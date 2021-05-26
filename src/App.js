import React from 'react';

import { Cars } from './features/car/carSlice';
import './App.css';
import Home from "./components/Home";
import Header from "./components/Header";
function App() {
  return (
    <div className="App">
     <Header/>
     <Home/>
     
    </div>
  );
}

export default App;
