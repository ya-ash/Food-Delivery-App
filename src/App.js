import './App.css';
import Home from './components/screens/Home';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from './components/screens/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "react-bootstrap/dist/react-bootstrap"
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Signup from './components/screens/Signup';
import { CartProvider } from './components/ContextReducer';
function App() {
  return (
    <CartProvider>
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home /> } />
          <Route exact path="/loginuser" element={<Login/> } />
          <Route exact path="/createuser" element={<Signup/> } />
        </Routes>
        
      </div>
    </Router>
    </CartProvider>
  );
}

export default App;
