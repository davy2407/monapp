import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card'
import Crop from './images/crop.svg'




function App() {


  let cards = [
    {value : 1, color : 'black' },
    {value : 2, color : 'red',backgroundImage : Crop, backgroundSize : 'contain', backgroundRepeat : 'no-repeat'},
    {value : 3, color : 'black'},
    {value : 4, color : 'red'},
    {value : 5, color : 'black'},
    {value : 6, color : 'red'},
    {value : 7, color : 'black'},
    {value : 8, color : 'red'},
    {value : 9, color : 'black'},
    {value : 10, color : 'red'},
    {value : 11, color : 'black'},
    {value : 12, color : 'red'},
    {value : 13, color : 'black'},
    {value : 14, color : 'red'},
    {value : 15, color : 'black', }
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
    <div className="Global">
    <div className="Adversaire">
      {
        cardsAdversaire.map((card)=>{
          return <Card
          value={card.value}
          color={card.color}
          
          
          
          
          />
        })
      }


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
