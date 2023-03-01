import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import CrearPerfil from "./views/CrearPerfil";
import CrearPropuesta from "./views/CrearPropuesta";
import AbonarPropuesta from "./views/AbonarPropuesta";
import ConfirmRequest from "./views/ConfirmRequest";
import Seguimiento from "./views/Seguimiento";



function App() {
  return (
    <BrowserRouter >
      <NavBar />
      <Routes>
        <Route path="/crearperfil" element={<CrearPerfil />} />
        <Route path="/crearpropuesta" element={<CrearPropuesta />} />
        <Route path="/abonarpropuesta" element={<AbonarPropuesta />} />
        <Route path="/confirmrequest" element={<ConfirmRequest />} />
        <Route path="/seguimiento" element={<Seguimiento />} />
        
      </Routes>
    </BrowserRouter>
  );
}
export default App;
