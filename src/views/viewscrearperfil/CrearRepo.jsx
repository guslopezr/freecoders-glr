import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function CrearRepo() {
  const [repositoryType, setRepositoryType] = useState('github');
  const [repositoryUrl, setRepositoryUrl] = useState('');

  const handleRepositoryTypeChange = (event) => {
    setRepositoryType(event.target.value);
  };

  const handleRepositoryUrlChange = (event) => {
    setRepositoryUrl(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the repository type and URL, e.g. submit them to a server
    console.log('Repository type:', repositoryType);
    console.log('Repository URL:', repositoryUrl);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Elige el tipo de repositorio</Form.Label>
        <Form.Control as="select" value={repositoryType} onChange={handleRepositoryTypeChange}>
          <option value="github">GitHub</option>
          <option value="bitbucket">Bitbucket</option>
          <option value="gitlab">GitLab</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Agregar URL del repositorio</Form.Label>
        <Form.Control type="text" value={repositoryUrl} onChange={handleRepositoryUrlChange} />
      </Form.Group>
      <Button type="submit">Guardar</Button>
    </Form>
  );
}
