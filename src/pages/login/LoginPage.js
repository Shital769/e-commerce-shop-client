import React from "react";
import { Header } from "../layout/Header";

export const LoginPage = () => {
  return (
    <div>
      <Header />

      <div className="main login-page">
        <Form className="shadow-lg rounded">
          <h3 className="text-center">Welcome Back! </h3>
          <hr className="mb-5" />
          <Form.Group className="mb-3">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required />
          </Form.Group>
          <Button variant="primary" type="submit"></Button>
          <div className="text-center p-5">
            Forget Password? <a href="/reset-password">Reset Now</a>{" "}
          </div>
        </Form>
      </div>

      <Footer />
    </div>
  );
};
