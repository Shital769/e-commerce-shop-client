import React from "react";
import { Card } from "react-bootstrap";

export const CustomCart = ({ slug, name, salesPrice, item, qty }) => {
  return (
    <div>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Price:{salesPrice}</Card.Text>
        <Card.Text>Quantity:{qty}</Card.Text>
      </Card.Body>
    </div>
  );
};
