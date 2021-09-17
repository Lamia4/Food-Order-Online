import React, { useState } from 'react';
import logo from "../img/logo.png"
import login from "../img/login.png"
import shopping from "../img/shopping.png"
import "./Nav.css";
import { NavLink } from 'react-router-dom';
import { Container, Collapse, Navbar, NavbarToggler } from "reactstrap";



function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen)
    return (

        
            <div className="navbar">
            <Container fluid className="p-2" style={{justifyItems: "stretch"}}>
            <Navbar color="danger" dark expand="md" fixed="top" className="mr-2">
                <div id="logo">
                <a to="/" exact ClassName="active">
                <img src= {logo} alt="logo"/>
                </a>
                <NavLink to="/" exact ClassName="active">PIZZA</NavLink>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar style={{justifyContent: "space-between", justifyItems: "center"}}>
                <ul className="menu" style={{display: "flex", flexGrow: "1", flexWrap: "wrap",justifyContent: "center", padding: "10px 0"}}>
                    <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
                    <li><NavLink to="/categories" exact activeClassName="active">Categories</NavLink></li>
                    <li><NavLink to="/contact" exact activeClassName="active">Contact</NavLink></li>
                    <li><NavLink to="/about" exact activeClassName="active">About</NavLink></li>
                </ul>
                </Collapse>
                    
                </div>
                
                <div>

                
                </div>
                <div id="login">

                <a href="/shopping" id="shopping"><img src= {shopping} alt="shopping"/>
                </a>

                <a href="/login"><img src= {login} alt="login"/>
                </a>

                

                </div>
                </Navbar>
            </Container>    



            </div>
            

            

    

            
       
    )
}

export default NavBar
