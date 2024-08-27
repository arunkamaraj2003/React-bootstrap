import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const AboutPage = () => {
  return (
    <Container>
      <h2>About Us</h2>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>About the Application</Card.Title>
              <Card.Text>
                The Asset Management System is designed to help users manage their physical and digital assets efficiently by tracking, maintaining, and logging important asset details.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Our Team</Card.Title>
              <Card.Text>
                We are a group of software developers passionate about creating efficient and user-friendly applications that help solve real-world problems.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;
