import { useState } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";

const LoginForm = () => {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    // Add authentication logic here
  };

  return (
         <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "80vh" }}>
        <Row className="w-100 justify-content-center">
          <Col md={6} lg={5}>
            <Card className="shadow animate__animated animate__fadeInUp">
              <Card.Body className="p-4">
                <h3 className="text-center mb-4 fw-bold text-orange">Login to CAPS</h3>
                <Form>
                  <Form.Group controlId="formBasicEmail" className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword" className="mb-4">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required />
                  </Form.Group>

                  <div className="d-grid">
                    <Button variant="warning" className="text-white fw-bold" type="submit">
                      Login
                    </Button>
                  </div>

                  <div className="mt-3 text-center">
                    <small>
                      Don't have an account? <a href="/join-us">Join Us</a>
                    </small>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

  );
};

export default LoginForm;
