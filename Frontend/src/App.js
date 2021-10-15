import './App.css';
import React, {useContext, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home.js";
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import About from "./pages/About.js";
import Categories from "./components/Categories.js";
import Contact from "./pages/Contact.js"
import Login from "./pages/Login.js";
import Shopping from "./pages/Shopping.js";
import Register from "./pages/Register.js";
import Nav from "./components/Nav.js";
import Footer from "./components/Footer.js";
import Logout from "./components/Logout";
import Category from "./pages/Category.js";
import Success from "./pages/Success.js";
import Privacy from "./pages/Privacy.js";
import FAQ from "./pages/FAQ.js";
import Services from "./pages/Services.js";
import Payment from "./pages/Payment.js";
import History from "./pages/History.js";
import {LoginContext} from "./components/LoginProvider.js"
import {TokenContext} from "./components/TokenProvider.js"

function App() {

  const { setIsLogged, setUser, isLogged, setAdmin } = useContext(LoginContext);
  const { setUserToken, isTokenExpired } = useContext(TokenContext)

  useEffect(() => {
    console.log((JSON.parse(localStorage.getItem("user"))))
    if(localStorage.getItem("user")){
      const localUser = JSON.parse(localStorage.getItem("user"))
      console.log("tokenexp", isTokenExpired());
      if(!isTokenExpired()){
        setIsLogged(true);
        setUser(localUser);
        setUserToken(localUser.token)
      }
      if (localUser.role === 1){
        setAdmin(true);
      } else if(localUser.role === 0 ){
        setAdmin(false);
      }
    }
  }, [])
 

  return (
    <div className="App">
      
        <BrowserRouter>
          <main>
          <Nav/>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/categories" component={ Categories }/>
            <Route path="/contact" component={ Contact } />
            <Route path="/about" component={ About } />
            <Route path="/login" component={ Login } />
            <Route path="/logout" component={ Logout } />
            <Route path="/register" component={ Register } />
            <Route path="/shopping" component={ Shopping } /> 
            <Route path="/success" component={ Success } /> 
            <Route path="/privacy" component={ Privacy } /> 
            <Route path="/faq" component={ FAQ } /> 
            <Route path="/services" component={ Services } /> 
            <Route path="/payment" component={ Payment } /> 
            <Route path="/products/:categoryName" component={ Category } />  
            <Route path="/checkout" component={ History } />       
          </Switch>
          </main>
          <Footer/>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
