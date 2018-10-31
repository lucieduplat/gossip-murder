import React from "react"
import './Murder.css';
import parchemin from './parchemin.jpg';
import citrouille1 from './citrouille1.png';
import audio from './musique/horreur.mp3'
import ApiGrele from './ApiGrele';




class Murder extends React.Component {

  state = {
    badAnswersFalse: false,
    winFalse: false
  }

  userAnswers = () => {

    var c1ScoreAnswer = 0;
    var badAnswersFalseTab = [];
    let choices = document.getElementsByTagName('input');


    for (let i=0; i < choices.length; i++) {

      if (choices[i].checked) {

        if (choices[i].value === 'c1') {
          c1ScoreAnswer += 1;
        } else {
          badAnswersFalseTab[i] = choices[i].value
        }
      }
    }

    var maxScoreQuiz = 3;

    if (c1ScoreAnswer === maxScoreQuiz) {
      this.setState({
        winFalse: true,
        badAnswersFalse: false
      })
    }

    let badAnswersFalse = ""
    if (c1ScoreAnswer !== maxScoreQuiz) {
      for (let i = 0; i < badAnswersFalseTab.length; i++) {
        if (badAnswersFalseTab[i] === "La pluie" || badAnswersFalseTab[i] === "La neige") {
          badAnswersFalse += "NON , elle n'amène pas de " + badAnswersFalseTab[i] + ". "
        }
        if (badAnswersFalseTab[i] === "Nos empreintes digitales" || badAnswersFalseTab[i] === "Notre couleur de peau") {
          badAnswersFalse += "NON, nous ne somme pas unique grâce à " + badAnswersFalseTab[i] + ". "
        }
        if (badAnswersFalseTab[i] === "Game Over" || badAnswersFalseTab[i] === "Cold-blooded") {
          badAnswersFalse += badAnswersFalseTab[i] + " n'est pas un dossier froid . "
        }
      }
      this.setState({
        badAnswersFalse: badAnswersFalse
      })
    }
  }


  render() {
    return (

      <div className="murderbloc">
      <img src={parchemin} className="Parchemin" width="45%" alt="parchemin" />

      <audio id="audioPlayer" src={audio} autoPlay loop/>
        
        <div id="quizMyst">

          <h1 className='mystitle'> Mysterious Unknow </h1>

            <h2>Une tempète amène :</h2>
            <label> <input type="radio" name="q1" value="La pluie" /> La pluie </label> <br />
            <label> <input type="radio" name="q1" value="c1" /> La grële </label> <br />
            <label> <input type="radio" name="q1" value="La neige" /> La neige </label> <br />

            <h2>Nous sommes unique grâce : </h2>
            <label> <input type="radio" name="q2" value="Nos empreintes digitales" />  Nos empreintes digitales </label> <br />
            <label> <input type="radio" name="q2" value="Notre couleur de peau" />  Notre couleur de peau </label> <br />
            <label> <input type="radio" name="q2" value="c1" /> Notre ADN </label> <br />

            <h2>Dans les affaires judiciaires, un dossier froid se traduit par : </h2>
            <label> <input type="radio" name="q3" value="c1" /> Cold Case </label> <br />
            <label> <input type="radio" name="q3" value="Game Over" /> Game Over </label> <br />
            <label> <input type="radio" name="q3" value="Cold-blooded" /> Cold-blooded </label> <br />


            <button type="submit" id="submit" onClick={this.userAnswers} ><img src={citrouille1} height="30px" width="30px" alt="citrouille" /></button>

             </div> <br />

            <div id="answers"> {this.state.winFalse} {this.state.badAnswersFalse} {this.state.winFalse && <ApiGrele />} </div>

       
      </div>


    );
  }

}





export default Murder;
