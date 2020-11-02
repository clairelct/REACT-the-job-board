import React from "react";
import "./App.css";
import Header from "./components/Header";
import Jobs from "./components/Jobs";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
        rel="stylesheet"
      ></link>
      <div className="container">
        <Header className="bloc-titre" title="The Job Board" />

        <div class="container-box">
          <Jobs
            className="red"
            title="Full Time Sales Associate - Sydney Boutique"
            contractType="CDI"
            country="Australie"
            city="Sydney"
          />
          <Jobs
            className="green"
            title="Agent de Sécurité - Pantin"
            contractType="CDI"
            country="France"
            city="Pantin"
          />
          <Jobs
            className="yellow"
            title="Responsable d'Atelier (H/F)"
            contractType="CDD"
            country="France"
            city="Paris"
          />
          <Jobs
            className="blue"
            title="Chef de Projets"
            contractType="CDD"
            country="France"
            city="Paris"
          />
          <Jobs
            className="pink"
            title="Développeur React.js"
            contractType="CDI"
            country="France"
            city="Paris"
          />
          <Jobs
            className="red"
            title="Sales Associate Stockholm"
            contractType="CDI"
            country="Suède"
            city="Stockholm"
          />
          <Jobs
            className="green"
            title="Vendeur/se - Crans Montana"
            contractType="CDI"
            country="Suisse"
            city="Crans-Montana"
          />
          <Jobs
            className="yellow"
            title="CRM &amp; Data Quality Analyst"
            contractType="CDI"
            country="USA"
            city="New York"
          />
          <Jobs
            className="blue"
            title="Infirmier (H/F)"
            contractType="CDI"
            country="France"
            city="Pantin"
          />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
