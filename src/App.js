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


  return (
    <div className="App">

      {
        cards.map((card)=>{
          return <Card value={card.value}/>

        })
      }

      
     
      
    </div>
  );
}

export default App;
