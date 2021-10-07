import React, { useState } from 'react';
import logo from "../img/logo.png"
import login from "../img/login.png"
import shopping from "../img/shopping3.png";
import "./Nav.css";
import { NavLink } from 'react-router-dom';
import { Container, Collapse, Navbar, NavbarToggler, NavItem } from "reactstrap";


function NavBar() {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen)
    return (
        <header>
            <Container fluid className="p-0 my-5" style={{justifyItems: 'stretch'}}>
                <Navbar style={{backgroundColor:"darkorange"}} dark expand="md" fixed="top" className="py-2 px-0">
                    <NavLink className="logo" to="/">
                        <h1>Logo</h1>  
                    </NavLink>

                    <NavbarToggler onClick={toggle} />

                    <Collapse className="collapseRight" isOpen={isOpen} navbar style={{justifyContent: "space-between", justifyItems: "center"}}>
                        <NavItem className="navIcons">
                            <NavLink to="/login" className="loginIcon">
                                
                            </NavLink> 
                        </NavItem>
                        <nav style={{display: "flex", flexGrow: "1", flexWrap: "wrap",justifyContent: "center", padding: "10px 0"}}>
                            <NavLink style={{marginRight:"20px"}} className="" exact to="/">Home</NavLink>
                            <NavLink style={{marginRight:"20px"}} to="/">Categories</NavLink>
                            <NavLink style={{marginRight:"20px"}} to="/contact">Contact</NavLink>
                            <NavLink  to="/about">About</NavLink>
                        </nav>
                        <nav className="navCenter" style={{display: "flex", flexGrow: "1", flexWrap: "wrap",justifyContent: "flex-end"}}>
                            <NavLink  to="/login" style={{marginRight:"20px"}} className="" ><img style={{height: "5vh"}} src= {login} alt="login"/></NavLink>
                            <NavLink style={{marginRight:"20px"}} to="/shopping"><img style={{height: "5vh"}} src= {shopping} alt="shopping"/></NavLink>
                        </nav>
                    </Collapse>    
                </Navbar>
        </Container>
        </header>     
    )
}

export default NavBar
