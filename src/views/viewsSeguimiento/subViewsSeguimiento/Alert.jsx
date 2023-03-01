import Alert from 'react-bootstrap/Alert';

function AlertTxt() {
  return (
    <Alert variant="dark">
      <Alert.Heading>Hey, gusto en tenerte aqui</Alert.Heading>
      <p>
        Nuesto Coder esta revisando tu solicitud.
      </p>
      <p>
        Nuestro tiempo maximo estimado para que puedan responder a tu solicitud es de 7 dias.
      </p>
      <p>
        Mientras tanto puedes dejarle un mensaje en los cuadros de abajo.
      </p>
    </Alert>
  );
}

export default AlertTxt;