import React, { useState, useEffect } from 'react';

function AbonarPropuesta1() {
  const [name, setName] = useState('');
  const [client, setClient] = useState('');

  useEffect(() => {
    // Fetch the name and client from a database or API
    // In this example, we'll use hardcoded values
    setName('Mary Freecoder');
    setClient('Francisco');
  }, []);

  return (
    <div>
      <h1>Felicitaciones {client}</h1>
      <p>Has sido aceptado por nuestro Freecoder {name}.</p>
      <h2>Sólo falta un paso más </h2>
      <p>Para poder formalizar el servicio, necesitamos un abono inicial de un 15%, el cual será tomado como compromiso para iniciar el trabajo.</p>
      <p>Una vez el trabajo haya sido finalizado, se deberá realizar el abono del 85% restante al Freecoder, de manera directa al medio de pago (transferencia o similar) indicado por el Freecoder.</p>
      
      
    </div>
  );
}

export default AbonarPropuesta1;
