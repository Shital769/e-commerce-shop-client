import React from "react";
import { Container } from "react-bootstrap";
import { Header } from "../../../pages/layout/Header";
import { Footer } from "../../pages/layout/Footer";
export const CustomLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <Container className="main">{children}</Container>

      <Footer />
    </div>
  );
};
