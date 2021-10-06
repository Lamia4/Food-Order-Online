import {useState, createContext} from 'react';
import Buffer from "buffer";
import { ifError } from 'assert';

export const TokenContext = createContext({});


function TokenProvider({children}){
    const [userToken, setUserToken] = useState("");
    
    const decodeUserToken = (token) => {
        const buff = Buffer.from(token, "base64");
        const decodedString = buff.toString("ascii");
        // const base64Payload = token.split(".")[1];
        // const payload = Buffer.from(base64Payload, "binary");
        
        // // const decodedString = Buffer.from(token).toString("binary");
        console.log("der sieht den tokenprovider", decodedString);
    }
    function isTokenExpired() {
        const user = JSON.parse(localStorage.getItem("user"));
        console.log("user", user); 
        if(!user || !user.token) {
            return false
        }
        
        const splitToken = user.token.split('.')[1];
        console.log("splitToken", splitToken);
        const expiry = JSON.parse(atob(splitToken)).exp; 
        console.log("expiry", expiry);
        return expiry
        // return (Math.floor((new Date).getTime() / 1000)) >= expiry; 
    } 

    return (
        <TokenContext.Provider value={{userToken, setUserToken, decodeUserToken, isTokenExpired}}>
            {children}
        </TokenContext.Provider>
    )

}
export default TokenProvider