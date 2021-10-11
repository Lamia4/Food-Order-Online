import React,{useContext, useEffect} from 'react'
import {LoginContext} from "./LoginProvider";
import { useHistory } from "react-router-dom";

function Logout() {

    const {setIsLogged, setShowCartCount} = useContext(LoginContext);
    const history = useHistory();

    // useEffect(() => {
    //     // setIsLogged(false);
    //     // setShowCartCount(false);
    //     // history.push("/")
    // }, [])

    return (
        <div style={{textAlign:'center', marginTop: "30px", fontSize: "20px"}}>
            <p>You are logged out!</p>
        </div>
    )
}

export default Logout
