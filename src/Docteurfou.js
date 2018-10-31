import React from 'react';

class Docteurfou extends React.Component {
  state = {
    results: [],
    name: '',
    image: '',
    histoire: '',
  };

  getTheMurder = async () => {
    const recup_data = await fetch('https://d6899bbc.ngrok.io/meurtriers');
    const data = await recup_data.json();
    console.log(data);

    this.setState({
      results: data,
      name: data[0].names[2],
      image: data[0].images[2],
      histoire: data[0].histoires[2],
    });
  };

  componentDidMount() {
    this.getTheMurder();
  }

  render() {
    return (
      <div className="reponse">
        <h1>{this.state.name}</h1>
        <img src={this.state.image} alt="Marcel Petiot" />
        <p>{this.state.histoire}</p>
      </div>
    );
  }
}

export default Docteurfou;
