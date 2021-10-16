import React, {useContext}from 'react';
import {Input, Form , FormGroup, Button, CardTitle} from 'reactstrap';
import {LoginContext} from '../components/LoginProvider.js';
import {TokenContext} from "../components/TokenProvider.js";
import register from "../API/register.js";
import {useHistory} from 'react-router-dom';

function Register() {

    const history = useHistory();
    const {setIsLogged, setUser,  setShowError, setEmail, setPassword, email, password, name, setName, surname, setSurname, street, setStreet, postalCode, setPostalCode, city, setCity, setRegistered} = useContext(LoginContext);
    const {setUserToken} = useContext(TokenContext);

    const handleRegister = async (e) => {
      e.preventDefault();

      try {
          const userData = await register(name, surname, street, postalCode, city, email, password);
          if(userData.token) {
          setIsLogged(true);
          setRegistered(true);
          const userObj = JSON.parse(localStorage.getItem("user"));
          setUser(userObj);
          setUserToken(userObj.token);
          history.push("/successregister");
          } else {
              setShowError(true);
              setEmail("");
              setPassword("");  
          }
    
      }catch(error){
          return error
      } 
  };
    return (
        
      <Form className="contact-form" >

      <CardTitle style={{color: "white", fontSize: "40px"}}>Register</CardTitle>
      <FormGroup className="row">
      <Input type="text" className="contact-form-text" placeholder="Name"  value={name} onChange={(e) => setName(e.target.value)}/>
      <Input type="text" className="contact-form-text" placeholder="surname"  value={surname} onChange={(e) => setSurname(e.target.value)}/>
      <Input type="text" className="contact-form-text" placeholder="Street"  value={street} onChange={(e) => setStreet(e.target.value)}/>
      <Input type="number" className="contact-form-text" placeholder="postalCode"  value={postalCode} onChange={(e) => setPostalCode(e.target.value)}/>
      <Input type="text" className="contact-form-text" placeholder="city"  value={city} onChange={(e) => setCity(e.target.value)}/>
      <Input type="email" className="contact-form-text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <Input type="password" className="contact-form-text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      <Button  type="submit" className="contact-form-btn" onClick={handleRegister}>Send</Button >

  </FormGroup>

       
      </Form>


           
       
    )
}

export default Register;
