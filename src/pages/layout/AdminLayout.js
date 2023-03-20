import React from "react";
import Footer from "./Footer";
import { Header } from "./Header";

export const AdminLayout = () => {
  return (
    <div>
      <Header />

      <main>
        <Container>
          <Row>
            <Col></Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </div>
  );
};
