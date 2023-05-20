import { Routes, Route } from "react-router-dom"

import AjoHarjoittelu from "./AjoHarjoittelu"
import Home from "./Home"
import Kurssit from "./Kurssit"
import Tapahtumat from "./Tapahtumat"

const Kauppa = () => {
  window.location.replace("http://www.moottoripyora.org/kauppa");

  return null;
}

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Ajoharjoittelu" element={<AjoHarjoittelu />} />
        <Route path="/Kurssit" element={<Kurssit />} />
        <Route path="/Tapahtumat" element={<Tapahtumat />} />
        <Route path="/Kauppa" element={<Kauppa />} />
      </Routes>
    </div>
  )
}

export default AppRoutes