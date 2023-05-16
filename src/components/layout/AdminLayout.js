import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Col, Row, Container } from "react-bootstrap";
import { Sidebar } from "./Sidebar";

export const AdminLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="main">
        <Container fluid>
          <Row>
            <Col xs="3" className="side-bar bg=dark text-light">
              {children}
            </Col>

            {/* sidebar  */}
            <Sidebar />
            <Col>{children}</Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </div>
  );
};
