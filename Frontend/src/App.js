import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home.js";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from "./pages/About.jsx";
import Categories from "./components/Categories.js";
import Contact from "./pages/Contact.jsx"
import Login from "./pages/Login.jsx";
import Shopping from "./pages/Shopping";
import Register from "./pages/Register.jsx";
import Nav from "./components/Nav.js";
import Footer from "./components/Footer.js";
import Pizza from "./pages/Pizza.js";
import Hamburger from "./pages/Hamburger.js";
import Dessert from "./pages/Dessert.js";

function App() {
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
            <Route path="/shopping" component={ Shopping } /> 
            <Route path="/hamburger" component={ Hamburger } />        
            <Route path="/pizza" component={ Pizza } />        
            <Route path="/dessert" component={ Dessert } />        
          </Switch>
          </main>
          <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
