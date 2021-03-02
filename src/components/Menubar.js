import React from 'react'
import { Navbar, NavbarBrand, Nav, Button } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

const Menubar = ({setHandleModal}) => {
  const dataUserJSON = localStorage.getItem("user")
  const dataUserObj = JSON.parse(dataUserJSON)
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <NavbarBrand>
          <Link to="/home" className="text-white">
            Inventory 
          </Link>
        </NavbarBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <span>
              <Link to="#" className="mr-2 text-white">About</Link>
            </span>
            <span>
              <Link to="#" className="mr-2 text-white">Gallery</Link>
            </span>
            <span>
              <Link to="#" className="mr-2 text-white">Cart</Link>
            </span>
          </Nav>
          <span className="mr-3 text-white">Hello, {dataUserObj.name}</span>
          <Button 
            variant="outline-danger" 
            onClick={() => setHandleModal(true)}
          >
            Logout
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Menubar
