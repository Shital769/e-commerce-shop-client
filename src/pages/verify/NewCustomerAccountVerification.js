import React, { useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { postCustomerEmailVerification } from "../../helper/axios";
import { Spinner } from "react-bootstrap";

export const NewCustomerAccountVerification = () => {
  //use the query string
  let [searchParams] = useSearchParams();
  const [response, setResponse] = useState({});
  const isFetch = useRef(true);

  console.log(searchParams.get("c"));

  useEffect(() => {
    const emailVerificationCode = searchParams.get("c");
    const email = searchParams.get("email");

    //call the api
    callApi({ email, emailVerificationCode });
    isFetch.current = false;
  }, [searchParams]);

  const callApi = async (obj) => {
    if (isFetch.current) {
      const response = await postCustomerEmailVerification(obj);
      setResponse(response);
    }
  };
  return (
    //have to add header and footer
    <div className="main p-5 d-flex justify=content-center align-items-center">
      {response?.message ? (
        <Alert variant={response.status === "success" ? "success" : "danger"}>
          {response.message}
        </Alert>
      ) : (
        <Spinner animation="border" variant="primary" className="fs-1" />
      )}
    </div>
  );
};
