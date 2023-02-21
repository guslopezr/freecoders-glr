import React from "react";
import { NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import "../assets/css/Navbar.css"
//import pokelocator from "../assets/img/pokelocator.png"

export default function NavBar() {

    const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);

    return (

      <Navbar className="form-navbar" bg="" variant="">
        <div className="form-cont-img-nav">

{/*           <img className="form-img-nav" src={pokelocator} alt="" />
 */}
        </div>
          <Nav className=" justify-content-end container me-auto">
              <NavLink className={setActiveClass} to="/">
                  Principal
              </NavLink>
              <NavLink className={setActiveClass} to="/crearperfil">
                  Crear Perfil
              </NavLink>
              <NavLink className={setActiveClass} to="/crearpropuesta">
                  Crear Propuesta
              </NavLink>

            </Nav>
      </Navbar>

    );
}