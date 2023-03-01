import { Card, ListGroup, Button } from "react-bootstrap";

function ConfirmRequest() {
  const numeroDeSeguimiento = "123456"; // importar nombre de API o base de datos
  const coderName = "Mary Free Coder"; // importar nombre de API o base de datos    
  
  return (

    

    <>
      <div className="maincontainer">
        <div className="maincontainer">
          <h2>¡Felicitaciones!</h2>
          <h3>Hemos enviado tu solicitud al Freecoder</h3>
        </div>
        <div className="maincontainer">
          <Card.Title>Coder Name: {coderName}</Card.Title>
        </div>

        <div className="maincontainer text-center">
          <Card className="mx-auto" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNGO-vi7hcHF9yzYNnDkM6QXBzWf86zJKDyw&usqp=CAU"
            />
            <Card.Body>
              <Card.Text>
                <h4>Perfil </h4>
                <p>Skill 1</p>
                <p>Skill 2</p>
                <p>Skill 3</p>
              </Card.Text>
            </Card.Body>

            <ListGroup className="list-group-flush">
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
          </Card>
        </div>

        <div className="maincontainer">
          <h3>Tu número de seguimiento es el {`${numeroDeSeguimiento || "000"}`}</h3>
          <h3>Recibirás un correo de confirmación en tu bandeja de entrada</h3>
          <p style={{ fontSize: "14px", fontWeight: "lighter" }}>
            El Freecoder seleccionado evaluará tu proyecto y te enviará una cotización
            dentro de 48 horas, con un enlace para realizar el pago por nuestra
            plataforma. Recuerda revisar el SPAM.
          </p>
          <Button variant="primary" id='button-crearperfil' className="consolas-font" >Volver al inicio</Button>

        </div>
      </div>
    </>
  );
}

export default ConfirmRequest;
