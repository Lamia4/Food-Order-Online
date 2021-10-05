import React, {useState, useEffect} from 'react';
import {Input, Form , FormGroup,Button, Col, CardText, CardSubtitle} from 'reactstrap';
import getLogin from "../API/getLogin";
import {LoginContext} from '../components/LoginProvider.js';
import {CartContext} from "../components/CartProvider.js";

function CheckoutCard({isFullOpacity, setIsFullOpacity, setIsCheckout}) {
    const [isDisplayLogin, setIsDisplayLogin] = useState(true);
    const [isDisplayRegister, setIsDisplayRegister] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const centerWindow = window.screen.height/2;
    console.log(centerWindow);

    // const {setIsLogged, setGetUser, LoggedUser, getUser} = useContext(LoginContext);
    const currentCart = React.useContext(CartContext);
    const LoginFunctions = React.useContext(LoginContext);


    const handleLogin = async (e) => {
        e.preventDefault();

        const loginUserInfo = {
            email: email,
            password: password
        };
        console.log("user", loginUserInfo);
        try {
            const userData = await getLogin(email, password);
            console.log("userData after fetch", userData);
            LoginFunctions.setIsLogged(true);
            const name = userData.name;
            const role = userData.role;
            const token = userData.token
            LoginFunctions.setGetUser({
                name,
                role,
                token
            })            
            console.log("userInformation", LoginFunctions.getUser);
            setIsCheckout(false);
            setIsFullOpacity(true);



        }catch(error){
            console.log(error)
        } 
    };

    const handleRemoveLogin= () =>{
        setIsDisplayLogin(false);
        setIsDisplayRegister(false);
        setIsFullOpacity(true);
        setIsCheckout(false);

    }
    
  

    const handleToggle = ()=>{
        isDisplayLogin ? setIsDisplayLogin(false) : setIsDisplayLogin(true);
        console.log(isDisplayLogin);
    }
   
    return(
        <>
        {
            isDisplayLogin ? (
            <Col xs ={10}sm={9} md={6} lg={4} xl={3} className=" border" style={{position:"relative", backgroundColor:"#FCBF49"}}>
                <Form className="" style={{display:"flex", flexDirection:"column"}}>
                    <h1 style={{textAlign:"center", marginTop:"30px", marginBottom:"30px"}}>Login</h1>
                    <FormGroup className=""  >
                        <Input type="text" className="mb-3 " placeholder="Your Email"  value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <Input type="password" className="mb-3" placeholder="Your Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <CardText>Don't have an account <CardSubtitle style={{cursor:"pointer", textDecoration:"underline"}} onClick={handleToggle} >Register.</CardSubtitle></CardText>
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

            <Col xs ={10}sm={9} md={6} lg={4} xl={3} className=" border  " style={{display: isDisplayRegister ? "flex": "none", position:"relative",backgroundColor:"#FCBF49"}}>
                <Form className="" style={{display: "flex", flexDirection:"column"}}>
                    <h1 style={{textAlign:"center", marginTop:"30px", marginBottom:"30px"}}>Register</h1>
                    <FormGroup className=""  >
                        <Input type="text" className="mb-3 " placeholder="Your Name"  value={name} onChange={(e) => setName(e.target.value)}/>
                        <Input type="text" className="mb-3 " placeholder="Your Email"  value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <Input type="password" className="mb-3" placeholder="Your Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <CardText>Don't have an account <CardSubtitle style={{cursor:"pointer", textDecoration:"underline"}} onClick={handleToggle} >Login.</CardSubtitle></CardText>
                    </FormGroup>
                    <FormGroup className="" style={{display:"flex", flexDirection:"row", justifyContent:"flex-end"}}>

                        <Button type="submit" className="d-flex mb-4 " style={{borderRadius: "10px", backgroundColor: "#E75414", color: "white",border:"none",display:"flex", justifyContent:"flex-end"}} onClick={handleLogin}>Send</Button>
                        <CardText style={{ width:"22px",height:"22px",alignItems:"center",paddingLeft:" 5px",justifyContent:"center",  position:"absolute", top:"2px", right:"2px", color:"red",  border:"1px solid ", cursor:"pointer"}} onClick={handleRemoveLogin}>X</CardText>
                    </FormGroup>
                </Form>
            </Col>
            )
        }


        </>
        )
}

export default CheckoutCard