import {useState, createContext} from 'react';


export const LoginContext = createContext("");

function LoginProvider({children}) {

    const[isLogged, setIsLogged] = useState(false);
    // const[isUser, setIsUser] = useState({name: "", role: "", token:""});
    const[getUser, setGetUser] = useState({name: "", role: "", token: ""})

    const LoginUser = (email, password) => {
        
    }

    return (
        <LoginContext.Provider value={{isLogged, setIsLogged, LoginUser, getUser, setGetUser}}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginProvider