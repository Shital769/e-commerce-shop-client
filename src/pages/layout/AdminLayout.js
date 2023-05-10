import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Col, Row, Container } from "react-bootstrap";

export const AdminLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="main">
        <Container fluid>
          <Row>
            <Col>{children}</Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </div>
  );
};
