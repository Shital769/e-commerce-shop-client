import React from "react";
import { InputGroup, Form } from "react-bootstrap";

export const UserDashboardInput = ({ label, ...rest }) => {
  return (
    <div>
      <InputGroup className="mb-3" controlId="formBasicEmail">
        <InputGroup.Text>{label}</InputGroup.Text>
        <Form.Control {...rest} />
      </InputGroup>
    </div>
  );
};
