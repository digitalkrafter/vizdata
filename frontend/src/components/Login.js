import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Google } from "react-bootstrap-icons";

import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate authentication
    if (email === "test@example.com" && password === "password") {
      navigate.push("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}
    >
      <Row className="w-100">
        <Col md={{ span: 4, offset: 4 }}>
          <div className="text-center mb-4">
            <h2>Invooce</h2>
          </div>
          <div className="border p-4 shadow-sm rounded bg-white">
            <h3 className="text-center mb-3">Login</h3>
            <p className="text-center text-muted mb-4">Hi, Welcome back 👋</p>
            <Button variant="outline-primary" className="mb-3 w-100">
              <Google className="me-2" />
              Login with Google
            </Button>
            <div className="text-center text-muted mb-3">
              or Login with Email
            </div>
            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="E.g. johndoe@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember Me" />
              </Form.Group>
              <div className="d-flex justify-content-between mb-3">
                <a href="#!" className="text-decoration-none">
                  Forgot Password?
                </a>
              </div>
              <Button variant="primary" type="submit" className="w-100">
                Login
              </Button>
            </Form>
            <div className="text-center mt-3">
              Not registered yet?{" "}
              <a href="#!" className="text-decoration-none">
                Create an account
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
