import { Routes, Route } from "react-router-dom";
import ManUtd from "./ManUtd";

function PL() {
  return (
    <Routes>
      <Route path="/ManUtd" element={<ManUtd />} />
    </Routes>
  );
}

export default PL;
