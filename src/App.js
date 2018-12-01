import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import './App.css'

import Accueil from './components/accueil/Accueil';
import Listingmurder from './components/listingmurder/Listingmurder';
import Docteur from './components/docteur/Docteur';
import SerialKiller6 from './components/Le_monstre_de_montmartre/SerialKiller6';
import Murder from './components/murder/Murder';
import Marmousets from './components/RUE DES MARMOUSETS/Marmousets';
import SerialKiller1 from './components/sk1/SerialKiller1';
import Vampire from './components/vampire/Vampire';




class App extends Component {
  render() {
    return (

      <div>
        <Switch>
          <Route exact path="/" component={Accueil} />

          <Route exact path="/Listingmurder" component={Listingmurder} />
          <Route path="/Listingmurder/Docteur" component={Docteur} />
          <Route path="/Listingmurder/SerialKiller6" component={SerialKiller6} />
          <Route path="/Listingmurder/Murder" component={Murder} />
          <Route path="/Listingmurder/Marmousets" component={Marmousets} />
          <Route path="/Listingmurder/SerialKiller1" component={SerialKiller1} />
          <Route path="/Listingmurder/Vampire" component={Vampire} />
        </Switch>>
       
     </div>
    );
  }
}

export default App;
