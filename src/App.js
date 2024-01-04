import React from 'react';
import './App.css';
import Home from './pages/home';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import About from './pages/AboutUs';
import Contact from './pages/ContactUs';

function App() {
  return (
   <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/cont" element={<Contact/>}></Route>
        </Routes>
      </BrowserRouter>
   </div>
  );
}

export default App;
