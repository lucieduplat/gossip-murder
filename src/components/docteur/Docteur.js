import React from 'react';
import citrouille1 from './citrouille1.png';
import './Docteur.css';
import parchemin from './parchemin.jpg';
import Docteurfou from './Docteurfou';
import audio from "../musique/horreur.mp3";

class Docteur extends React.Component {
  state = {
    badAnswers: false,
    win: false,
  };

  tabulateAnswers = () => {
    var c1score = 0;
    var badAnswersTab = [];
    var choices = document.getElementsByTagName('input');

    for (let i = 0; i < choices.length; i++) {
      if (choices[i].checked) {
        if (choices[i].value === 'c1') {
          c1score += 1;
        } else {
          badAnswersTab[i] = choices[i].value;
        }
      }
    }
    var maxscore = 3;

    if (c1score === maxscore) {
      this.setState({
        win: true,
        badAnswers: false,
      });
    }
    let badAnswers = '';
    if (c1score !== maxscore) {
      for (let i = 0; i < badAnswersTab.length; i++) {
        if (
          badAnswersTab[i] === 'Infirmier' ||
          badAnswersTab[i] === 'Aide-soignant'
        ) {
          badAnswers += ' Je ne suis pas ' + badAnswersTab[i] + ' .';
        }
        if (badAnswersTab[i] === 'liquide' || badAnswersTab[i] === 'solide') {
          badAnswers += " Est-ce-que tu etais bon en physique à l'école ? ";
        }
        if (
          badAnswersTab[i] === 'les bonbons pimouses' ||
          badAnswersTab[i] === 'Les insectes'
        ) {
          badAnswers += "Tu n'as pas regardé Tintin! ";
        }
      }
      this.setState({
        badAnswers: badAnswers,
      });
    }
  };

  render() {
    return (
      <div className="wrap">
        <img
          src={parchemin}
    
          width="45%"
          alt="parchemin"
        />
        <audio id="audioPlayer" src={audio} autoPlay loop />
        <div className="quizdoc">
          <h1 className="titreQ">Quizz</h1>
          <h2>Son principal outil de travail est le stestoscope</h2>

          <label>
            <input type="radio" 
            name="q1" 
            value="Infirmier" />
            Infirmier
          </label>
          <br />

          <label>
            <input type="radio" name="q1" value="Aide-soignant" />
            Aide-soignant
          </label>
          <br />

          <label>
            <input type="radio" name="q1" value="c1" />
            Docteur
          </label>
          <br />

          <h2>sous quel etat l'eau n'est pas visible</h2>

          <label>
            <input type="radio" name="q2" value="liquide" />
            liquide
          </label>
          <br />

          <label>
            <input type="radio" name="q2" value="solide" />
            solide
          </label>
          <br />
          <label>
            <input type="radio" name="q2" value="c1" />
            gazeux
          </label>
          <br />

          <h2>selon l'idee recue quel objet la pie aime derober</h2>

          <label>
            <input type="radio" name="q3" value="les bonbons pimouses" />
            les bonbons pimouses
          </label>
          <br />

          <label>
            <input type="radio" name="q3" value="les insectes" />
            les insectes
          </label>
          <br />

          <label>
            <input type="radio" name="q3" value="c1" />
            les bijoux qui brillent
          </label>
          <br />
          <br />

          <button
            type="submit"
            className="submit"
            onClick={this.tabulateAnswers}
          >
            <img
              src={citrouille1}
              height="30px"
              width="30px"
              alt="citrouille"
            />
          </button>
          <div id="answers">
            {this.state.win}
            {this.state.badAnswers}
            {this.state.win && <Docteurfou />}
          </div>
        </div>
      </div>
    );
  }
}

export default Docteur;
