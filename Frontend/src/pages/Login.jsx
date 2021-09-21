
import React, {useState, useHistory}from 'react';
import {Input, Form , FormGroup,} from 'reactstrap';


import {Link} from 'react-router-dom';
import "./Login.css"


function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:3438/user/login', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {
            'Content-type': "application/json"
            }
            }).then(response => response.json())
            .then(data => {
            console.log(data)
            history.push("/")
            return data
            });
            
            
        }catch(error){
            console.log(error)
        } 
    };

    return(

 <Form className="contact-form">

 <h1>login</h1>

   <FormGroup className="row" onSubmit={handleLogin}>

      <Input type="text" className="contact-form-text" placeholder="User Name or Email"  value={email} onChange={(e) => setEmail(e.target.value)}/>
      <Input type="password" className="contact-form-text" placeholder="Your Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      <p>Einer neuer User erstelen <Link to="/register" exact >Register.</Link></p>

      <input type="submit" class="contact-form-btn" value="Send"/>

</FormGroup>

  
 </Form>


    );
}
export default Login;