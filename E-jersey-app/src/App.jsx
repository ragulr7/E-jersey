import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Collections from './Collections';
import About from './About';
import PL from './PremierLeague/PL'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collections />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<PL />} /> 
      </Routes>
    </Router>
  );
}

export default App;
