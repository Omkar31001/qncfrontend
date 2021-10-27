import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import DashBoard from './pages/DashBoard';
import NavBar from './components/NavBar';

function App() {
  return <div className ="h-screen bg-brandWhite-back">
    <NavBar/>
    <DashBoard/>
  </div>;
}

export default App;
