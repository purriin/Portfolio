import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages';
import About from './pages/about';
import Contact from './pages/contact';
import Experiences from './pages/experiences';
import Skills from './pages/skills';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' exact component={Home} element={<Home />}/>
          <Route path='/about' component={About} element={<About />}/>
          <Route path='/contact' component={Contact} element={<Contact />}/>
          <Route path='/experiences' component={Experiences} element={<Experiences />}/>
          <Route path='/skills' component={Skills} element={<Skills />}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
