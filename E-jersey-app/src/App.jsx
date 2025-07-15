import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Collections from './Collections';
import About from './About';
import PL from './PremierLeague.jsx/PL';
import Cart from './Cart';
import { CartProvider } from './CartContext'; 

function App() {
  return (
    <CartProvider> 
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collections />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<PL />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
