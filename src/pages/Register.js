import React from 'react'
import { Container, Form, FormControl, FormGroup, FormLabel, Button, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <Container>
      <Form>
        <Col>
          <h1>Inventory - Form Register</h1>
          <FormGroup>
            <FormLabel>Name</FormLabel>
            <FormControl />
          </FormGroup>
          <FormGroup>
            <FormLabel>Email Address</FormLabel>
            <FormControl />
          </FormGroup>
          <FormGroup>
            <FormLabel>Password</FormLabel>
            <FormControl />
          </FormGroup>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Link to="/">
            Login Here
          </Link>
        </Col>
      </Form>
    </Container>
  )
}

export default Register
