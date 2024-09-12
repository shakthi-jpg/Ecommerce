import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">About EasyToShop</h1>
      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Welcome to EasyToShop!</Card.Title>
              <Card.Text>
                At EasyToShop, we're on a mission to make shopping as smooth and enjoyable as possible. Our goal is to connect customers with the best products in a way that's straightforward, stress-free, and effective.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Who We Are</Card.Title>
              <Card.Text>
                We’re a team of passionate retail experts and tech enthusiasts dedicated to revolutionizing the shopping experience. With years of experience in e-commerce and a deep understanding of the challenges faced by both customers and retailers, we’ve designed EasyToShop to bridge the gap between quality products and a seamless shopping experience.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Our Vision</Card.Title>
              <Card.Text>
                We envision a world where finding the right products doesn’t have to be a lengthy or complicated process. By leveraging the latest technology and a user-friendly interface, we aim to streamline shopping and empower customers to achieve their goals effortlessly.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>What We Do</Card.Title>
              <Card.Text>
                <strong>For Shoppers:</strong> Our platform offers a comprehensive suite of tools to help you discover, compare, and purchase the best products. From product browsing to checkout and customer support, we provide a seamless experience that saves you time and enhances your shopping journey.
              </Card.Text>
              <Card.Text>
                <strong>For Retailers:</strong> We offer a streamlined process for listing products, managing inventory, and engaging with customers. Our platform is designed to help you reach a wider audience and grow your business effectively.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Why Choose Us?</Card.Title>
              <ul>
                <li><strong>User-Friendly Interface:</strong> EasyToShop is designed with simplicity in mind. Navigate our platform with ease and focus on what matters most – finding the right products or reaching the right customers.</li>
                <li><strong>Innovative Technology:</strong> We utilize cutting-edge technology to enhance the shopping process, making it faster and more effective for everyone involved.</li>
                <li><strong>Dedicated Support:</strong> Our team is here to assist you every step of the way. Whether you need help with using our platform or have questions about the shopping process, we’re always available to provide support.</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <Button variant="primary" href="#get-started">Get Started Today</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;

