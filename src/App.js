import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';

function App() {
  return (
    <div>
      <Router>


      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
      </Routes>

      <Home />
    </Router>
    </div>
  );
}

export default App;
