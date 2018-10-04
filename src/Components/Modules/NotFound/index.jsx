// Dependences
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const NotFound = ({ location }) => (
  <Container>
    <Row>
      <Col md="12">
        <h1 className="h3">404 NotFound for <code>{location.pathname}</code></h1>
        <p>Come back to <NavLink to="/">home</NavLink></p>
      </Col>
    </Row>
  </Container>
)

export default NotFound;
