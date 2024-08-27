import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <Container>
      <h2>About Us</h2>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>About the Application</Card.Title>
              <Card.Text>
                The Asset Management System is designed to help users efficiently manage their physical and digital assets. With features like inventory tracking, maintenance scheduling, and tracking logs, users can ensure their assets are well-managed and up-to-date.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Our Team</Card.Title>
              <Card.Text>
                We are a team of dedicated software developers committed to building efficient and user-friendly applications that address real-world problems. Our goal is to create a seamless experience for users in managing their assets.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
