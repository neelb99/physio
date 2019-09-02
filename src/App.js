import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/navbar.js'
import './css/App.css';

function App() {
  return (
    <Router>
        <Navbar />
    </Router>
  );
}

export default App;
