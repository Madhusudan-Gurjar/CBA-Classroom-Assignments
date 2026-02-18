import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/" end className={({isActive}) => isActive ? "active" : ""}>Home</NavLink>
        <NavLink to="/about" className={({isActive}) => isActive ? "active" : ""}>About</NavLink>
        <NavLink to="/services" className={({isActive}) => isActive ? "active" : ""}>Services</NavLink>
        <NavLink to="/contact" className={({isActive}) => isActive ? "active" : ""}>Contact</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
