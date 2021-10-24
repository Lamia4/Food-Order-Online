import React from 'react'
import { CardText, Button } from "reactstrap";
import { useHistory }from "react-router-dom";

function Logout() {

    const history= useHistory();
    const handleHomepage = () => {
        history.push("/")
    };

    return (
        <div style={{textAlign:'center', marginTop: "7vh", fontSize: "25px"}}>
            <CardText style={{color: "white"}}>You are logged out!</CardText>
            <Button style={{marginRight:"20px", backgroundColor:"#A61C3C", border:"none", borderRadius:"10px"}} onClick={handleHomepage}>Homepage</Button>
        </div>
    )
}

export default Logout
