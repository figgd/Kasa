import React from "react";
import FichierHebergementD from "../../components/fichierhebergement/FichierHebergementD";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

const FichierD = () => {
  return (
    <div className="logement">
      <Header />
      <main>
        <FichierHebergementD />
      </main>

      <Footer />
    </div>
  
);
};

export default FichierD;