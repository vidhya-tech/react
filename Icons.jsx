import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaHome, FaUser, FaCog } from 'react-icons/fa';

function Icons() {
  return (
    <Container>
      <h1>Welcome to My React App</h1>
      <Row>
        <Col md={4}>
          <div className="icon-container">
            <FaHome size={64} />
            <p>Home</p>
          </div>
        </Col>
        <Col md={4}>
          <div className="icon-container">
            <FaUser size={64} />
            <p>Profile</p>
          </div>
        </Col>
        <Col md={4}>
          <div className="icon-container">
            <FaCog size={64} />
            <p>Settings</p>
          </div>
        </Col>

 


      </Row>
      <Button variant="primary">Click me</Button>
    </Container>
  );
}

export default Icons;
