import {useState, createContext} from 'react';
import getLogin from '../API/getLogin';

export const LoginContext = createContext({});

function LoginProvider({children}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const[isLogged, setIsLogged] = useState(false);
    // const[isUser, setIsUser] = useState({name: "", role: "", token:""});
    const[getUser, setGetUser] = useState({});
    const[isLoggedOut, setIsLoggedOut] = useState(false);
    const[showCartCount, setShowCartCount] = useState(true);
    const [showError, setShowError] = useState(false);
    const [admin, setAdmin] = useState(false);


    return (
        <LoginContext.Provider value={{isLogged, setIsLogged, getUser, setGetUser, isLoggedOut, setIsLoggedOut, showCartCount, setShowCartCount, email, setEmail, password, setPassword, showError, setShowError, admin, setAdmin}}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginProvider