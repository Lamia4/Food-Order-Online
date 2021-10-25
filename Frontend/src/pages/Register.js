import React, {useContext}from 'react';
import {Input, Form , FormGroup, Button, CardTitle, Col, Row, CardText} from 'reactstrap';
import {LoginContext} from '../components/LoginProvider.js';
import {TokenContext} from "../components/TokenProvider.js";
import register from "../API/register.js";
import {useHistory, Link} from 'react-router-dom';

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
    <Col style={{marginTop: "8vh", border: "white 3px solid"}} xs={9} sm={8} md={8} lg={6} xl={4}>
      <Form className=" p-4" style={{margin: "auto"}}>

      <CardTitle style={{color: "white", fontSize: "40px", textAlign:"center"}}>Register</CardTitle>
      <FormGroup className="row">
      <Input type="text" className=" p-2 mb-3" placeholder="Name"  value={name} onChange={(e) => setName(e.target.value)}/>
      <Input type="text" className="p-2 mb-3" placeholder="Surname"  value={surname} onChange={(e) => setSurname(e.target.value)}/>
      <Input type="text" className="p-2 mb-3" placeholder="Street"  value={street} onChange={(e) => setStreet(e.target.value)}/>
      <Input type="number" className="p-2 mb-3" placeholder="PostalCode"  value={postalCode} onChange={(e) => setPostalCode(e.target.value)}/>
      <Input type="text" className="p-2 mb-3" placeholder="City"  value={city} onChange={(e) => setCity(e.target.value)}/>
      <Input type="email" className="p-2 mb-3" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <Input type="password" className="p-2 mb-3" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      <CardText style={{color: "white"}}>Do you have an account? Click here:  <Link to="/login" style={{color: "yellow", marginLeft: "5px"}}>Login.</Link></CardText>
      <Button  type="submit" className="p-2 mb-3" style={{backgroundColor:"#A61C3C"}} onClick={handleRegister}>SEND</Button >

    </FormGroup>

       
      </Form>

    </Col>
    </Row> 


           
       
    )
}

export default Register;
