import { Routes, Route } from "react-router-dom";
import LLCollection from "./LLCollection";
import RealMadrid from "./RealMadrid";
import Barcelona from "./Barcelona";
import Athletic from "./Athletic";
import Atletico from "./Atletico";
 
function LL() {
  return (
    <Routes>
      <Route path="/" element={<LLCollection />} />
      <Route path="/realmadrid" element={<RealMadrid />} />
      <Route path="barcelona" element={<Barcelona/>}/>
      <Route path="athletic" element={<Athletic/>}/>
      <Route path="atletico" element={<Atletico/>}/>
    </Routes>
  );
}

export default LL;
