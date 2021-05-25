import { PickAppointmentForm } from './PickAppointmentForm/PickAppointmentForm';
import { Alert, Col, Container, Row } from 'react-bootstrap';
import React, { useState } from 'react';

const App = () => {
  const [ isSubmitted, setIsSubmitted ] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const body = isSubmitted ?
    (<Alert variant='success'>Ihr Termin wurde erfolgreich gebucht!</Alert>) :
    (
      <PickAppointmentForm
        dates={ [
          { date: '21.05.', hours: [ '08:50', '09:00', '09:10' ]},
          { date: '22.05.', hours: [ '09:00', '09:10' ]},
          { date: '23.05.', hours: [ '08:50', '09:00', '09:10' ]}
        ] }
        onSubmit={ handleSubmit }
      />
    );

  return (
    <Container fluid={ true }>
      <Row>
        <Col>
          <h1>
            Impftermin buchen
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
