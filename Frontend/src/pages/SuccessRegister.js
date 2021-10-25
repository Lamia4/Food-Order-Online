import React, {useContext} from 'react';
import{ CardText, Button} from "reactstrap";
import { useHistory }from "react-router-dom";
import {LoginContext} from "../components/LoginProvider.js";

function SuccessRegister() {

    const history= useHistory();
    const {user} = useContext(LoginContext);

    const handleHomepage = () => {
        history.push("/")
    };
    console.log("userRegistered", user.user);
    const handleCart = () => {
        history.push("/shopping")
    }

    return (
        <div style={{textAlign:'center', marginTop: "7vh", fontSize: "25px"}}>
        <CardText style={{color: "white"}}>You registered successfully!</CardText>
        <Button style={{marginRight:"20px", backgroundColor:"#A61C3C", border:"none", borderRadius:"10px"}} onClick={handleHomepage}>Homepage</Button>
        <Button className="bg-success" style={{ border:"none", borderRadius:"10px"}} onClick={handleCart}>ShoppingCart</Button>
    </div>
    )
}

export default SuccessRegister
