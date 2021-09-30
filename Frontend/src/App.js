import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home.js";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from "./pages/About.js";
import Categories from "./components/Categories.js";
import Contact from "./pages/Contact.js"
import Login from "./pages/Login.js";
import Shopping from "./pages/Shopping.js";
import Register from "./pages/Register.js";
import Nav from "./components/Nav.js";
import Footer from "./components/Footer.js";
import Category from "./pages/Category.js";
import CartProvider from "./components/CartProvider.js";
import LoginProvider from './components/LoginProvider';


function App() {

  return (
    <div className="App">
      <CartProvider>
      <LoginProvider>
        <BrowserRouter>
          <main>
          <Nav/>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/categories" component={ Categories }/>
            <Route path="/contact" component={ Contact } />
            <Route path="/about" component={ About } />
            <Route path="/login" component={ Login } />
            <Route path="/register" component={ Register } />
            <Route path="/shopping" component={ Shopping } /> 
            <Route path="/products/:categoryName" component={ Category } />         
          </Switch>
          </main>
          <Footer/>
      </BrowserRouter>
      </LoginProvider>
      </CartProvider>

    </div>
  );
}

export default App;
