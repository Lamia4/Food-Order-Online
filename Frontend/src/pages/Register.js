import React, {useContext}from 'react';
import {Input, Form , FormGroup, Button, CardTitle, Col, Row} from 'reactstrap';
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
        
    <Row style={{justifyContent:"center",  width:"100%"}} className="mx-0 p-0">   
    <Col style={{}} xs={9} sm={8} md={8} lg={6} xl={4}>
      <Form  style={{marginTop: "10vh", marginBottom:"5vh"}}>

      <CardTitle style={{color: "white", fontSize: "40px", textAlign:"center"}}>Register</CardTitle>
      <FormGroup className="row">
      <Input type="text" className=" p-2 mb-2" placeholder="name"  value={name} onChange={(e) => setName(e.target.value)}/>
      <Input type="text" className="p-2 mb-2" placeholder="surname"  value={surname} onChange={(e) => setSurname(e.target.value)}/>
      <Input type="text" className="p-2 mb-2" placeholder="street"  value={street} onChange={(e) => setStreet(e.target.value)}/>
      <Input type="number" className="p-2 mb-2" placeholder="postalCode"  value={postalCode} onChange={(e) => setPostalCode(e.target.value)}/>
      <Input type="text" className="p-2 mb-2" placeholder="city"  value={city} onChange={(e) => setCity(e.target.value)}/>
      <Input type="email" className="p-2 mb-2" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <Input type="password" className="p-2 mb-2" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      <Button  type="submit" className="p-2 mb-2" onClick={handleRegister}>Send</Button >

    </FormGroup>

       
      </Form>

    </Col>
    </Row> 


           
       
    )
}

export default Register;
