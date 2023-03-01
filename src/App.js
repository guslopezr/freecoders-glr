import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import CrearPerfil from "./views/CrearPerfil";
import PerfilFreecoder from "./views/PerfilFreecoder";
import ContactarFreecoder from "./views/ContactarFreecoder";
import CrearPropuesta from "./views/CrearPropuesta";
import AbonarPropuesta from "./views/AbonarPropuesta";
import ConfirmarOrden from "./views/ConfirmarOrden";
import Seguimiento from "./views/Seguimiento";
import EnvioPropuesta from "./views/EnvioPropuesta";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/crearperfil" element={<CrearPerfil />} />
        <Route path="/perfilfreecoder" element={<PerfilFreecoder />} />
        <Route path="/contactarfreecoder" element={<ContactarFreecoder />} />
        <Route path="/crearpropuesta" element={<CrearPropuesta />} />
        <Route path="/abonarpropuesta" element={<AbonarPropuesta />} />
        <Route path="/confirmarorden" element={<ConfirmarOrden />} />
        <Route path="/seguimiento" element={<Seguimiento />} />
        <Route path="/enviopropuesta" element={ <EnvioPropuesta />} />
        
      </Routes>
    </BrowserRouter>
  );
}
export default App;
