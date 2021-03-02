import React, {useState} from 'react'
import { Container, Form, FormControl, FormGroup, FormLabel, FormText, Button, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import Success from '../Alert/Success';
import Error from '../Alert/Error';

const Login = () => {
  const history = useHistory()
  const [successAlert, setSuccessAlert] = useState(false)
  const [errorAlert, setErrorAlert] = useState(false)
  const [errorContent, setErrorContent] = useState("")
  const [successContent, setSuccessContent] = useState("")
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: ""
  })
  
  const handleChange = (e) => {
    const {name, value} = e.target
    setUserLogin({
      ...userLogin,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = "https://6023a95a6bf3e6001766b546.mockapi.io/datauser"

    if(userLogin.email === "" || userLogin.password === "") {
      setErrorAlert(true)
      setErrorContent("Please input your data")
    } else {
      axios.get(url)
        .then(result => {
          const user = result.data.find((user) => user.email === userLogin.email && user.password === userLogin.password)
          console.log(user)
          if(user) {
            let {password, ...dataUserLogin} = user
            localStorage.setItem("user", JSON.stringify(dataUserLogin))
            localStorage.setItem("isLogin", true)
            setSuccessAlert(true)
            setSuccessContent("Login Successfull")
            setTimeout(() => {
              history.push("/home")
            }, 1000);
          } else {
            setSuccessAlert(false)
            setErrorAlert(true)
            setErrorContent("Login failed, please input the correct email and password")
          }
        })
    }
    
    
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Col>
          <h1>Inventory - Form Login</h1>
          {successAlert && <Success successContent={successContent}/>}
          {errorAlert && <Error errorContent={errorContent}/>}
          <FormGroup>
            <FormLabel>Email Address</FormLabel>
            <FormControl 
              type="email" 
              name="email" 
              value={userLogin.email} 
              onChange={handleChange}
            />
            <FormText>
              We'll never share your email with anyone else.
            </FormText>
          </FormGroup>
          <FormGroup>
            <FormLabel>Password</FormLabel>
            <FormControl 
              type="password" 
              name="password" 
              value={userLogin.password} 
              onChange={handleChange}
            />
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
