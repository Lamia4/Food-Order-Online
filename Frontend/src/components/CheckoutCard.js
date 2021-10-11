import React, {useState, useContext} from 'react';
import {Input, Form , FormGroup,Button, Col, CardText, CardSubtitle, CardTitle} from 'reactstrap';
import getLogin from "../API/getLogin";
import {LoginContext} from '../components/LoginProvider.js';
import { useHistory } from "react-router-dom";
import { TokenContext } from "../components/TokenProvider.js";
import "./CheckoutCard.css";

function CheckoutCard() {

    const [isDisplayLogin, setIsDisplayLogin] = useState(true);
    const [isDisplayRegister, setIsDisplayRegister] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const {setIsLogged, setUser, setShowError, setAdmin, setIsCheckout, setIsNoOpacity, isNoOpacity } = useContext(LoginContext);
    const { setUserToken } = useContext(TokenContext);
    const history = useHistory();

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
            console.log(error)
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
        console.log(isDisplayLogin);
    }
   
    return(
        <div className="checkoutcard">
        {
            isDisplayLogin ? (
            <Col xs ={10}sm={9} md={6} lg={4} xl={3} className=" border" style={{position:"relative", backgroundColor:"#C58882"}}>
                <Form className="" style={{display:"flex", flexDirection:"column"}}>
                    <h1 style={{textAlign:"center", marginTop:"30px", marginBottom:"30px"}}>Login</h1>
                    <FormGroup className=""  >
                        <Input type="text" className="mb-3 " placeholder="Your Email"  value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <Input type="password" className="mb-3" placeholder="Your Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <CardTitle>Don't have an account </CardTitle>
                        <CardSubtitle style={{cursor:"pointer", textDecoration:"underline"}} onClick={handleToggle} >Register.</CardSubtitle>
                    </FormGroup>
                    <FormGroup className="" style={{display:"flex", flexDirection:"row", justifyContent:"flex-end"}}>

                        <Button type="submit" className="d-flex mb-4 " style={{borderRadius: "10px", backgroundColor: "#E75414", color: "white",border:"none",display:"flex", justifyContent:"flex-end"}} onClick={handleLogin}>Send</Button>
                        <CardText style={{ width:"22px",height:"22px",alignItems:"center",paddingLeft:" 5px",justifyContent:"center",  position:"absolute", top:"2px", right:"2px", color:"red",  border:"1px solid ", cursor:"pointer"}} onClick={handleRemoveLogin}>X</CardText>
                    </FormGroup>
                </Form>
            </Col>

            )
            :
            (

            <Col xs ={10}sm={9} md={6} lg={4} xl={3} className=" border  " style={{display: isDisplayRegister ? "flex": "none", position:"relative",backgroundColor:"#C58882"}}>
                <Form className="" style={{display: "flex", flexDirection:"column"}}>
                    <h1 style={{textAlign:"center", marginTop:"30px", marginBottom:"30px"}}>Register</h1>
                    <FormGroup className=""  >
                        <Input type="text" className="mb-3 " placeholder="Your Name"  value={name} onChange={(e) => setName(e.target.value)}/>
                        <Input type="text" className="mb-3 " placeholder="Your Email"  value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <Input type="password" className="mb-3" placeholder="Your Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <CardTitle>Don't have an account</CardTitle> 
                        <CardSubtitle style={{cursor:"pointer", textDecoration:"underline"}} onClick={handleToggle} >Login.</CardSubtitle>
                    </FormGroup>
                    <FormGroup className="" style={{display:"flex", flexDirection:"row", justifyContent:"flex-end"}}>

                        <Button type="submit" className="d-flex mb-4 " style={{borderRadius: "10px", backgroundColor: "#E75414", color: "white",border:"none",display:"flex", justifyContent:"flex-end"}} onClick={handleLogin}>Send</Button>
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