import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const App = () => {
  return (
    <Container>
      <h1 className="mt-4 mb-4">React Bootstrap Example</h1>

      <Row>
        <Col md={6}>
          <p>This is a simple React component using Bootstrap.</p>
        </Col>
        <Col md={6}>
          <Button variant="primary">Click me</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default App;