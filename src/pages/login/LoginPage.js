import { useEffect, useRef } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { autoLogin, loginAction } from "./LoginAction";
import { CustomLayout } from "../../components/custom-layout/CustomLayout";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const emailRef = useRef("");
  const passRef = useRef("");
  const location = useLocation();

  const { isLoading, user } = useSelector((state) => state.user);

  const origin = location?.state?.from?.pathname || "/myuseraccount";

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const formDt = {
      email: emailRef.current.value,
      password: passRef.current.value,
    };

    if (!formDt.email || !formDt.password) {
      return alert("Please fill up the forms in both fields");
    }

    //dispatch login action call api
    dispatch(loginAction(formDt));
  };

  useEffect(() => {
    user?._id ? navigate(origin) : dispatch(autoLogin());
  }, [user?._id, navigate, origin, dispatch]);
  return (
    <div>
      <CustomLayout>
        <Container>
          <Row className="mt-5">
            <Col className="md-6 p-5 reg-info d-flex align-items-center d-none d-md-block">
              <div className="productsinfo">
                <ul>
                  <h2>New to HelloFresh</h2>
                  <hr />
                  Get our latest product info and enjoy your valuable time with
                  us using your mobile app.
                  <br />
                  Manage your orders by yourslef.
                  <br />
                  Preview your items.
                  <br />
                </ul>
                <div className="d-grid p-2">
                  <Button variant="secondary" type="submit">
                    <Link className="nav-link" to="/register">
                      Register for New Account
                    </Link>
                  </Button>
                </div>
              </div>
            </Col>

            <Col className="bg-secondary p-5">
              <div className="bg-light p-4 rounded">
                <div className="registerpage">
                  <Form onSubmit={handleOnSubmit}>
                    <h3>Login</h3>
                    <br />
                    <h4>Already a Member?</h4>
                    <hr />
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address:</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        ref={emailRef}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password:</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        ref={passRef}
                      />
                    </Form.Group>
                    <div className="d-grid">
                      <Button variant="secondary" type="submit">
                        Sign In
                      </Button>
                    </div>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </CustomLayout>
    </div>
  );
};
