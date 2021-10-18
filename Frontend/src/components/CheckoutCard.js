import React, {useState, useContext} from 'react';
import {Input, Form , FormGroup,Button, Col, CardText, CardSubtitle, CardTitle} from 'reactstrap';
import getLogin from "../API/getLogin";
import {LoginContext} from '../components/LoginProvider.js';
import { useHistory } from "react-router-dom";
import { TokenContext } from "../components/TokenProvider.js";
import register from "../API/register.js";
import "./CheckoutCard.css";

function CheckoutCard() {

    const [isDisplayLogin, setIsDisplayLogin] = useState(true);
    const [isDisplayRegister, setIsDisplayRegister] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const {setIsLogged, setUser, setShowError, setAdmin, setIsCheckout, setIsNoOpacity, setRegistered, surname, street, postalCode, city,setSurname, setStreet, setPostalCode, setCity } = useContext(LoginContext);
    const { setUserToken } = useContext(TokenContext);
    const history = useHistory();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const userData = await getLogin(email, password);
            console.log("userData after fetch", userData);
            if(userData.token) {
            setIsLogged(true);
            const userObj = JSON.parse(localStorage.getItem("user"));
            setUser(userObj);
            setUserToken(userObj.token);
            if(userData.role === 1){
                setAdmin(true)
            };
            } else {
                setShowError(true);
                setEmail("");
                setPassword("")      
            }
            setIsCheckout(false);
            setIsNoOpacity(true)
            
            
        }catch(error){
            return error
        } 
    };
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

    const handleRemoveLogin= () =>{
        setIsDisplayLogin(false);
        setIsDisplayRegister(false);
        setIsNoOpacity(true);
        setIsCheckout(false);

    }
    
  

    const handleToggle = ()=>{
        isDisplayLogin ? setIsDisplayLogin(false) : setIsDisplayLogin(true);
    }
   
    return(
        <div className="checkoutcard">
        {
            isDisplayLogin ? (
            <Col xs ={10}sm={9} md={6} lg={4} xl={3} className=" border" style={{position:"relative", backgroundColor:"#C58882"}}>
                <Form style={{display:"flex", flexDirection:"column", width:"100%"}}>
                    <h1 style={{textAlign:"center", marginTop:"30px", marginBottom:"30px"}}>Login</h1>
                    <FormGroup className="m-3">
                        <Input type="text" className="mb-3 " placeholder="Your Email"  value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <Input type="password" className="mb-3" placeholder="Your Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <CardTitle>Don't have an account </CardTitle>
                        <CardSubtitle style={{cursor:"pointer", textDecoration:"underline"}} onClick={handleToggle} >Register.</CardSubtitle>
                    </FormGroup>
                    <FormGroup style={{display:"flex", flexDirection:"row", justifyContent:"flex-end"}}>

                        <Button type="submit" className="d-flex mb-4" style={{borderRadius: "10px", backgroundColor: "#A61C3C", color: "white",border:"none",display:"flex", justifyContent:"flex-end", marginRight:"20px"}} onClick={handleLogin}>Send</Button>
                        <CardText style={{ width:"22px",height:"22px",alignItems:"center",paddingLeft:" 5px",justifyContent:"center",  position:"absolute", top:"2px", right:"2px", color:"red",  border:"1px solid ", cursor:"pointer"}} onClick={handleRemoveLogin}>X</CardText>
                    </FormGroup>
                </Form>
            </Col>

            )
            :
            (

            <Col xs ={10}sm={9} md={6} lg={4} xl={3} className=" border  " style={{display: isDisplayRegister ? "flex": "none", position:"relative",backgroundColor:"#C58882"}}>
                <Form style={{display: "flex", flexDirection:"column", width:"100%"}}>
                    <h1 style={{textAlign:"center", marginTop:"30px", marginBottom:"30px"}}>Register</h1>
                    <FormGroup className="m-3"  >
                    <Input type="text" className="mb-3 " placeholder="name"  value={name} onChange={(e) => setName(e.target.value)}/>
                    <Input type="text" className="mb-3 " placeholder="surname"  value={surname} onChange={(e) => setSurname(e.target.value)}/>
                    <Input type="text" className="mb-3 " placeholder="street"  value={street} onChange={(e) => setStreet(e.target.value)}/>
                    <Input type="number" className="mb-3 " placeholder="postalCode"  value={postalCode} onChange={(e) => setPostalCode(e.target.value)}/>
                    <Input type="text" className="mb-3 " placeholder="city"  value={city} onChange={(e) => setCity(e.target.value)}/>
                    <Input type="email" className="mb-3 " placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <Input type="password" className="mb-3 " placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </FormGroup>
                    <FormGroup style={{display:"flex", flexDirection:"row", justifyContent:"flex-end"}}>

                        <Button type="submit" className="d-flex mb-4 " style={{borderRadius: "10px", backgroundColor: "#A61C3C", color: "white",border:"none",display:"flex", justifyContent:"flex-end", marginRight:"20px"}} onClick={handleRegister}>Send</Button>
                        <CardText style={{ width:"22px",height:"22px",alignItems:"center",paddingLeft:" 5px",justifyContent:"center",  position:"absolute", top:"2px", right:"2px", color:"red",  border:"1px solid ", cursor:"pointer"}} onClick={handleRemoveLogin}>X</CardText>
                    </FormGroup>
                </Form>
            </Col>
            )
        }


        </div>
        )
}

export default CheckoutCard