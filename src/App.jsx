import { PickAppointmentForm } from './PickAppointmentForm/PickAppointmentForm';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const App = () => (
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
        <PickAppointmentForm
          dates={ [
            { date: '21.05.', hours: [ '08:50', '09:00', '09:10' ]},
            { date: '22.05.', hours: [ '09:00', '09:10' ]},
            { date: '23.05.', hours: [ '08:50', '09:00', '09:10' ]}
          ] }
        />
      </Col>
    </Row>
  </Container>
);

export default App;
