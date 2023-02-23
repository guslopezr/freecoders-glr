import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import CrearDatosPerfil from './viewscrearperfil/CrearDatosPerfil';
import CrearPropInicio from './viewscrearpropuesta/CrearPropInicio';
import ImportarDatosCliente from './viewscrearpropuesta/ImportarDatosCliente';
import RedactarPropuesta1 from './viewscrearpropuesta/RedactarPropuesta1';
import RedactarPropuesta2 from './viewscrearpropuesta/RedactarPropuesta2';
import RedactarPropuesta3 from './viewscrearpropuesta/RedactarPropuesta3';


export default function CrearPropuesta() {
  const [isSaving, setIsSaving] = useState(false);

  const handleSaveClick = () => {
    setIsSaving(true);
    // Save all changes here
    setTimeout(() => {
      setIsSaving(false);
    }, 2000); // simulate save operation with a 2 second delay
  };

  return (
    <div className='maincontainer' >
      <div>{<CrearPropInicio />}</div>
      <div>{<ImportarDatosCliente />}</div>
      <div>{<RedactarPropuesta1 />}</div>
      <div>{<RedactarPropuesta2 />}</div>
      <div>{<RedactarPropuesta3 />}</div>

      <div className="text-center mt-4">
        <Button id='button-crearperfil' onClick={handleSaveClick} disabled={isSaving}>
          {isSaving ? 'Saving...' : 'Guardar Cambios'}
        </Button>
      </div>
    </div>
  );
}
