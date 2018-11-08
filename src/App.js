import React, { Component } from 'react';

import Accueil from './components/accueil/Accueil';
import Docteur from './components/docteur/Docteur';
import ListingMurder from './components/listingmurder/Listingmurder';
import Murder from './components/murder/Murder';
import Marmoussets from './components/RUE DES MARMOUSETS/Marmousets';
import Vampire from './components/vampire/Vampire';
import SerialKiller1 from './components/sk1/SerialKiller1';
import Monstre from './components/Le_monstre_de_montmartre/SerialKiller6'
import './App.css';
import {Switch, Route} from "react-router-dom";

import Marmousets from './components/RUE DES MARMOUSETS/Marmousets'
import './App.css'


class App extends Component {
  render() {
    return (


      <div className="App">
        <Accueil />
        {/* <ListingMurder/> */}
        <Vampire />
        <Monstre />
        <Murder />
        <Marmoussets />
        
        <Docteur />
        {/* <SerialKiller1 /> */}

      





   
      </div>

    );
  }
}

export default App;
