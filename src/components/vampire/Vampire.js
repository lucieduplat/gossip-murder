import React from "react";
import "./Vampire.css";
import HistoireVampire from "./HistoireVampire";
import parchemin from "./parchemin.jpg";
import citrouille1 from "./citrouille1.png";
import audio from "./horreur.mp3";


class Vampire extends React.Component {

    state = {
        wrongAnswer: false,
        goodAnswer: false
    }

    tabulateAnswer = () => {
        var c1Score = 0;
        var wrongAnswerTab = []
        let choice = document.getElementsByTagName("input");

        for ( let i = 0; i < choice.length; i++) {
            if (choice[i].checked) {
                if (choice[i].value === "c1") {
                    c1Score += 1
                } else {
                    wrongAnswerTab[i] = choice[i].value
                }
            }
        }
        var maxScore = 3;

        if (c1Score === maxScore) {
            this.setState({
                goodAnswer: true,
                wrongAnswer:false
            })
        }

        let wrongAnswer = ""
        if (c1Score !== maxScore) {
            for (let i = 0; i < wrongAnswerTab.length; i++) {
                if (wrongAnswerTab[i] === "Un loup-garou" || wrongAnswerTab[i] === "Une chauve-souris") {
                    wrongAnswer += "Non, je suis pas " + wrongAnswerTab[i] + ". "
                }
                if (wrongAnswerTab[i] === "Une Eglise" || wrongAnswerTab[i] === "Une chapelle") {
                    wrongAnswer += "Ce n'est pas " + wrongAnswerTab[i] + ". "
                }
                if (wrongAnswerTab[i] === "L'estomac" || wrongAnswerTab[i] === "L'œsophage") {
                    wrongAnswer += wrongAnswerTab[i] + " n'est pas la bonne réponse. " 
                }
            }
            this.setState({
                wrongAnswer: wrongAnswer
            })
        }
    }
    
    render() {

        return(

            <div className ="vampire">

                <audio id="audioPlayer" src={audio} autoPlay loop/>
                <img src= {parchemin} classeName="parchemin" width="45%" alt="parchemin" />

                <div className="quizVampire">

                  <h1 className="titleVampire"> EVENTRER </h1>
                
                    <h2> Cette créature vit uniquement la nuit : </h2>
                    <label> <input type="radio" name="q1" value="c1" /> Un vampire </label> <br />
                    <label> <input type="radio" name="q1" value="Un loup-garou" /> Un loup-garou </label> <br />
                    <label> <input type="radio" name="q1" value="Une chauve-souris" /> Une chauve-souris </label> <br />
                    
                    <h2> C'est un lieu pour se recueillir et prier :</h2>
                    <label> <input type="radio" name="q2" value="Une Eglise" /> Une Eglise </label> <br />
                    <label> <input type="radio" name="q2" value="c1" /> Un cimetière </label> <br />
                    <label> <input type="radio" name="q2" value="Une chapelle" /> Une chapelle </label> <br />

                    <h2> Cet organe fait parti du tube digestif : </h2>
                    <label> <input type="radio" name="q3" value="L'estomac" /> L'estomac </label> <br />
                    <label> <input type="radio" name="q3" value="L'œsophage" /> L'œsophage </label> <br />  
                    <label> <input type="radio" name="q3" value="c1" /> L'intestin </label> <br /> <br /> 

                    <button type="submit" id="submit" onClick={this.tabulateAnswer}> <img src={citrouille1} height="30px" 
                    width="30px" alt="citrouille" /> </button> 

                </div> <br />
                       
                    <div id="answer"> {this.state.goodAnswer}{this.state.wrongAnswer}{this.state.goodAnswer && <HistoireVampire />} </div>
                
            </div>
        )
    }
}


export default Vampire;