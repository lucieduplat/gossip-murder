import React from "react";

class Joe extends React.Component {

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
            name : data[0].names[0],
            image : data[0].images[0],
            histoire : data[0].histoires[0]
        })


    }

    componentDidMount() {
        this.getTheMurder()
    }

    render() {
        return (
            <div >
                <h1>{this.state.name}</h1>
                <img src={this.state.image} alt="Guy Georges" />
                <p>{this.state.histoire}</p>
            </div>
        )
    }

}

export default Joe;
