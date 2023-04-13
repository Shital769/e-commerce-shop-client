import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

export const Header = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block   "
                src={require("../../images/bg1.jpg")}
                alt="First slide"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100 "
                src={require("../../images/bg2.jpg")}
                alt="Second slide"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100 h-100"
                src={require("../../images/S3.png")}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};
