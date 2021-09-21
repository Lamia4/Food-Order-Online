import React from 'react';
import logo from "../img/logo.png"
import login from "../img/login.png"
import shopping from "../img/shopping.png";
import "./Nav.css";
import { BrowserRouter,NavLink, Route, Switch } from 'react-router-dom';

import Slider from "../pages/Slider.jsx"
import About from "../pages/About.jsx"
import Categories from "../components/Categories.js"
import Contact from "../pages/Contact.jsx"
import Login from "../pages/Login.jsx"


function Nav() {
    return (

        <BrowserRouter>
            
        
        <div className="navbar">
            <Container fluid className="navContainer p-2 justify-content-space-between">
            <Navbar dark expand="sm" fixed="top" className="justify-content-space-between navbarBg">
                <NavbarBrand className="logo">
                    <img src= {logo} alt="logo"/>
                </NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                    <Collapse isOpen={isOpen} navbar className="justify-content-center">
                        <Nav navbar className="navMenu">
                            <NavItem>
                                <NavLink to="/" className="navItems">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/categories" className="navItems">Categories</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/contact" className="navItems">Contact</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/about" className="navItems">About</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                <NavItem className="navIcons">
                    <NavLink to="/shopping" className="shopping" >
                        <img style={{height: "5vh"}} src= {shopping} alt="shopping"/>
                    </NavLink>
                </NavItem>
                <NavItem className="navIcons">
                    <NavLink to="/login" className="loginIcon">
                        <img style={{height: "5vh"}} src= {login} alt="login"/>
                    </NavLink> 
                </NavItem>
                </Navbar>
            </Container>    
        </div>

            <Switch>
            <Route exact path="/" component={ Slider } />
            <Route path="/categories" component={ Categories }/>
            <Route path="/contact" component={ Contact } />
            <Route path="/about" component={ About } />
            <Route path="/login" component={ Login } />           
            </Switch>

      
            </BrowserRouter>

            
       
    )
}

export default Nav
