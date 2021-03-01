import React from 'react'
import { Container, Form, FormControl, FormGroup, FormLabel, FormText, Button, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Container>
      <Form>
        <Col>
          <h1>Inventory - Form Login</h1>
          <FormGroup>
            <FormLabel>Email Address</FormLabel>
            <FormControl />
            <FormText>
              We'll never share your email with anyone else.
            </FormText>
          </FormGroup>
          <FormGroup>
            <FormLabel>Password</FormLabel>
            <FormControl />
            <FormText>
              We'll never share your password with anyone else.
            </FormText>
          </FormGroup>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Link to="/register">
            Register Here
          </Link>
        </Col>
      </Form>
    </Container>
  )
}

export default Login
