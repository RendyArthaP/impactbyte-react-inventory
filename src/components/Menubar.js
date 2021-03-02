import React, {useState} from 'react'
import { Navbar, NavbarBrand, Nav, Button } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalItem from './Modal/ModalItem';

const Menubar = () => {
  const history = useHistory()
  const dataUserJSON = localStorage.getItem("user")
  const dataUserObj = JSON.parse(dataUserJSON)
  const isLoggedin = JSON.parse(localStorage.getItem("isLogin"))
  const [handleModal, setHandleModal] = useState(false)

  if(!isLoggedin) {
    history.push("/")
  }

  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <NavbarBrand>
          <Link to="/home" className="text-white">
            Home 
          </Link>
        </NavbarBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <span>
              <Link to="/inventory" className="mr-2 text-white">Inventory</Link>
            </span>
          </Nav>
          {isLoggedin && (
            <span className="mr-3 text-white">Hello, {dataUserObj.name}</span>
          )}
          <Button 
            variant="outline-danger" 
            onClick={() => setHandleModal(true)}
          >
            Logout
          </Button>
        </Navbar.Collapse>
      </Navbar>
      <ModalItem 
        handleModal={handleModal}
        setHandleModal={setHandleModal}
      />
    </div>
  )
}

export default Menubar
