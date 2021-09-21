import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home.js";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Slider from "./pages/Slider.jsx"
import About from "./pages/About.jsx"
import Categories from "./components/Categories.js";
import Contact from "./pages/Contact.jsx"
import Login from "./pages/Login.jsx";
import Shopping from "./pages/Shopping";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Home/>
<<<<<<< HEAD
      
=======
          <Switch>
            <Route exact path="/" component={ Slider } />
            <Route path="/categories" component={ Categories }/>
            <Route path="/contact" component={ Contact } />
            <Route path="/about" component={ About } />
            <Route path="/login" component={ Login } />
            <Route path="/shopping" component={ Shopping } />        
          </Switch>
      </BrowserRouter>
>>>>>>> 67cc182520e1a246a09b1c40e2ab93a0085ce778
    </div>
  );
}

export default App;
