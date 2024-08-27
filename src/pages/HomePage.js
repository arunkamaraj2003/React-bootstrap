import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import CarouselComponent from '../components/CarouselComponent';

const HomePage = () => {
  return (
    <Container>
      <CarouselComponent />
      <Row className="mt-4">
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Track Your Assets</Card.Title>
              <Card.Text>
                Stay updated on the location and status of your assets in real-time.
              </Card.Text>
              <Button variant="primary">Get Started</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Maintenance Made Easy</Card.Title>
              <Card.Text>
                Schedule and log all maintenance activities with ease.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>All In One Place</Card.Title>
              <Card.Text>
                Manage both physical and digital assets from a single platform.
              </Card.Text>
              <Button variant="primary">Join Us</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
