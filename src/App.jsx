import { PickAppointmentForm } from './PickAppointmentForm/PickAppointmentForm';
import { useAvailableDates } from './ApiConnector/useAvailableDates';
import { Alert, Col, Container, Row, Spinner } from 'react-bootstrap';
import React, { useState } from 'react';

const App = () => {
  const [ isSubmitted, setIsSubmitted ] = useState(false);
  const [ isLoading, availableDates ] = useAvailableDates();

  if (isLoading) {
    return <Spinner animation='border' />;
  }

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const body = isSubmitted ?
    (<Alert variant='success'>Ihr Termin wurde erfolgreich gebucht!</Alert>) :
    (
      <PickAppointmentForm
        dates={ availableDates }
        onSubmit={ handleSubmit }
      />
    );

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
          { body}
        </Col>
      </Row>
    </Container>
  );
};

export default App;
