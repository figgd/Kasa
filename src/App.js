import React from "react";
import { Routes, Route} from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom'; 
import About from "./pages/about/About";
import Home from "./pages/Home/Home.js";      
import { Navigate } from 'react-router-dom';
import "./css/app.scss";
import NoPage from "./pages/error/NoPage";
import FichierD from "./pages/hebergement/FichierHebergement.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/accueil" />} />
        <Route path="/accueil" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<FichierD />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
