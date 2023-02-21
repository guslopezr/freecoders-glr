/* import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function CrearPortafolio() {
  const [text, setText] = useState('');
  const [selectedSkills, setSelectedSkills] = useState([]);

  const skills = ['JavaScript', 'React', 'Node.js', 'Python', 'Java', 'C++', 'HTML/CSS', 'SQL'];

  const handleSkillChange = (event) => {
    const skill = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedSkills([...selectedSkills, skill]);
    } else {
      setSelectedSkills(selectedSkills.filter(s => s !== skill));
    }
  };

  const handleChange = (event) => {
    const inputText = event.target.value;
    if (inputText.length <= 500) {
      setText(inputText);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(text);
    console.log(selectedSkills);
    // Your code to handle form submission goes here
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formFreeText">
        <Form.Label>Agrega tu reseña al portafolio (BIO)</Form.Label>
        <Form.Control as="textarea" rows={3} maxLength={500} value={text} onChange={handleChange} />
      </Form.Group>

      <Form.Group controlId="formSkills">
        <Form.Label>Selecciona tus habilidades</Form.Label>
        {skills.map(skill => (
          <Form.Check 
            key={skill} 
            type="checkbox" 
            label={skill} 
            value={skill} 
            onChange={handleSkillChange}
            checked={selectedSkills.includes(skill)}
          />
        ))}
      </Form.Group>

      <Button variant="primary" type="submit">
        Guardar Datos
      </Button>
    </Form>
  );
} */


import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function CrearPortafolio() {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    const inputText = event.target.value;
    if (inputText.length <= 500) {
      setText(inputText);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(text);
    // Your code to handle form submission goes here
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formFreeText">
        <Form.Label>Agrega tu reseña al portafolio (BIO)</Form.Label>
        <Form.Control as="textarea" rows={3} maxLength={500} value={text} onChange={handleChange} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Guardar Reseña
      </Button>
    </Form>
  );
}
