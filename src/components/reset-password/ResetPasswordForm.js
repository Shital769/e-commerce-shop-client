import React, { useState } from "react";
import { CustomInputField } from "../custom-input-field/CustomInputField";
import { Button } from "react-bootstrap";

export const ResetPasswordForm = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    if (name === "password") {
      setError("");

      value.length < 6 &&
        setError("Minimum length of character should be atleast six.");

      //writing RegEx
      !/[0-9]/.test(value) && setError("Number is required");
      !/[A-Z]/.test(value) && setError("UpperCase letter is required");
      !/[a-z]/.test(value) && setError("Lowercase letter is required");
    }

    //calling data from form
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    handleOnPasswordReset(formData);
  };

  const inputes = [
    {
      label: "OTP",
      type: "number",
      name: "otp",
      placeholder: "123456",
      required: true,
    },
    {
      label: "Password",
      type: "password",
      name: "password",
      placeholder: "********",
      required: true,
    },
    {
      label: "Confrim Password",
      type: "password",
      name: "confirmPassword",
      placeholer: "********",
      required: true,
    },
  ];

  console.log(formData);

  return (
    <div>
      <Form onsubmit={handleOnSubmit} className="border p-4 rounded shadow-lg">
        <h3 className="text-center">Reset new Password</h3>
        <hr className="mb-5" />

        {inputes.map((item, i) => (
          <CustomInputField key={i} {...item} onChange={handleOnChange} />
        ))}

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Text>
            Your password must be at least 6 character long and one uppercase
            and lowercse.
          </Form.Text>
        </Form.Group>
        <div className="text-danger mt-3 fw-bolder">{error}</div>

        <div className="d-grid mt-5">
          <Button variant="primary" type="submit" disabled={error}>
            Send Request OTP
          </Button>
        </div>
      </Form>
    </div>
  );
};
