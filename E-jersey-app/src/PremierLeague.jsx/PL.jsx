import { Routes, Route } from "react-router-dom";
import ManUtd from "./ManUtd";
import Arsenal from "./Arsenal";
import ManCity from "./ManCity";
import Chelsea from "./Chelsea";
import LiverPool from "./LiverPool";
import Tottenham from"./Tottenham";

function PL() {
  return (
    <Routes>
      <Route path="/ManUtd" element={<ManUtd />} />
      <Route path="/Arsenal" element={<Arsenal/>}/>
      <Route path="/ManCity" element={<ManCity/>}/>
      <Route path="/Chelsea" element={<Chelsea/>}/>
      <Route path="LiverPool" element={<LiverPool/>}/>
      <Route path="Tottenham" element={<Tottenham/>}/>
    </Routes>
  );
}

export default PL;
