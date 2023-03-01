import {
    Container,
    Card
  } from 'react-bootstrap'
import CommentTable from './subViewsSeguimiento/Comentarios'

  import { faker } from '@faker-js/faker';
  import AlertTxt from './subViewsSeguimiento/Alert';

  
  const date = new Date().toLocaleDateString()
  const randomName = faker.name.fullName();
  
  function TrackingDeploy() {
    return (
      <>
        <Container>
          <Card className='text-center'>
            <Card.Header>Seguimiento</Card.Header>
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