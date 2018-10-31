import React from 'react';

class Paulin extends React.Component {
    state = {
        result : [],
        name: "",
        image: "",
        histoire: ""
    }

    getdata = async () => {
        const api_call = await fetch ('https://d6899bbc.ngrok.io/meurtriers')
        const data = await api_call.json();
        console.log(data)
        this.setState({
        results: data,
        name : data[0].names[6],
        image : data[0].images[6],
        histoire : data[0].histoires[6]
        })
    }
        

componentDidMount() {
    this.getdata()
}
render(){
    return(
        <div>
            <h1>{this.state.name}</h1>
            <img src={this.state.image} alt="Le monstre de montmartre" />
            <p>{this.state.histoire}</p>
        </div>
    )
}
}

export default Paulin;