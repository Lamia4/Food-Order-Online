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


function App() {
  return (
    <div className="App">
      <BrowserRouter>

          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/categories" component={ Categories }/>
            <Route path="/contact" component={ Contact } />
            <Route path="/about" component={ About } />
            <Route path="/login" component={ Login } />
            <Route path="/shopping" component={ Shopping } /> 
            <Route path="/register" component={ Register } />        
          </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
