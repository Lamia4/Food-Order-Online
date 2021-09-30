import {useState, createContext} from 'react';
import getLogin from "../API/getLogin";

export const LoginContext = createContext("");

function LoginProvider({children}) {

    const[isLogged, setIsLogged] = useState(false);
    const[isUser, setIsUser] = useState({name: "", role: "", token:""});

    const LoginUser = (email, password) => {
        
    }

    return (
        <LoginContext.Provider value={{isLogged, setIsLogged, isUser, setIsUser, LoginUser}}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginProvider