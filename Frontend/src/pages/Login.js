
import React, {useState, useContext}from 'react';
import {Input, Form , FormGroup,Button} from 'reactstrap';
import getLogin from "../API/getLogin";
import {LoginContext} from '../components/LoginProvider.js';
import {CartContext} from "../components/CartProvider.js";


import {Link,useHistory} from 'react-router-dom';
import "./Login.css"


function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    //const LoginFunctions = useContext(LoginContext);
    const {setIsLogged, setGetUser, LoggedUser, getUser} = useContext(LoginContext);
    const currentCart = useContext(CartContext);


    const handleLogin = async (e) => {
        e.preventDefault();
        const loginUserInfo = {
            email: email,
            password: password
        };
        //console.log("user", loginUserInfo);
        try {
            const userData = await getLogin(email, password);
            console.log("userData after fetch", userData.name);
            setIsLogged(true);
            const name = userData.name;
            //console.log(name);
            const role = userData.role;
            //console.log(role);
            const token = userData.token;
            //console.log(token);
            const userObj = {
                name: name,
                role: role,
                token: token
            };
            //console.log("userObj", userObj);
            //LoggedUser(userObj);
            setGetUser(userObj);
            //console.log("userInformation", LoginFunctions.getUser);
            // const newCartObj = JSON.parse(localStorage.getItem("cart"));
            // console.log(newCartObj);
            // if(getUser.name === newCartObj[0].name) {
            //     currentCart.setCart(newCartObj[1]);
            // }
            // console.log(getUser.name, "von logout");
            history.push("/");
            
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
      <p>Einer neuer User erstelen <Link to="/register" exact >Register.</Link></p>

      {/* <input type="submit" class="contact-form-btn" value="Send" onClick={handleLogin}/> */}
      <Button type="submit" className="contact-form-btn" onClick={handleLogin}>Send</Button>
      


</FormGroup>

  
 </Form>


    );
}
export default Login;