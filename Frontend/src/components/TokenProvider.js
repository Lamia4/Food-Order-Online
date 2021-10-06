import {useState, createContext} from 'react';
import Buffer from "buffer";
import { ifError } from 'assert';

export const TokenContext = createContext({});


function TokenProvider({children}){
    const [userToken, setUserToken] = useState("");
    
    function isTokenExpired() {
        const user = JSON.parse(localStorage.getItem("user"));
        console.log("user", user); 
        if(!user || !user.token) {
            return false
        }
        
        const splitToken = user.token.split('.')[1];
        const expiry = JSON.parse(atob(splitToken)).exp; 
        const firstNum = Date.now()/1000;
        const end = Math.round(firstNum);
        const result = expiry - end;
        if (result <= 0) {
            const endResult = false;
            return endResult
        }
        const endResult = true;
        console.log("endresult", endResult);
        return endResult;
    } 

    return (
        <TokenContext.Provider value={{userToken, setUserToken, isTokenExpired}}>
            {children}
        </TokenContext.Provider>
    )

}
export default TokenProvider