import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';


import SideBarMenu from "./components/SideBarMenu/SideBarMenu"


function App() {
  return (
    <Router>
      <div className="App">
          <SideBarMenu />
      </div>
    </Router>
  );
}

export default App;
