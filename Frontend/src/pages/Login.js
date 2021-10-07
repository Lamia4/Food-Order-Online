
import React, {useState, useContext}from 'react';
import {Input, Form , FormGroup,Button, CardText} from 'reactstrap';
import getLogin from "../API/getLogin";
import {LoginContext} from '../components/LoginProvider.js';
import {CartContext} from "../components/CartProvider.js";
import {TokenContext} from "../components/TokenProvider.js";

import {Link,useHistory} from 'react-router-dom';
import "./Login.css"


function Login() {

    
    const history = useHistory();
    const {setIsLogged, setGetUser, showError, setShowError, setEmail, setPassword, email, password, admin, setAdmin} = useContext(LoginContext);
    const {setUserToken} = useContext(TokenContext);


    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const userData = await getLogin(email, password);
            console.log("userData after fetch", userData);
            if(userData.token) {
            setIsLogged(true);
            const userObj = {
                id: userData._id,
                name: userData.name,
                role: userData.role,
                token: userData.token
            };
            setGetUser(userObj);
            setUserToken(userObj.token);
            if(userData.role === 1){
                setAdmin(true)
            };
            console.log(admin);
            history.push("/");

            } else {
                setShowError(true);
                setEmail("");
                setPassword("")      
            }
            
            
            
        }catch(error){
            console.log(error)
        } 
    };

    return(

 <Form className="contact-form">

 <h1>login</h1>

   <FormGroup className="row">

      <Input type="text" className="contact-form-text" placeholder="User Name or Email"  value={email} onChange={(e) => setEmail(e.target.value)}/>
      <Input type="password" className="contact-form-text" placeholder="Your Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      {showError? (<CardText style={{color:"red", textDecoration:"underline"}}>Your password or email is incorrect!</CardText>): null }
      <CardText>Einer neuer User erstelen <Link to="/register">Register.</Link></CardText>

      {/* <input type="submit" class="contact-form-btn" value="Send" onClick={handleLogin}/> */}
      <Button type="submit" className="contact-form-btn" onClick={handleLogin}>Send</Button>
      


</FormGroup>

  
 </Form>


    );
}
export default Login;