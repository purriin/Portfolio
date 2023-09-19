import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages';
import About from './pages/about';
import Contact from './pages/contact';
import Experiences from './pages/experiences';
import Skills from './pages/skills';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCo-jYQTLW8Y8DelXbmM378RRG0-LKIgZs",
  authDomain: "purriin.firebaseapp.com",
  projectId: "purriin",
  storageBucket: "purriin.appspot.com",
  messagingSenderId: "449828997607",
  appId: "1:449828997607:web:02206d6a824b5d27195542",
  measurementId: "G-YZK7X406KV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
