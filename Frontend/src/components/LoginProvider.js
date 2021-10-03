import {useState, createContext} from 'react';

export const LoginContext = createContext({});

function LoginProvider({children}) {

    const[isLogged, setIsLogged] = useState(false);
    // const[isUser, setIsUser] = useState({name: "", role: "", token:""});
    const[getUser, setGetUser] = useState({});
    const[isLoggedOut, setIsLoggedOut] = useState(false);
    const[showCartCount, setShowCartCount] = useState(true);

    const LoggedUser = (obj) => {
        setGetUser(obj)
        
    }

    return (
        <LoginContext.Provider value={{isLogged, setIsLogged, LoggedUser, getUser, setGetUser, isLoggedOut, setIsLoggedOut, showCartCount, setShowCartCount}}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginProvider