import React from 'react';
import {Input, Form , FormGroup,Button} from 'reactstrap';

function Register() {
    return (
        
      <Form className="contact-form ">

      <h1>Register</h1>
        <FormGroup className="row">

        <Input type="text" className="contact-form-text" placeholder="Name"/>

      <Input type="email" className="contact-form-text" placeholder="Email"/>
      <Input type="password" className="contact-form-text" placeholder="Password"/>
      {/* <Button type="submit" class="contact-form-btn" value="Send"/> */}
      <Button type="submit" className="contact-form-btn">Send</Button>

  </FormGroup>

       
      </Form>


           
       
    )
}

export default Register;
