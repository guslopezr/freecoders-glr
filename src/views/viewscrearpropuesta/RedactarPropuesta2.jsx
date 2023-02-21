import React, { useState } from 'react';

function RedactarPropuesta2() {
  const [languages, setLanguages] = useState([]);
  const [frameworks, setFrameworks] = useState([]);
  const [databases, setDatabases] = useState([]);

  const handleLanguagesChange = (event) => {
    const selectedLanguages = Array.from(event.target.selectedOptions, (option) => option.value);
    setLanguages(selectedLanguages);
  };

  const handleFrameworksChange = (event) => {
    const selectedFrameworks = Array.from(event.target.selectedOptions, (option) => option.value);
    setFrameworks(selectedFrameworks);
  };

  const handleDatabasesChange = (event) => {
    const selectedDatabases = Array.from(event.target.selectedOptions, (option) => option.value);
    setDatabases(selectedDatabases);
  };

  const handleSaveButtonClick = () => {
    // Save the selected data in browser memory here
    console.log('Selected Languages:', languages);
    console.log('Selected Frameworks:', frameworks);
    console.log('Selected Databases:', databases);
  };

  return (
    <div>
      <h3>Tecnologías a utilizar</h3>

      <div>
        <label htmlFor="languages">Lenguajes:</label>
        <select id="languages" multiple onChange={handleLanguagesChange}>
          {['Python', 'JavaScript', 'Java', 'C++', 'PHP', 'C#', 'Swift', 'TypeScript', 'Kotlin', 'Go'].map((language) => (
            <option key={language} value={language}>{language}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="frameworks">Frameworks:</label>
        <select id="frameworks" multiple onChange={handleFrameworksChange}>
          {['React', 'Angular', 'Vue.js', 'Ruby on Rails', 'Django', 'Spring', 'Express.js', 'Laravel', 'Flask', 'ASP.NET'].map((framework) => (
            <option key={framework} value={framework}>{framework}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="databases">Bases de datos:</label>
        <select id="databases" multiple onChange={handleDatabasesChange}>
          {['MySQL', 'PostgreSQL', 'Oracle', 'MongoDB', 'Microsoft SQL Server', 'SQLite', 'Cassandra', 'Redis', 'Firebase Realtime Database', 'Amazon Aurora'].map((database) => (
            <option key={database} value={database}>{database}</option>
          ))}
        </select>
      </div>

      <button onClick={handleSaveButtonClick}>Guardar</button>
    </div>
  );
}

export default RedactarPropuesta2;

