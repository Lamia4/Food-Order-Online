import {useState, createContext} from 'react';

export const TokenContext = createContext({});


function TokenProvider({children}){
    const [userToken, setUserToken] = useState("");
    
    function isTokenExpired() {
        const user = JSON.parse(localStorage.getItem("user"));
        if(!user || !user.token) {
            return false
        }
        
        const splitToken = user.token.split('.')[1];
        const expiry = JSON.parse(atob(splitToken)).exp; 
        const firstNum = Date.now()/1000;
        const end = Math.round(firstNum);
        const result = expiry - end;
        if (result <= 0) {
            const endResult = true;
            return endResult
        }
        const endResult = false;
        setUserToken(user.token)
        return endResult;
    } 

    return (
        <TokenContext.Provider value={{userToken, setUserToken, isTokenExpired}}>
            {children}
        </TokenContext.Provider>
    )

}
export default TokenProvider