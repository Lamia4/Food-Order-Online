import React, { useState } from 'react';
import logo from "../img/logo.png"
import login from "../img/login.png"
import shopping from "../img/shopping.png"
import "./Nav.css";
import { NavLink } from 'react-router-dom';
import { Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from "reactstrap";



function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen)
    return (

        
            <div className="navbar">
            <Container fluid className="p-2" style={{justifyItems: "stretch"}}>
            <Navbar color="danger" dark expand="md" fixed="top" className="mr-2">
                <NavbarBrand className="logo"><img src= {logo} alt="logo"/></NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar>
                        <NavItem >
                            <NavLink to="/" className="navItems">Home</NavLink>
                            <NavLink to="/categories" className="navItems">Categories</NavLink>
                            <NavLink to="/contact" className="navItems">Contact</NavLink>
                            <NavLink to="/about" className="navItems">About</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
                <NavItem>
                <NavLink to="/shopping" ClassName="shopping" ><img style={{height: "5vh"}} src= {shopping} alt="shopping"/></NavLink> 
                <NavLink to="/shopping" ClassName="loginIcon" ><img style={{height: "5vh"}} src= {login} alt="login"/></NavLink> 
                </NavItem>
                </Navbar>
            </Container>    
            </div>
            

            

    

            
       
    )
}

export default NavBar
