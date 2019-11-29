import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card'

function App() {


  let cards = [
    {value : 1, color : 'black'},
    {value : 2, color : 'red'},
    {value : 3, color : 'red'},
    {value : 4, color : 'black'},
    {value : 5, color : 'red'},
    {value : 6, color : 'black'},
    {value : 7, color : 'red'},
    {value : 8, color : 'black'},
    {value : 9, color : 'red'},
    {value : 10, color : 'black'},
    {value : 11, color : 'red'},
    {value : 12, color : 'black'},
    {value : 13, color : 'red'},
    {value : 14, color : 'black'},
    {value : 15, color : 'red'}
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
           />

        })
      }

      
     
      
    </div>
    </div>
  );
}

export default App;
