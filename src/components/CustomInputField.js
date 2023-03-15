import React from "react";
import { Form } from "react-bootstrap";

export const CustomInputField = ({label, ...rest}) => {
  return (
    <FormData.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control {...rest} />
    </FormData.Group>
  );
};
