
import React, {useContext}from 'react';
import {Input, Form , FormGroup,Button, CardText, CardTitle} from 'reactstrap';
import getLogin from "../API/getLogin";
import {LoginContext} from '../components/LoginProvider.js';
import {TokenContext} from "../components/TokenProvider.js";
import {Link,useHistory} from 'react-router-dom';
import "./Login.css"

function Login() {

    const history = useHistory();
    const {setIsLogged, setUser, showError, setShowError, setEmail, setPassword, email, password, admin, setAdmin} = useContext(LoginContext);
    const {setUserToken} = useContext(TokenContext);

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const userData = await getLogin(email, password);
            if(userData.token) {
            setIsLogged(true);
            const userObj = JSON.parse(localStorage.getItem("user"));
            setUser(userObj);
            setUserToken(userObj.token);
            if(userData.role === 1){
                setAdmin(true);
            };
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

 <CardTitle style={{color: "white", fontSize: "40px"}}>login</CardTitle>

   <FormGroup className="row">

      <Input type="text" className="contact-form-text" placeholder="Email"  value={email} onChange={(e) => setEmail(e.target.value)}/>
      <Input type="password" className="contact-form-text" placeholder="Your Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      {showError? (<CardText style={{color:"yellow", textDecoration:"underline"}}>Your password or email is incorrect!</CardText>): null }
      <CardText style={{color: "white"}}>Create Your Account:  <Link to="/register" style={{color: "yellow", marginLeft: "5px"}}>Register.</Link></CardText>
      <Button type="submit" className="contact-form-btn" onClick={handleLogin}>Send</Button>
      


</FormGroup>

  
 </Form>


    );
}
export default Login;