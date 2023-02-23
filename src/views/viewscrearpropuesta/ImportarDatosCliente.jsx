import React, { useState, useEffect } from 'react';

function ImportarDatosCliente() {
  const [explanation, setExplanation] = useState('Explicación breve ingresada por el cliente acá');
  const [requiredStack, setRequiredStack] = useState('Lenguaje, framework, etc.');
  const [clientComments, setClientComments] = useState('Comentarios adicionales del cliente en texto libre');
  const [externalLink, setExternalLink] = useState('Enlace externo');

  useEffect(() => {
    // Fetch data from a database or API
    // In this example, we'll use hardcoded values for simplicity
    setExplanation('Esta es una explicación breve importada desde la base de datos.');
    setRequiredStack('React, Node.js, MongoDB');
    setClientComments('Estoy muy emocionado por este proyecto y espero trabajar contigo pronto.');
    setExternalLink('https://example.com/document.pdf');
  }, []);

  const handleExplanationChange = (event) => {
    setExplanation(event.target.value);
  };

  const handleRequiredStackChange = (event) => {
    setRequiredStack(event.target.value);
  };

  const handleClientCommentsChange = (event) => {
    setClientComments(event.target.value);
  };

  const handleExternalLinkChange = (event) => {
    setExternalLink(event.target.value);
  };

  return (
    <div className='maincontainer' >
      <h2>Descripción breve del proyecto</h2>
      <textarea value={explanation} onChange={handleExplanationChange} />

      <h3>Stack requerido</h3>
      <textarea value={requiredStack} onChange={handleRequiredStackChange} />

      <h3>Comentarios del cliente</h3>
      <textarea value={clientComments} onChange={handleClientCommentsChange} />

      <h3>Enlace externo con documento de apoyo enviado por el cliente</h3>
      <input type="text" value={externalLink} onChange={handleExternalLinkChange} />
    </div>
  );
}

export default ImportarDatosCliente;


/* import React, { useState, useEffect } from 'react';

function ImportarDatosCliente() {
  const [explanation, setExplanation] = useState('Explicación breve ingresada por el cliente acá');

  useEffect(() => {
    // Fetch the explanation from a database or API
    // In this example, we'll use a hardcoded value
    setExplanation('Esta es una explicación breve importada desde la base de datos.');
  }, []);

  const handleExplanationChange = (event) => {
    setExplanation(event.target.value);
  };

  return (
    <div>
      <h2>Descripción breve del proyecto</h2>
      <textarea value={explanation} onChange={handleExplanationChange} />
    </div>
  );
}

export default ImportarDatosCliente;

 */