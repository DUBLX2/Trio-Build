import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Events from './pages/Events';
import Shop from './pages/Shop';
import Community from './pages/Community';
import Contact from './pages/Contact';
import Socials from './pages/Socials';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/community" element={<Community />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/socials" element={<Socials />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
