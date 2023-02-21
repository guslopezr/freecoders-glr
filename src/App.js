//import logo from './logo.svg';
import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
//import Home from "./view/Home";
import CrearPerfil from "./views/CrearPerfil";
import CrearPropuesta from "./views/CrearPropuesta"
//import PrepararPropuesta from "./view/PrepararPropuesta";
//import AbonarPropuesta from "./view/AbonarPropuesta";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>

        {/*         <Route path="/" element={<Home />} />
         */}

        <Route path="/crearperfil" element={<CrearPerfil />} />
        <Route path="/crearpropuesta" element={<CrearPropuesta />} />

        {/*        <Route path="/prepararpropuesta" element={<PrepararPropuesta />} />
        <Route path="/abonarpropuesta" element={<AbonarPropuesta />} />
 */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
