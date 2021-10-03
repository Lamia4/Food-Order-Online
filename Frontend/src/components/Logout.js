import React,{useContext, useEffect} from 'react'
import {LoginContext} from "./LoginProvider";

function Logout() {

    const {setIsLogged, setShowCartCount} = useContext(LoginContext);
    

    useEffect(() => {
        setIsLogged(false); // Toggle = Gegenteil von einem Bool Wert
        setShowCartCount(false)
    }, [])

    return (
        <div style={{textAlign:'center', marginTop: "30px", fontSize: "20px"}}>
            <p>You are logged out!</p>
        </div>
    )
}

export default Logout
