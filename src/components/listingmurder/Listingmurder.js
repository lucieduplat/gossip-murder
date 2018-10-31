import React from "react"
import './Listingmurder.css';
import maparis from './maparis.png'
import icone from './icone.png'



class Listingmurder extends React.Component {
    render() {
        return (
            <div > 
                
            
                    <a href="" className="doc"><h1 className="do">Le Docteur</h1> </a><br/> 
                    <a href="" className="mag"> <h1 className="colorw"> *Le Chéri Magnifique </h1> </a> <br/> 
                    <a href="" className="marq"> <h1 className="colorw"> *La Marquise de Brinvilliers </h1> </a> <br/> 
                    <a href="" className="mont"> <h1 className="colorw"> Le Monstre de Montmartre </h1> </a> <br/> 
                    <a href="" className="tueur"> <h1 className="colorw"> Le Tueur au Visage grêlé </h1> </a> <br/> 
                    <a href="" className="prof"> <h1 className="colorw"> Le Premier "profanateur" </h1> </a> <br/> 
                    <a href="" className="est"> <h1 className="colorw"> Le Tueur de l'Est Parisien </h1> </a> <br/> 
                    <a href="" className="rue"> <h1 className="colorw"> L'affaire de la rue des Marmousset </h1> </a> <br/> 
                    <a href="" className="vamp"> <h1 className="colorw"> Le Vampire de Montparnasse </h1> </a>
                   

                <img src={maparis} className="map" alt="map" />
                <img src={icone} className="icone1" alt="icone" />
                <img src={icone} className="icone2" alt="icone" />
                <img src={icone} className="icone3" alt="icone" />
                <img src={icone} className="icone4" alt="icone" />
                <img src={icone} className="icone5" alt="icone" />
                <img src={icone} className="icone6" alt="icone" />
                <img src={icone} className="icone7" alt="icone" />
                <img src={icone} className="icone8" alt="icone" />
                <img src={icone} className="icone9" alt="icone" />

               
               

            </div>
                    

            );
        }
    
    }


export default Listingmurder;