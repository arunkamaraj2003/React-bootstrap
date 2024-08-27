import React from 'react';
import { Carousel } from 'react-bootstrap';

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src="src\assets\images\slide1.jpg" alt="First slide" />
        <Carousel.Caption>
          <h3>Manage Assets Efficiently</h3>
          <p>Track your assets from anywhere.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="src\assets\images\slide2.jpg" alt="Second slide" />
        <Carousel.Caption>
          <h3>Maintenance Logs</h3>
          <p>Keep track of your maintenance schedules.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="src\assets\images\slide3.jpg" alt="Third slide" />
        <Carousel.Caption>
          <h3>Asset Tracking</h3>
          <p>Monitor the movement of your assets.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
