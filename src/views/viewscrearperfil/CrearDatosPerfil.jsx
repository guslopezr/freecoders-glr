import * as React from "react";
import { useState} from "react";
import { Form, Button } from "react-bootstrap";
import RangeSlider from 'react-bootstrap-range-slider';
//import '../assets/css/estilocrearperfil.css';



export default function CrearDatosPerfil() {
  const [rate, setRate] = useState(10000);

  const handleRateChange = (event) => {
    setRate(event.target.value);
  };

  return (
    <Form>
<div>
  <h2>Ingresa tus datos para crear tu perfil</h2>
</div>

      <Form.Group controlId="formName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Agregar nombre" />
      </Form.Group>

      <Form.Group controlId="formLastName">
        <Form.Label>Apellido</Form.Label>
        <Form.Control type="text" placeholder="Agregar apellido" />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Dirección de correo electrónico</Form.Label>
        <Form.Control type="email" placeholder="Ingresar correo" />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Ingresar contraseña" />
      </Form.Group>

      <Form.Group controlId="formConfirmPassword">
        <Form.Label>Confirmar Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Confirmar contraseña" />
      </Form.Group>

      <Form.Group controlId="formRate">
        <Form.Label>Valor por hora: ${rate}</Form.Label>
        <RangeSlider
          value={rate}
          min={10000}
          max={500000}
          step={1}
          onChange={handleRateChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="consolas-font" >
        Guardar datos
      </Button>
    </Form>
  );
}



/* 
import * as React from "react";
//import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import { Form, Button } from "react-bootstrap";

//import Button from "react-bootstrap/Button";
//import Backbutton from "../components/Backbutton";

//import "../assets/css/CardPokemon.css";

export default function CrearDatosPerfil() {
  return (

    <Form>
      <Form.Group controlId="formName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Enter name" />
      </Form.Group>

      <Form.Group controlId="formLastName">
        <Form.Label>Apellido</Form.Label>
        <Form.Control type="text" placeholder="Enter last name" />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Dirección de correo electrónico</Form.Label>
        <Form.Control type="email" placeholder="Ingresar correo" />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Ingresar contraseña" />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Confirmar Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Confirmar contraseña" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Registrar
      </Button>
    </Form>
  );
}
 */