import React, { Component } from 'react';
import Popup from './Popup.js';
import './Accueil.css';
import sang from './sang.png';
import citrouille from './citrouille.png';
import audio from '../RUE DES MARMOUSETS/musique/horreur.mp3';

class Accueil extends Component {
  render() {
    return (
      <div className="popcenter">
        <div className="sangcss">
          <img src={sang} classeName="sangcss" alt="sang" />
          <img src={sang} classeName="sangcss" alt="sang" />
          <img src={sang} classeName="sang3css" alt="sang" />

          <p className="flash">GOSSIP MURDER</p>

          <img src={citrouille} classeName="citr" alt="citrouille" />

          <br />
          <br />
          <br />
          <audio id="audioPlayer" src={audio} autoPlay loop/> 
          <Popup />
        </div>
      </div>
    );
  }
}

export default Accueil;
