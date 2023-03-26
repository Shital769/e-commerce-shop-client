import React from "react";
import Footer from "./Footer";
import { Header } from "./Header";

export const AdminLayout = () => {
  return (
    <div>
      <Header />

      <main className="main">
        <Container fluid>
          <Row>
            <Col>
            {/* Have to add Sidebar here. */}
            
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </div>
  );
};
