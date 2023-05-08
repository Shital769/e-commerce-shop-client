import React, { useState } from "react";
import { fetchOtpRequest, resetPasswordRequest } from "../../helper/axios";
import { RequestOTP } from "../../components/request-otp/RequestOtp";
import { ResetPasswordForm } from "../../components/reset-password/ResetPasswordForm";
import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";
import { Alert } from "react-bootstrap";
import { toast } from "react-toastify";

export const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [showForm, setShowForm] = useState("otp");
  const [response, setResponse] = useState({});

  const handleOnChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleOnOtpRequest = async (e) => {
    e.preventDefault();

    const { status, message } = await fetchOtpRequest({
      email,
    });
    console.log(status);
    toast[status](message);
    setResponse({ status, message });
    status === "success" && setShowForm("reset");
  };

  const handleOnPasswordReset = async (data) => {
    console.log("sending password to reset", data);
    const { confirmPassword, ...rest } = data;
    console.log(confirmPassword);
    if (rest.password !== confirmPassword) {
      return toast.error("Password do not match");
    }
    const { status, message } = await resetPasswordRequest({ ...rest, email });
    console.log(status, message);
    toast[status](message);
    setResponse({ status, message });
  };

  const forms = {
    otp: (
      <RequestOTP
        handleOnChange={handleOnChange}
        handleOnOtpRequest={handleOnOtpRequest}
      />
    ),

    reset: <ResetPasswordForm handleOnPasswordReset={handleOnPasswordReset} />,
  };
  return (
    <div>
      <Header />
      {response.message && (
        <Alert variant={response.status === "success" ? "success" : "danger"}>
          {response.message}
        </Alert>
      )}

      <div className="main register-page p-5">{forms[showForm]}</div>
      <Footer />
    </div>
  );
};
