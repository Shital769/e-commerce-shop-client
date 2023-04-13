import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Col, Row, Container } from "react-bootstrap";
import { NavBar } from "./NavBar";

export const AdminLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main className="main">
        <Header />
      </main>
      <Footer />
    </>
  );
};
