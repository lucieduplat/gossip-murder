import React from "react";
import "./HistoireVampire.css";

class HistoireVampire extends React.Component {

    state = {
        results: [],
        name :"",
        image :"",
        histoire :""
        }

    getTheMurder = async () => {

    const recup_data = await fetch("https://d6899bbc.ngrok.io/meurtriers")
    const data = await recup_data.json()
    console.log(data)
    
    this.setState({
        results: data,
        name : data[0].names[4],
        image : data[0].images[4],
        histoire : data[0].histoires[4]
        })
    }
            
    componentDidMount() {
        this.getTheMurder()
    }

    render() {

        return(

            <div className="apiVampire">

                <h1>{this.state.name}</h1>
                <img src={this.state.image} alt="Le vampire de Montparnasse" />
                <p>{this.state.histoire}</p>
            </div>

        )
    }
}

export default HistoireVampire;