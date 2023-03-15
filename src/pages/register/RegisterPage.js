import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { CustomInputField } from "../../components/CustomInputField";

export const RegisterPage = () => {
  const [form, setForm] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
  };

  const inputes = [
    {
      label: "First Name",
      type: "text",
      name: "fName",
      placeholder: "John",
      required: true,
    },
    {
      label: "Last Name",
      type: "text",
      name: "lName",
      placeholder: "Doe",
      required: true,
    },
    {
      label: "Phone",
      type: "text",
      name: "phone",
      placeholder: "0123456789",
    },
    {
      label: "Address",
      type: "text",
      name: "address",
      placeholder: "1 pitt st Sydney",
    },
    {
      label: "Email",
      type: "email",
      name: "email",
      placeholder: "John@gmail.com",
      required: true,
    },
    {
      label: "Password",
      type: "password",
      name: "password",
      placeholder: "******",
      required: true,
    },
    {
      label: "Confirm Password",
      type: "confirmpassword",
      name: "confirmpassword",
      placeholder: "******",
      required: true,
    },
  ];
  return (
    <div>
      <div className="main register-page p-5">
        <Container className="m-3">
          <Form
            onSubmit={handleOnSubmit}
            className="border p-4 rounded shadow-lg"
          >
            <h3>SIgn up new user</h3>
            <hr />
            {inputes.map((item, i) => (
              <CustomInputField key={i} {...item} onChange={handleOnChange} />
            ))}
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    </div>
  );
};
