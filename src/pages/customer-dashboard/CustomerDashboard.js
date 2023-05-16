import React, { useEffect } from "react";
import { AdminLayout } from "../../components/layout/AdminLayout";
import { Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { CustomerDashboardInput } from "../../components/custom-input-field/CustomerDashboardInput";

export const CustomerDashboard = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  console.log(user);

  useEffect(() => {
    //get the orderes here
    dispatch(fetchOrder());
  }, [dispatch]);

  const inputes = [
    {
      label: "First Name",
      type: "text",
      name: "fName",
      placeholder: user.fName,
      required: true,
    },
    {
      label: "Last Name",
      type: "text",
      name: "lName",
      placeholder: user.lName,
      required: true,
    },
    {
      label: "Phone",
      type: "text",
      name: "phone",
      placeholder: user.phone,
    },
    {
      label: "Email",
      type: "email",
      name: "email",
      placeholder: "JohnDoe@gmail.com",
      required: true,
    },
    {
      label: "Address",
      type: "text",
      name: "address",
      placeholder: user.address,
    },
    {
      label: "Suburb",
      type: "text",
      name: "suburb",
      placeholder: user.suburb,
    },
    {
      label: "State",
      type: "text",
      name: "state",
      placeholder: user.state,
    },
    {
      label: "PostCode",
      type: "number",
      name: "postcode",
      placeholder: user.postcode,
    },
  ];

  return (
    <AdminLayout>
      <h2 className="py-3">My Account</h2>
      <hr />
      <Container>
        <Form className="mt-3 p-2">
          {inputes.map((item, i) => (
            <CustomerDashboardInput key={i} {...item} />
          ))}
        </Form>
      </Container>
    </AdminLayout>
  );
};
