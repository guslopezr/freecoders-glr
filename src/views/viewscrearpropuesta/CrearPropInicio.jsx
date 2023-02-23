import React, { useState, useEffect } from 'react';

function CrearPropInicio() {
  const [name, setName] = useState('');
  const [client, setClient] = useState('');

  useEffect(() => {
    // Fetch the name and client from a database or API
    // In this example, we'll use hardcoded values
    setName('Jero');
    setClient('Francisco');
  }, []);

  return (
    <div className='maincontainer' >
      <h2>Hola Freecoder "{name}"</h2>
      <p>El cliente "{client}", ha enviado una solicitud.</p>
    </div>
  );
}

export default CrearPropInicio;
