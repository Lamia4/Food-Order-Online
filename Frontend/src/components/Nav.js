import React from 'react';
import { NavBa } from 'react-bootstrap';

import logo from "../img/logo.png"
import login from "../img/login.png"
import shopping from "../img/shopping.png"
import "./Nav.css";
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

            
       
    )
}

export default NavBar
