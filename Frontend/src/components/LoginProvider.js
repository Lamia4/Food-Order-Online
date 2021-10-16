import {useState, createContext} from 'react';

export const LoginContext = createContext({});

function LoginProvider({children}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const[isLogged, setIsLogged] = useState(false);
    const[user, setUser] = useState({});
    const[showCartCount, setShowCartCount] = useState(true);
    const [showError, setShowError] = useState(false);
    const [admin, setAdmin] = useState(false);
    const [isCheckout, setIsCheckout] = useState(false);
    const [isNoOpacity, setIsNoOpacity] = useState(true);
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [street, setStreet] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [city, setCity] = useState("");
    const [registered, setRegistered] = useState(false)


    return (
        <LoginContext.Provider value={{isLogged, setIsLogged, user, setUser, showCartCount, setShowCartCount, email, setEmail, password, setPassword, showError, setShowError, admin, setAdmin, isCheckout, setIsCheckout, isNoOpacity, setIsNoOpacity, name, setName, surname, setSurname, street, setStreet, postalCode, setPostalCode, city, setCity, registered, setRegistered}}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginProvider