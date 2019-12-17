import React ,{useState} from 'react';

import './App.css';
import Card from './components/Card'
import Crop from './images/crop.jpg'
import Goku from './images/Goku.jpg'
import Hunter from './images/hunter.jpg'
import Mibu from './images/Mibu.jpg'
import Saitama from './images/Saitama.png'
import Train from './images/Train.jpg'
import Guts from './images/Guts.jpg'
import Kenshin from './images/Kenshin.jpg'
import Naruto from './images/Naruto.jpg'
import Eren from './images/Eren.png'
import Gto from './images/GTO.jpg'
import Meliodas from './images/Meliodas.png'
import Ken from './images/Ken.jpg'
import Alita from './images/Alita.png'
import Jojo from './images/Jojo.jpg'




function App() {
  const [viewport, setViewport] = useState({
    
    width : "100vw",
    height : "100vh",
    
  });

  


  let cards = [
    {value : 1, color : 'red', backgroundImage : Goku  },
    {value : 2, color : 'red',backgroundImage : Crop},
    {value : 3, color : 'red' , backgroundImage : Hunter},
    {value : 4, color : 'red',backgroundImage : Mibu},
    {value : 5, color : 'red',backgroundImage : Saitama},
    {value : 6, color : 'red',backgroundImage : Train},
    {value : 7, color : 'red',backgroundImage : Guts},
    {value : 8, color : 'red',backgroundImage :Kenshin},
    {value : 9, color : 'red',backgroundImage :Naruto},
    {value : 10, color : 'red',backgroundImage :Eren},
    {value : 11, color : 'red',backgroundImage :Gto},
    {value : 12, color : 'red',backgroundImage : Meliodas},
    {value : 13, color : 'red',backgroundImage :Ken},
    {value : 14, color : 'red',backgroundImage :Alita},
    {value : 15, color : 'red',backgroundImage :Jojo }
  ]

  let CardJoue= [
    {value: "+5",color: 'green'}
  ]

  let cardsAdversaire = [
    {value : "?", color: 'black'},
    {value : "?", color: 'black'},
    {value : "?", color: 'black'},
    {value : "?", color: 'black'},
    {value : "?", color: 'black'},
    {value : "?", color: 'black'},
    {value : "?", color: 'black'},
    {value : "?", color: 'black'},
    {value : "?", color: 'black'},
    {value : "?", color: 'black'},
    {value : "?", color: 'black'},
    {value : "?", color: 'black'},
    {value : "?", color: 'black'},
    {value : "?", color: 'black'},
    {value : "?", color: 'black'},
    
  ]


  return (
    <div className="Global" {...viewport} onViewportChange = {(viewport) => {
      setViewport(viewport);
    }} >
    <div className= "Adversaires">
      <div className="Adversaire1">Adversaire 1
        
      </div>
      <div className="Adversaire2">Adversaire 2</div>
      <div className="Adversaire3">Adversaire 3</div>
      <div className="Adversaire4">Adversaire 4</div>
    </div>
    
    <div className="CarteJouee">
      {
        CardJoue.map((card)=>{
          return <Card
          value={card.value}
          color={card.color}
          />
        })
      }

      
    </div>
    <div className="CarteMisée">
      <div className="CarteMisée1">CarteMisée 1</div>
      <div className="CarteMisée2">CarteMisée 2</div>
      <div className="CarteMisée3">CarteMisée 3</div>
      <div className="CarteMisée4">CarteMisée 4</div>
      <div className="CarteMisée5">CarteMisée 5</div>

    </div>
    <div className="App">


      

      {
        cards.map((card)=>{
          return <Card
           value={card.value}
           color={card.color}
           backgroundImage={card.backgroundImage}
           backgroundRepeat={card.backgroundRepeat}
           backgroundSize={card.backgroundSize}
           
           />

        })
      }

      
     
      
    </div>
    </div>
  );
}

export default App;
