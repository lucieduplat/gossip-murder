import React, { Component } from "react";
import parchemin from "../images/parchemin.jpg";
import audio from '../musique/horreur.mp3';
import citrouille from "../images/citrouille1.png"
import  "./SerialKiller1.css"
import Joe from "./Joe"

class SerialKiller1 extends React.Component {

    state = {
        badAnswers: false,
        win: false,

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
                if (badAnswersTab[i] === "Le livre noir des sérials killers de Stéphane BOURGOIN" || badAnswersTab[i] === "Un tueur si proche d'Ann RULE") {
                    badAnswers += "NON , ce n'est pas " + badAnswersTab[i] + ". "
                }
                if (badAnswersTab[i] === "Chapi Chapo" || badAnswersTab[i] === "Les fous du volants") {
                    badAnswers += "Et non, ce n'était pas " + badAnswersTab[i] + ". "
                }
                if (badAnswersTab[i] === "Nord" || badAnswersTab[i] === "Ouest") {
                    badAnswers += badAnswersTab[i] + " n'est pas le bon coin . "
                }
            }
            this.setState({
                badAnswers: badAnswers
            })
        }
    }




    render() {
        return (
            <div className="serial1">
                <img src={parchemin} className="parchemin" alt="parchemin" />
                <audio id="audioPlayer" src={audio} autoPlay loop/> 
                <div className="quizz">
                    <h1 className="titre">JOE THE KILLER</h1>


                    <h2>Un livre fantasme a été écrit sur lui :</h2>
                    
                    <label><input type="radio" name="q1" value="Le livre noir des sérials killers de Stéphane BOURGOIN" />
                        Le livre noir des sérials killers de Stéphane BOURGOIN</label><br />
                    <label><input type="radio" name="q1" value="c1" />
                        <i>Le plaisir de tuer</i> de Michel DUBEC</label><br />
                    <label><input type="radio" name="q1" value=" Un tueur si proche d'Ann RULE" />
                        Un tueur si proche d'Ann RULE</label><br />

                    <h2>Son dessin animé préféré étant plus jeune était :</h2>

                    <label><input type="radio" name="q2" value="Chapi Chapo" />
                        Chapi Chapo</label><br />
                    <label><input type="radio" name="q2" value="Les fous du volant" />
                        Les fous du volant</label><br />
                    <label><input type="radio" name="q2" value="c1" />
                        Les Aventures de Tom Sawyer</label><br />

                    <h2>Il aimait pratiquer ses activités dans quel coin de Paris :</h2>

                    <label><input type="radio" name="q3" value="Nord" />
                        Nord</label><br />
                    <label><input type="radio" name="q3" value="c1" />
                        Est</label><br />
                    <label><input type="radio" name="q3" value="Ouest" />
                        Ouest</label><br />



                    <button type="submit" id="submit" onClick={this.tabulateAnswers}><img src={citrouille} height="30px" width="30px" alt="citrouille"/></button><br />
                    <div id="answer">
                        {this.state.win}{this.state.badAnswers}{this.state.win && <Joe />}
                    </div>
                </div>

            </div>

        )
    }
}

export default SerialKiller1;