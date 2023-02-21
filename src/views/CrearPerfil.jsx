import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import CrearDatosPerfil from './viewscrearperfil/CrearDatosPerfil';
import CrearPortafolio from './viewscrearperfil/CrearPortafolio';
import CrearOfertaValor from './viewscrearperfil/CrearOfertaValor';
import CrearRepo from './viewscrearperfil/CrearRepo';
import AddSkills from './viewscrearperfil/AddSkills';

export default function CrearPerfil() {
  const [isSaving, setIsSaving] = useState(false);

  const handleSaveClick = () => {
    setIsSaving(true);
    // Save all changes here
    setTimeout(() => {
      setIsSaving(false);
    }, 2000); // simulate save operation with a 2 second delay
  };

  return (
    <div>
      <div>{<CrearDatosPerfil />}</div>
      <div>{<AddSkills />}</div>
      <div>{<CrearPortafolio />}</div>
      <div>{<CrearRepo />}</div>
      <div>{<CrearOfertaValor />}</div>
      <div className="text-center mt-4">
        <Button onClick={handleSaveClick} disabled={isSaving}>
          {isSaving ? 'Saving...' : 'Save Changes'}
        </Button>
      </div>
    </div>
  );
}