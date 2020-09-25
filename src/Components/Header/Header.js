import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import logo from '../../image/Logo.png'

const Header = () => {
    return (
        <Navbar expand="lg">
        <Navbar.Brand style={{marginLeft:'50px'}}>
            <img style={{filter:'brightness(800%)'}} src={logo} width="100" height="50" alt=""/>
        </Navbar.Brand>
           <Form inline style={{marginLeft:'70px'}}>
                <FormControl type="text" placeholder="Search Your destination" className="mr-sm-2" />
            </Form>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link to="news" style={{marginLeft:'70px',color:'white'}}>News</Nav.Link>
                <Nav.Link to="destination" style={{marginLeft:'70px', color:'white'}}>Destination</Nav.Link>
                <Nav.Link to="blog" style={{marginLeft:'70px', color:'white'}}>Blog</Nav.Link>
                <Nav.Link to="home" style={{marginLeft:'70px', color:'white'}}>Contact</Nav.Link>
                <Button variant="danger" style={{marginLeft:'200px'}}>Login</Button>
            </Nav>
            
        </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;