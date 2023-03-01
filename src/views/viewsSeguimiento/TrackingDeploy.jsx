import {
    Container,
    Card
  } from 'react-bootstrap'
import CommentTable from './subViewsSeguimiento/Comentarios'



  import AlertTxt from './subViewsSeguimiento/Alert';

  
  const date = new Date().toLocaleDateString()

  const randomName = 'Juan Freecoder';

  function TrackingDeploy() {
    return (
      <>
        <Container className='maincontainer'>
          <Card className='text-center'>
            <Card.Header>
              
              <h1>Seguimiento</h1></Card.Header>
            <Card.Body>
              <Card.Title><h2>S001</h2></Card.Title>
              <Card.Text>
                Fecha de solicitud: {date}
              </Card.Text>
              <Card.Text>
                Nombre del solicitante: {randomName}
              </Card.Text>
              <Card.Text>
                Proyecto: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, eum.
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
          <AlertTxt />
          <br />
          <CommentTable />
        </Container>
      </>
    );
  }
  
  export default TrackingDeploy;