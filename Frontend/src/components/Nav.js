import React from 'react';
import logo from "../img/logo.png"
import login from "../img/login.png"
import "./Nav.css";
import { BrowserRouter,NavLink, Route, Switch } from 'react-router-dom';

import Slider from "../pages/Slider.jsx"
import About from "../pages/About.jsx"
import Categories from "../components/Categories.js";
import Contact from "../pages/Contact.jsx";
import Login from "../pages/Login.jsx";



function Nav() {
    return (

        <BrowserRouter>
            <div className="nav">
                <div id="logo">
                <a to="/" exact activeClassName="active">
                <img src= {logo} alt="First slide"/>
                </a>
                <h1>  <NavLink to="/" exact activeClassName="active">PIZZA</NavLink></h1>
                    
                </div>

                <ul className="menu">
                    <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
                    <li><NavLink to="/categories" exact activeClassName="active">Categories</NavLink></li>
                    <li><NavLink to="/contact" exact activeClassName="active">Contact</NavLink></li>
                    <li><NavLink to="/about" exact activeClassName="active">About</NavLink></li>
                </ul>

                <div id="login">
                <a href="/login"><img src= {login} alt="First slide"/>
                </a>
                </div>

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
