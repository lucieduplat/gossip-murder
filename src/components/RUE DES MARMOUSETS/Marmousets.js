import React, { Component } from "react";
import "./Marmousets.css";
import audio from "./musique/horreur.mp3";
import Meurtrier from "./Meurtrier";
import parchemin from "./image/parchemin.jpg";
import citrouille1 from "./image/citrouille1.png";

class Marmousets extends Component {
  state = {
    badAnswers: false,
    win: false,
    move: false
  };

  tabulateAnswers = () => {
    var c1score = 0;
    var badAnswersTab = [];
    var choices = document.getElementsByTagName("input");

    for (let i = 0; i < choices.length; i++) {
      if (choices[i].checked) {
        if (choices[i].value === "c1") {
          c1score += 1;
        } else {
          badAnswersTab[i] = choices[i].value;
        }
      }
    }
    var maxscore = 3;
    var move = window.scrollBy(0, 800);

    if (c1score === maxscore) {
      this.setState({
        win: true,
        badAnswers: false,
        move: move
      });
    }
    let badAnswers = "";
    if (c1score !== maxscore) {
      for (let i = 0; i < badAnswersTab.length; i++) {
        if (
          badAnswersTab[i] === "Coiffeur" ||
          badAnswersTab[i] === "Estheticien"
        ) {
          badAnswers += "NON , je n'etais " + badAnswersTab[i] + ". ";
        }
        if (
          badAnswersTab[i] === "Cuisinier" ||
          badAnswersTab[i] === "Traiteur"
        ) {
          badAnswers += "Mon complice n'etait pas " + badAnswersTab[i] + ". ";
        }
        if (
          badAnswersTab[i] === "L'hotel de ville de paris" ||
          badAnswersTab[i] === "La Prefecture de police de Paris"
        ) {
          badAnswers += badAnswersTab[i] + " n'est pas le bon lieu . ";
        }
      }
      this.setState({
        badAnswers: badAnswers
      });
    }
  };

  render() {
    return (
      <div className="marmouset">
        <img
          src={parchemin}
          classeName="parchemin"
          width="45%"
          alt="parchemin"
        />

        <audio id="audioPlayer" src={audio} autoPlay loop />

        <div className="questions">
          <h1 className="titre">LE CRIME LÉGENDAIRE</h1>

          <h2>
            Je suis un artisan. Vous venez dans mon salon lorsque vous voulez
            changer d'apparence.
          </h2>
          <br />

          <label>
            <input type="radio" name="q1" value="c1" /> Barbier
          </label>
          <br />
          <label>
            <input type="radio" name="q1" value="Coiffeur" /> Coiffeur
          </label>
          <br />
          <label>
            <input type="radio" name="q1" value="Estheticien" /> Estheticien
          </label>
          <br />
          <br />

          <h2>
            Mon complice quant a lui vous attire par l'odeur de ses créations.
          </h2>
          <br />

          <label>
            <input type="radio" name="q2" value="Cuisinier" /> Cuisinier
          </label>
          <br />
          <label>
            <input type="radio" name="q2" value="c1" /> Patissier
          </label>
          <br />
          <label>
            <input type="radio" name="q2" value="Traiteur" /> Traiteur
          </label>
          <br />
          <br />

          <h2>
            Aujourd'hui nos échoppes ainsi que la rue ont éte detruites et ont
            laissé place a un batiment officiel.
          </h2>
          <br />

          <label>
            <input type="radio" name="q3" value="c1" /> L'hopital Part-Dieu
          </label>
          <br />
          <label>
            <input type="radio" name="q3" value="L'hotel de ville de paris" />{" "}
            L'hotel de ville de paris
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="q3"
              value="La Prefecture de police de Paris"
            />{" "}
            La Prefecture de police de Paris
          </label>
          <br />
        </div>
        <br />

        <button type="submit" id="submit" onClick={this.tabulateAnswers}>
          <img src={citrouille1} height="30px" width="30px" alt="citrouille" />
        </button>

        <div id="answer">
          {this.state.win}
          {this.state.badAnswers}
          {this.state.win && <Meurtrier />}
        </div>
      </div>
    );
  }
}
export default Marmousets;
