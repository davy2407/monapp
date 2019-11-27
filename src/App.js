import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card'

function App() {


  let cards = [
    {value : 5, color : 'black'},
    {value : 10, color : 'red'},
    {value : 2, color : 'red'},
    {value : 1, color : 'black'}
  ]

  let CardJoue= [
    {value: "+5",color: 'green'}
  ]

  let cardsAdversaire = [
    {value : "?", color: 'black'},
    {value : "?", color: 'black'},
    {value : "?", color: 'black'},
    {value : "?", color: 'black'}
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
           />

        })
      }

      
     
      
    </div>
    </div>
  );
}

export default App;
