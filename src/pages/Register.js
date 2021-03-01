import React, {useState} from 'react'
import { Container, Form, FormControl, FormGroup, FormLabel, Button, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import Success from '../Alert/Success';

const Register = () => {
  const history = useHistory()
  const [userRegister, setUserRegister] = useState({
    name: "",
    email: "",
    password: ""
  })
  const [successAlert, setSuccessAlert] = useState(false)
  const [listUserRegister, setListUserRegister] = useState([])

  const handleChange = (e) => {
    const {name, value} = e.target
    setUserRegister({
      ...userRegister,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log()
    const url = "https://6023a95a6bf3e6001766b546.mockapi.io/datauser"
    axios.post(url, {...userRegister})
      .then(result => {
        setListUserRegister([...listUserRegister, result.data])
        setSuccessAlert(true)
        setTimeout(() => {
          history.push("/")
        }, 1000);
      })
      .catch(err => console.log(err))
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Col>
          <h1>Inventory - Form Register</h1>
          {successAlert && <Success />}
          <FormGroup>
            <FormLabel>Name</FormLabel>
            <FormControl 
              type="text" 
              value={userRegister.name}
              onChange={handleChange}
              name="name"
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Email Address</FormLabel>
            <FormControl 
              type="email"
              value={userRegister.email}
              onChange={handleChange}
              name="email"
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Password</FormLabel>
            <FormControl 
              type="password" 
              value={userRegister.password}
              onChange={handleChange}
              name="password"
            />
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
