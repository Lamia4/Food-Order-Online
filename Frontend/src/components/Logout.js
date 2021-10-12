import React,{useContext, useEffect} from 'react'
import {LoginContext} from "./LoginProvider";
import { useHistory } from "react-router-dom";
import { CardText } from "reactstrap";

function Logout() {

    const {setIsLogged, setShowCartCount} = useContext(LoginContext);
    const history = useHistory();

    // useEffect(() => {
    //     // setIsLogged(false);
    //     // setShowCartCount(false);
    //     // history.push("/")
    // }, [])

    return (
        <div style={{textAlign:'center', marginTop: "7vh", fontSize: "25px"}}>
            <CardText style={{color: "white"}}>You are logged out!</CardText>
        </div>
    )
}

export default Logout
