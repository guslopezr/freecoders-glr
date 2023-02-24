import React, { useState } from 'react';

function RedactarPropuesta1() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  }

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // save data in browser memory
    localStorage.setItem("title", title);
    localStorage.setItem("description", description);
  }

  return (
    <div className='maincontainer' >
      <h2>Ingresa acá los detalles de tu propuesta</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Título del proyecto:</label>
          <input type="text" id="title" value={title} onChange={handleTitleChange} placeholder="Ingresar acá el título del proyecto" required />
        </div>
        <div>
          <label htmlFor="description">Descripción del proyecto:</label>
          <textarea id="description" className='my-textarea' value={description} onChange={handleDescriptionChange} placeholder="Descripción detallada de aspectos funcionales" required />
        </div>
        <button type="submit">Guardar datos</button>
      </form>
    </div>
  );
}

export default RedactarPropuesta1;
