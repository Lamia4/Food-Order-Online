import React, { useState } from 'react';
import {Input, Form , FormGroup,} from 'reactstrap';


import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import "./Login.css"

import Register from "../pages/Register.jsx"

function Login()
{
    return(
           


 <Form className="contact-form">

 <h1>login</h1>
   <FormGroup className="row">

   <Input type="text" className="contact-form-text" placeholder="User Name or Email"/>
 <Input type="password" className="contact-form-text" placeholder="Your Password"/>
 <p>Einer neuer User erstelen <Link to="/register" exact activeClassName="active">Register.</Link></p>

 <input type="submit" class="contact-form-btn" value="Send"/>



</FormGroup>

  
 </Form>


   


    );
}
export default Login;