import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

function Loading() {
 
  return (
    <>
    <Button variant="outline-dark" disabled>
      <Spinner
        as="span"
        animation="grow"
        size="sm"
        role="status"
        aria-hidden="false"
      />
    </Button>
  </>
  );
}

export default Loading;