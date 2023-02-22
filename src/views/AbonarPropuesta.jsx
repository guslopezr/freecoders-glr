import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import AbonarPropuesta1 from './viewsabonarpropuesta/AbonarPropuesta1';
import AbonarPropuesta2 from './viewsabonarpropuesta/AbonarPropuesta2';

export default function AbonarPropuesta() {
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
      <div>{<AbonarPropuesta1/>}</div>
      <div>{<AbonarPropuesta2/>}</div>

      <div className="text-center mt-4">
        <Button onClick={handleSaveClick} disabled={isSaving}>
          {isSaving ? 'Guardando...' : 'Enviar Abono'}
        </Button>
      </div>
    </div>
  );
}
