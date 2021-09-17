import React from 'react';
import {Input, Form , FormGroup,} from 'reactstrap';

function Register() {
    return (
        
      <Form className="contact-form ">

      <h1>Register</h1>
        <FormGroup className="row">

        <Input type="text" className="contact-form-text" placeholder="Name"/>

      <Input type="email" className="contact-form-text" placeholder="Email"/>
      <Input type="password" className="contact-form-text" placeholder="Password"/>
      <input type="submit" class="contact-form-btn" value="Send"/>



  </FormGroup>

       
      </Form>


           
       
    )
}

export default Register;
