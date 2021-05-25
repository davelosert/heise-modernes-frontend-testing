import { PickAppointmentForm } from './PickAppointmentForm/PickAppointmentForm';
import { useAvailableDates } from './ApiConnector/useAvailableDates';
import { Alert, Col, Container, Row, Spinner } from 'react-bootstrap';
import React, { useState } from 'react';

const App = () => {
  const [ isLoading, availableDates ] = useAvailableDates();
  const [ isSubmitted, setIsSubmitted ] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  let body;

  if (isLoading) {
    body = (
      <Spinner animation='border' role='status'>
        <span className='sr-only'>Lade freie Termine...</span>
      </Spinner>
    );
  } else if (isSubmitted) {
    body = (
      <Alert variant='success'>Ihr Termin wurde erfolgreich gebucht!</Alert>
    );
  } else {
    body = (
      <React.Fragment>
        <h4>Terminauswahl</h4>
        <PickAppointmentForm
          dates={ availableDates }
          onSubmit={ handleSubmit }
        />
      </React.Fragment>
    );
  }

  return (
    <Container fluid={ true }>
      <Row>
        <Col>
          <h1>
            GetVaxxed!
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          { body }
        </Col>
      </Row>
    </Container>
  );
};

export default App;
