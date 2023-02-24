import { useState } from "react";

function RedactarPropuesta3() {
  const [technologies, setTechnologies] = useState("");
  const [scope1, setScope1] = useState("");
  const [scope2, setScope2] = useState("");
  const [hours, setHours] = useState("");
  const [revisions, setRevisions] = useState("");
  const [value, setValue] = useState("");
  const [hourValue, setHourValue] = useState("");

  const handleSave = () => {
    const data = {
      technologies,
      scope1,
      scope2,
      hours,
      revisions,
      value,
    };
    localStorage.setItem("projectData", JSON.stringify(data));
  };

  const calculateValue = () => {
    const calculatedValue = hours * hourValue;
    setValue(calculatedValue);
  };

  return (
    <div className="maincontainer">
      <div>
        <h3>Otras Tecnologías a utilizar</h3>
        <textarea
          className="my-textarea"
          placeholder="Tecnologías separadas por comas"
          value={technologies}
          onChange={(e) => setTechnologies(e.target.value)}
        />
      </div>
      <div>
        <h3>Alcance</h3>
        <textarea
          className="my-textarea"
          placeholder="Alcances, límites, aspectos no contemplados en el servicio"
          value={scope1}
          onChange={(e) => setScope1(e.target.value)}
        />
      </div>

      <div>
        <h3>Cantidad de revisiones</h3>
        <input
          type="number"
          placeholder="Revisiones"
          value={revisions}
          onChange={(e) => setRevisions(e.target.value)}
        />
      </div>

      <div>
        <h3>Horas estimadas de desarrollo</h3>
        <input
          type="number"
          placeholder="Horas de desarrollo"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
        />
      </div>

      <div>
        <h3>Valor hora en pesos Chilenos</h3>
        <input
          type="number"
          placeholder="Valor hora"
          value={hourValue}
          onChange={(e) => setHourValue(e.target.value)}
        />
      </div>
      <div
        className="maincontainer"
        style={{
          padding: "10px",
          margin: "10px auto",
          textAlign: "center",
          backgroundColor: "#f2f2f2",
        }}
      >
        <h3>Valor Final en Pesos Chilenos</h3>

        <input
          type="number"
          placeholder="Valor Final"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          style={{
            fontSize: "20px",
            border: "none",
            outline: "none",
            backgroundColor: "#4B4B4B",
            color: "#fff",
          }}
        />
      </div>

      <div>
        <button id="button-skills" onClick={calculateValue}>
          Calcular Valor Final
        </button>
      </div>
      <button type="submit" onClick={handleSave}>
        Guardar datos
      </button>
    </div>
  );
}

export default RedactarPropuesta3;
