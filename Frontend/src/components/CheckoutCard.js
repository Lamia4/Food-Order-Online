import React, {useState}from 'react';
import {Input, Form , FormGroup,Button, Col} from 'reactstrap';


import {Link,useHistory} from 'react-router-dom';
// import "../pages/Login.css";


function CheckoutCard() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();  
    const centerWindow = window.screen.height/2;
    console.log(centerWindow);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await fetch('http://localhost:3438/user/login', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {
            'Content-type': "application/json"
            }
            }).then(response => response.json())
            .then(data => {
            console.log(data);
            history.push("/") ;
            return data;
            });
            
            
        }catch(error){
            console.log(error)
        } 
    };

    return(
            <Col xs ={10}sm={9} md={6} lg={4} xl={3} className=" border  " style={{position:"absolute", top:"50%", left:"50%",transform: "translate(-50%, -50%)", backgroundColor:"#FCBF49"}}>
            <Form className="" style={{display:"flex", flexDirection:"column"}}>
                <h1 style={{textAlign:"center", marginTop:"30px", marginBottom:"30px"}}>Login</h1>
                <FormGroup className=""  >
                    <Input type="text" className="mb-3 " placeholder="User Name or Email"  value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <Input type="password" className="mb-3" placeholder="Your Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <p>Don't have an account <Link to="/register" exact >Register.</Link></p>
                </FormGroup>
                <FormGroup className="" style={{display:"flex", flexDirection:"row", justifyContent:"flex-end"}}>

                    <Button type="submit" className="d-flex mb-4 " style={{borderRadius: "10px", backgroundColor: "#E75414", color: "white",border:"none",display:"flex", justifyContent:"flex-end"}} onClick={handleLogin}>Send</Button>
                </FormGroup>
            </Form>
            </Col>
        )
}

export default CheckoutCard