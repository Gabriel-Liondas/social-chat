import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import Home from "./pages/Home/Home"
import UserCreation from './pages/UserCreation/UserCreation';

function App() {
  return (
    <Router>
      <div className="App">
          {/* <Home className="Home"/> */}
          <UserCreation/>
      </div>
    </Router>
  );
}

export default App;
