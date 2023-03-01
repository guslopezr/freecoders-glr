import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { Button, Card, ListGroup, Table } from "react-bootstrap";
import { FaMoneyBillWave } from "react-icons/fa";
import Contexto from "../context/contexto";

export default function PerfilFreecoder() {
  const [programadorDetalle, setProgramadorDetalle] = useState({});
  const [ProgramadorStack, setProgramadorStack] = useState([]);
  const { programadores } = useContext(Contexto);

  const navigate = useNavigate();

  const irContacto = (id) => {
    navigate(`/contacto/${id}`);
    console.log(id);
  };
  const { id } = useParams();

  useEffect(() => {
    if (programadores && programadores.length > 0) {
      const datosProgramador = programadores.find(
        (programador) => programador.id === id
      );
      if (datosProgramador !== undefined) {
        setProgramadorDetalle(datosProgramador);
        setProgramadorStack(datosProgramador.area || []);
      }
    }
  }, [id, programadores]);

  return (
    <>
      <div className="maincontainer">
        <div className="row">
          <div className="col-xl-3 col-md-4 col-sm-12  ajustes-card">
            <Card className="maincontainer">
              <Card.Title className="card-nombre">
                {programadorDetalle.nombre} {programadorDetalle.apellido}
                <h2>Nombre Programador: </h2>
              </Card.Title>
              <Card.Img
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNGO-vi7hcHF9yzYNnDkM6QXBzWf86zJKDyw&usqp=CAU"
                alt="foto-perfil"
              />

              <ListGroup className="list-group-flush">
                {ProgramadorStack.map((area) => (
                  <ListGroup.Item key={area}>{area}</ListGroup.Item>
                ))}
                <p>Stack</p>
                <p className="precio-texto">Valor hora</p>
                <FaMoneyBillWave className="icono" />
              </ListGroup>
            </Card>

            <div className="maincontainer">
              {" "}
              <Button
                type="submit"
                onClick={() => irContacto(programadorDetalle.id)}
              >
                Contactar Freecoder
              </Button>
            </div>
          </div>

          <div className="col-xl-9 col-md-8 col-sm-12 maincontainer">
            <div className="resumen-de-habilidades">
              <h2>Resumen de habilidades</h2>

              <p className="resumen-texto">
                Tabla programador_lenguaje.experiencia
              </p>
            </div>

            <h2>Repositorios</h2>
            <div className="repositorio maincontainer">
              <Table>
                <tbody>
                  <tr>
                    <td>Repositorio github</td>
                    <td>
                      <a href={programadorDetalle.link_github}>
                        {programadorDetalle.link_github}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Repositorio vercel</td>
                    <td>
                      <a href={programadorDetalle.link_vercel}>
                        {programadorDetalle.link_vercel}
                      </a>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>

            <h2>Principales Proyectos Desarrollados</h2>
            <div className="repositorio maincontainer">
              <Table>
                <tbody>
                  <tr>
                    <td>Portafolio 1: Explicación breve del proyecto y sus caterterísticas.</td>
                    <td>
                      <a href={programadorDetalle.link_github}>
                        {programadorDetalle.link_github}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Portafolio 2: Explicació breve del proyecto y sus caterterísticas.</td>
                    <td>
                      <a href={programadorDetalle.link_vercel}>
                        {programadorDetalle.link_vercel}
                      </a>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>


            <h2>BIO</h2>
            <div className="bio">
              <p>{programadorDetalle.biografia}</p>
             <p>Resumen breve del free lancer</p> 
            </div>

            <h2>Mi oferta de valor</h2>
            <div className="oferta-de-valor">
              <p>Explicación breve de la oferta de valor, aspectos funcionales, técnicos y otros.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}