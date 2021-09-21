import React, { useState } from 'react';
import logo from "../img/logo.png"
import login from "../img/login.png"
import shopping from "../img/shopping.png";
import "./Nav.css";
<<<<<<< HEAD
import { BrowserRouter,NavLink, Route, Switch, Link } from 'react-router-dom';

import Slider from "../pages/Slider.jsx"
import About from "../pages/About.jsx"
import Categories from "../pages/Categories.jsx"
import Contact from "../pages/Contact.jsx"
import Login from "../pages/Login.jsx"
import Shopping from "../pages/Shopping"
import Register from "../pages/Register"



function NavBar() {
    return (

        <BrowserRouter>
            <div className="nav">
                <div id="logo">
                <Link to="/" exact activeClassName="active">
                <img src= {logo} alt="logo"/>
                </Link>
                <h1><NavLink to="/" exact activeClassName="active">PIZZA</NavLink></h1>
                    
                </div>

                <div>

                <ul className="menu">
                    <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
                    <li><NavLink to="/categories" exact activeClassName="active">Categories</NavLink></li>
                    <li><NavLink to="/contact" exact activeClassName="active">Contact</NavLink></li>
                    <li><NavLink to="/about" exact activeClassName="active">About</NavLink></li>
                   
                </ul>
                
                </div>

                <div id="login">

                <a href="/shopping" id="shopping"><img src= {shopping} alt="shopping"/>
                </a>

                <a href="/login"><img src= {login} alt="login"/>
                </a>

                

                </div>

            </div>
            

            <Switch>
            <Route exact path="/" component={ Slider } />
            <Route path="/categories" component={ Categories }/>
            <Route path="/contact" component={ Contact } />
            <Route path="/about" component={ About } />
            <Route path="/login" component={ Login } />
            <Route path="/shopping" component={ Shopping } />
            <Route path="/register" component={ Register } />
            </Switch>

      
            </BrowserRouter>
=======
import { NavLink } from 'react-router-dom';
import { Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from "reactstrap";


function NavBar() {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen)
    return (
>>>>>>> 67cc182520e1a246a09b1c40e2ab93a0085ce778

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
    )
}

export default NavBar
