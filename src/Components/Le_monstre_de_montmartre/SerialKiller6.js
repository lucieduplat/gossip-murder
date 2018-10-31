import React from 'react';
import Paulin from './Paulin';
import './Paulin.css'
import "./SerialKiller6.css"
import parchemin from "./parchemin.jpg"
import citrouille1 from "./citrouille1.png"
import audio from "./horreur.mp3";

class SerialKiller6 extends React.Component {

    state = {
        badAnswers: false,
        win: false
    }

    tabulateAnswers = () => {

        var c1score = 0;
        var badAnswersTab = []
        var choices = document.getElementsByTagName('input');

        for (let i = 0; i < choices.length; i++) {

            if (choices[i].checked) {
                if (choices[i].value === 'c1') {
                    c1score += 1;
                } else {
                    badAnswersTab[i] = choices[i].value
                }
            }
        }
        var maxscore = 3;

        if (c1score === maxscore) {
            this.setState({
                win: true,
                badAnswers: false
            })
        }
        let badAnswers = ""
        if (c1score !== maxscore) {
            for (let i = 0; i < badAnswersTab.length; i++) {
                if (badAnswersTab[i] === "Galerie d'art" || badAnswersTab[i] === "Louvre") {
                    badAnswers += badAnswersTab[i] +" n'est pas le bon endroit, "
                }
                if (badAnswersTab[i] === "La peste noire" || badAnswersTab[i] === "La grippe") {
                    badAnswers += badAnswersTab[i] + " n'est pas la bonne maladie, "
                }
                if (badAnswersTab[i] === "L'empoisonement" || badAnswersTab[i] === "L'exsanguination") {
                    badAnswers += badAnswersTab[i] + " n'est pas la bonne méthode. "
                }
            }
            this.setState({
                badAnswers: badAnswers
            })
        }
    }
    render() {
        return (
            <div className="vampire">
                <audio id="audioPlayer" src={audio} autoPlay loop/>
                <img src= {parchemin} classeName="parchemin" width="45%" alt="parchemin" />
                <div className="quizVampire">
                <h1 className="titleVampire">LE MONSTRE DE MONTMARTRE</h1>


                <h2>On y trouve des tableaux :</h2>

                <label><input type="radio" name="q1" value="Galerie d'art" />
                    Galerie d'art</label><br />
                <label><input type="radio" name="q1" value="c1" />
                    Montmartre</label><br />
                <label><input type="radio" name="q1" value="Louvre" />
                    Louvre</label><br />

                <h2>Je fais partie des maladies les plus mortelles :</h2>

                <label><input type="radio" name="q2" value="La peste noire" />
                    La peste noire</label><br />
                <label><input type="radio" name="q2" value="La grippe" />
                    La grippe</label><br />
                <label><input type="radio" name="q2" value="c1" />
                    Le sida</label><br />

                <h2>Je mets du temps pour infliger la mort :</h2>

                <label><input type="radio" name="q3" value="L'empoisonement" />
                    L'empoisonement</label><br />
                <label><input type="radio" name="q3" value="c1" />
                    La strangulation</label><br />
                <label><input type="radio" name="q3" value="L'exsanguination" />
                    L'exsanguination</label><br /><br /><br />



                <button type="submit" id="submit" onClick={this.tabulateAnswers}><img src={citrouille1} height="30px" width="30px" alt="citrouille" /></button><br />
                 </div>
                <div id="answer">
                    {this.state.win}{this.state.badAnswers}{this.state.win && <Paulin />}
                </div>

            

            </div>

        )
    }
}

export default SerialKiller6;