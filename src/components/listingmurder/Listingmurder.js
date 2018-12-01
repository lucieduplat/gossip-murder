import React from "react";
import "./Listingmurder.css";
import maparis from "./maparis.png";
import icone from "./icone.png";
import { NavLink } from "react-router-dom";

class Listingmurder extends React.Component {
  render() {
    return (
      <div>
        <a href="../docteur/Docteur" className="doc">
          <NavLink to="/Listingmurder/Docteur">
            <a href="Listingmurder/Docteur" className="doc">
              <h1 className="do">Le Docteur</h1>{" "}
            </a>
          </NavLink>
        </a>
        <br />
        <a href="" className="est">
          <NavLink to="/Listingmurder/SerialKiller1">
            <a href="Listingmurder/SerialKiller1" className="doc">
              <h1 className="do">Le Tueur de l'Est Parisien </h1>{" "}
            </a>
          </NavLink>
        </a>
        <br />
        <a href="" className="tueur">
          <NavLink to="/Listingmurder/Murder">
            <a href="Listingmurder/Murder" className="doc">
              <h1 className="do">Le Tueur au Visage grêlé</h1>{" "}
            </a>
          </NavLink>
        </a>
        <br />
        <a href="" className="mont">
          <NavLink to="/Listingmurder/SerialKiller6">
            <a href="Listingmurder/SerialKiller6" className="doc">
              <h1 className="do">Le Monstre de Montmartre </h1>
            </a>
          </NavLink>
        </a>
        <br />
        <a href="" className="rue">
          <NavLink to="/Listingmurder/Marmousets">
            <a href="Listingmurder/Marmousets" className="doc">
              <h1 className="do">L'affaire de la rue des Marmousset </h1>{" "}
            </a>
          </NavLink>
        </a>
        <br />
        <a href="" className="vamp">
          <NavLink to="/Listingmurder/Vampire">
            <a href="Listingmurder/Vampire" className="doc">
              <h1 className="do">Le Vampire de Montparnasse </h1>{" "}
            </a>
          </NavLink>
        </a>

        <img src={maparis} className="map" alt="map" />
        <img src={icone} className="icone1" alt="icone" />
        <img src={icone} className="icone2" alt="icone" />
        <img src={icone} className="icone3" alt="icone" />
        <img src={icone} className="icone4" alt="icone" />
        <img src={icone} className="icone5" alt="icone" />
        <img src={icone} className="icone6" alt="icone" />
        <img src={icone} className="icone7" alt="icone" />
        <img src={icone} className="icone8" alt="icone" />
        <img src={icone} className="icone9" alt="icone" />
      </div>
    );
  }
}

export default Listingmurder;
