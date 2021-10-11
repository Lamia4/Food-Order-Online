import React, { useState, useContext, useEffect } from 'react';
import login from "../img/login.png"
import logout from "../img/logout.png"
import shopping from "../img/shopping3.png";
import "./Nav.css";
import { NavLink, useHistory } from 'react-router-dom';
import { Container, Collapse, Navbar, NavbarToggler } from "reactstrap";
import "../pages/Category.js";
import { CartContext } from '../components/CartProvider.js';
import { LoginContext } from '../components/LoginProvider.js';
import { TokenContext } from "../components/TokenProvider.js";

function NavBar() {

    const cartArray = useContext(CartContext);
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const LoginFunctions = useContext(LoginContext);
    const {isTokenExpired, userToken} = useContext(TokenContext);
    const history = useHistory();
    const [logoutIcon, setLogoutIcon] = useState(false);
    const [tokenResult, setTokenResult] = useState(false);

    useEffect(() => {
        const result = isTokenExpired(userToken);
        setTokenResult(result);
        if(!result & LoginFunctions.user) {
            setLogoutIcon(true);
            history.push("/logout");
        }

    }, [tokenResult])
    const handleUser =  () => {
        LoginFunctions.setIsLogged(false);
        localStorage.removeItem('user');
        LoginFunctions.setUser("")
    };
    return (
        
            <Container fluid className="p-0 navContainer" style={{justifyItems: 'stretch', backgroundColor:"darkorange"}}>
                <Navbar style={{backgroundColor:"darkorange"}} dark expand="md" fixed="top" className="py-2 px-0">
                    <NavLink className="logo" to="/">
                        <h1 className="headerLogo">Logo</h1>  
                    </NavLink>

                    <NavbarToggler onClick={toggle} />

                    <Collapse className="collapseRight" isOpen={isOpen} navbar style={{justifyContent: "space-between", justifyItems: "center"}}>
                        <nav style={{display: "flex", flexGrow: "1", flexWrap: "wrap",justifyContent: "center", padding: "10px 0"}}>
                            <NavLink style={{marginRight:"20px"}} className="" exact to="/">Home</NavLink>
                            <NavLink style={{marginRight:"20px"}} to="/">Categories</NavLink>
                            <NavLink style={{marginRight:"20px"}} to="/contact">Contact</NavLink>
                            <NavLink  to="/about">About</NavLink>
                        </nav>
                        <nav className="navCenter" style={{display: "flex", flexGrow: "1", flexWrap: "wrap",justifyContent: "flex-end"}}> 
                        { LoginFunctions.isLogged && userToken?  
                        (<NavLink to="/logout" style={{marginRight:"20px"}} className="" onClick={() => {handleUser()}}><img style={{height: "5vh"}} src= {login} alt="login"/></NavLink>):
                        (<NavLink  to="/login" style={{marginRight:"20px"}} className="" ><img style={{height: "5vh"}} src= {logout} alt="logout"/></NavLink>)
                        }
                            
                            <NavLink style={{marginRight:"20px", position: "relative", display:"flex"}} to="/shopping"><img style={{height: "5vh"}} src= {shopping} alt="shopping"/>{cartArray.cart.length > 0?
                            (<span style={{position: "absolute", right: "10%", height: "25px", width: "25px", borderRadius: "50%", textAlign: "center", alignItems: "center", color: "red", backgroundColor: "white"}}>{cartArray.showCount(cartArray)}</span>):
                            null} </NavLink>
                            
                        </nav>
                    </Collapse>    
                </Navbar>
        </Container>
            
    )
}

export default NavBar
