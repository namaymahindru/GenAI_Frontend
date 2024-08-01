import React from 'react'

import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Home from './pages/Home.jsx';
import Profile from './pages/Profile.jsx';
import SignIn from './pages/SignIn.jsx';
import About from './pages/About.jsx';
import Header from './components/Header.jsx';
import ImportGuidance from './pages/ImportGuidance.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ImportGuidance" element={<ImportGuidance />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sign-in" element={<SignIn />} />
      
      </Routes>
    </BrowserRouter>
  );
     
}
