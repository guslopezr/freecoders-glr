import { useState } from 'react';
import {
  Col,
  Form,
  Row,
  Container,
  Button,
} from 'react-bootstrap'

import Loading from './subViewsSeguimiento/Loading'
import TrackingDeploy from './TrackingDeploy';


function TrackingRequest() {

  const [loading, setLoading] = useState(false);

  const carga = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000)
  }

  return (
    <>
      <Container className='text-center'>
        <Form>
          <Row>
            <Col>
              <Form.Control placeholder="Numero de seguimiento" />
            </Col>
            <Col>
              <Form.Control placeholder="Nombre" />
            </Col>
              <Button className='col-md-2 mx-auto-2' variant="outline-dark" onClick={() => carga()}>
                Buscar
              </Button >
          </Row>
        </Form>
      </Container>
      <Container>
        <br />
        {loading ?
          <Loading /> :
          <TrackingDeploy />
        }
      </Container>
    </>
  );
}
export default TrackingRequest;