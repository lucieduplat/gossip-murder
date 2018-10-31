import React, { Component } from 'react';
import Accueil from './Accueil.js';
import Docteur from './Docteur';
import './App.css';
import {Switch, Route} from "react-router-dom";
import ListingMurder from "./ListingMurder"

class App extends Component {
  render() {
    return (

      <div className="App">
        <Accueil />
      




            <Switch>
          
      
              <Route exact path="/" component={Accueil} />
              <Route path="/ListingMurder" component={ListingMurder} />
              <Route path="/" component={} />
              <Route path="/Docteur" component={Docteur} />
              <Route path="/Murder" component={Murder} />
              <Route path="/Profanateur" component={Profanateur} />
              <Route path="/Tueur" component={SerialKiller1} />
              <Route path="/Marmoussset" component={Marmousset} />
              <Route path="/Vampire" component={Vampire} />
            
          </Switch>
          </div>
    );
  }
}

export default App;
