import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Collections from './Collections';
import About from './About';
import Cart from './Cart';
import PL from './PremierLeague.jsx/PL';
import LL from './Laliaga.jsx/LL'; 
import FF from './Fifa.jsx/FF';
import RetroJersey from './Retro.jsx/RetroJersey';
import Customize from './Customize';
import Mix from './Mix';
import { CartProvider } from './CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collections />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/llcollection/*" element={<LL />} /> 
          <Route path="/*" element={<PL />} />
          <Route path="ff" element={<FF/>}/>
          <Route path="retroJersey" element={<RetroJersey/>}/>
          <Route path="/customize" element={<Customize/>}/>
          <Route path="/mix" element={<Mix/>}/>
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
