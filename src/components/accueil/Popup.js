import React from "react";
import citrouille1 from "./citrouille1.png";
import "./Popup.css";
import Listingmurder from "../listingmurder/Listingmurder";
import { NavLink } from "react-router-dom";

class Popup extends React.Component {
  state = {
    badAnswers: false,
    win: false
  };

  tabulateAnswers = () => {
    var c1score = 0;
    var badAnswersTab = [];
    var choices = document.getElementsByTagName("input");

    for (let i = 0; i < choices.length; i++) {
      if (choices[i].checked) {
        if (choices[i].value === "Thanksgiving") {
          c1score += 1;
        } else {
          badAnswersTab[i] = choices[i].value;
        }
      }
    }
    var maxscore = 1;

    if (c1score === maxscore) {
      this.setState({
        win: true,
        badAnswers: false
      });
    }
    let badAnswers = "";
    if (c1score !== maxscore) {
      for (let i = 0; i < badAnswersTab.length; i++) {
        if (badAnswersTab[i] === "Christmas" || badAnswersTab[i] === "Easter") {
          badAnswers = badAnswersTab[i] + " n'est pas la bonne réponse. ";
        }
      }
      this.setState({
        badAnswers: badAnswers
      });
    }
  };

  render() {
    return (
      <div className="wrapper">
        <h1>Devinez</h1>

        <h2>Quelle fête les americains celèbrent après Halloween ?</h2>

        <label>
          <input type="radio" name="q1" value="Christmas" />
          Christmas
        </label>
        <br />
        <label>
          <input type="radio" name="q1" value="Easter" />
          Easter
        </label>
        <br />
        <label>
          <input type="radio" name="q1" value="Thanksgiving" />
          Thanksgiving
        </label>
        <br />

        <br />
        <br />

        <button type="submit" className="" onClick={this.tabulateAnswers}>
          <img src={citrouille1} height="30px" width="30px" alt="citrouille" />
        </button>
        <div id="answers">
          {this.state.win}
          {this.state.badAnswers}
          {this.state.win && (
            <NavLink to="/Listingmurder">Click c'est par laaa........</NavLink>
          )}
        </div>
      </div>
    );
  }
}

export default Popup;
