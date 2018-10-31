import React from "react"


class ApiGrele extends React.Component {
  state = {
    results: [],
    name: "",
    image: "",
    histoire: ""
  }

  getTheMurder = async () => {

    const recup_data = await fetch("https://d6899bbc.ngrok.io/meurtriers")
    const data = await recup_data.json()
    console.log(data)


    this.setState({
      results: data,
      name: data[0].names[3],
      image: data[0].images[3],
      histoire: data[0].histoires[3]
    })


  }

  componentDidMount() {
    this.getTheMurder()
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <img src={this.state.image} alt="Le Grëlée" />
        <p>{this.state.histoire}</p>
      </div>
    )
  }

}
export default ApiGrele;