import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from "react-router-dom"

const Headers = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink to="/" className=" text-light text-decoration-none"><h1>Otp</h1></NavLink>
          <Nav className="">
            <NavLink to="/home" className="mt-3 mx-4 text-light text-decoration-none"><h5>Home</h5></NavLink>
          </Nav>
          <Nav className="">
            <NavLink to="/about" className="mt-3 mx-4 text-light text-decoration-none"><h5>About</h5></NavLink>
          </Nav>
          <Nav className="">
            <NavLink to="/contact" className="mt-3 mx-4 text-light text-decoration-none"><h5>Contact</h5></NavLink>
          </Nav>
          <Nav className="">
            <NavLink to="/register" className="mt-3 mx-4 text-light text-decoration-none"><h5>Register</h5></NavLink>
          </Nav>
          <Nav className="">
            <NavLink to="/" className="mt-3 mx-4 text-light text-decoration-none"><h5>Login</h5></NavLink>
            <img src="account-avatar-profile-user-11.svg" style={{width:50, borderRadius:50}} alt="" />
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Headers;