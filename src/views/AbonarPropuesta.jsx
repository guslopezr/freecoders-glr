import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
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
    <div className='maincontainer'>
      <div className='maincontainer' >{<AbonarPropuesta1/>}</div>
      <div className='maincontainer'>{<AbonarPropuesta2/>}</div>

      <div className="maincontainer text-center mt-4">
        <Button id='button-crearperfil' className="consolas-font" onClick={handleSaveClick} disabled={isSaving}>
          {isSaving ? 'Guardando...' : 'Enviar Abono'}
        </Button>
      </div>
    </div>
  );
}
