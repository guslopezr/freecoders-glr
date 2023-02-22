import React, { useState } from 'react';

function AbonarPropuesta2() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const allowedTypes = ['application/pdf', 'application/msword', 'image/png', 'image/jpeg'];
    if (file && allowedTypes.includes(file.type)) {
      setSelectedFile(file);
    } else {
      alert('El archivo seleccionado no es válido. Por favor seleccione un archivo PDF, Word, PNG o JPG.');
    }
  };

  return (
    <div style={{ backgroundColor: 'lightgrey' }}>
      <h3>Subir comprobante de la transferencia</h3>
      <label>
        <input type="file" accept=".pdf,.doc,.docx,.png,.jpg,.jpeg" onChange={handleFileChange} />
      </label>
      <p>{selectedFile ? selectedFile.name : 'Archivo no subido'}</p>
    </div>
  );
}

export default AbonarPropuesta2;
