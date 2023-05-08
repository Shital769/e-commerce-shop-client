import React from "react";
import { Form, Button } from "react-bootstrap";

export const RequestOTP = ({ handleOnChange, handleOnOtpRequest }) => {
  return (
    <div>
      <Form
        onSubmit={handleOnOtpRequest}
        className="border p-4 rounded shadow-lg"
      >
        <h3 className="text-center">Request OTP!</h3>
        <hr className="mb-5" />
        <p>OTP will be sent to your email</p>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={handleOnChange}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Send Request OTP
        </Button>
      </Form>
    </div>
  );
};
