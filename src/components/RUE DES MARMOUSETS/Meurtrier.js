import React, {Component} from 'react';

class Meurtrier extends Component{
    state = {
        results :[],
        name : "",
        image:"",
        resume :"" 
    }

    getMurderer = async () =>{
        const recup_data = await fetch (`https://d6899bbc.ngrok.io/meurtriers`)
        const api_data = await recup_data.json()
        console.log(api_data[0].names[8]);

        this.setState({
            results: api_data,
            name : api_data[0].names[8],
            image : api_data[0].images[8],
            resume : api_data[0].histoires[8]
            
        })
        
        

    }
    componentDidMount(){
        this.getMurderer();      
    }
    render(){
        
        return(
            <div>
                <h1>{this.state.name}</h1>
                <img src={this.state.image} alt="cabard et miquelon" />
                <p>{this.state.resume}</p>
            </div>
        )
    }
}
export default Meurtrier