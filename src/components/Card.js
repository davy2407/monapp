import React from 'react';
import './Card.css';



export default class Card extends React.Component {
    constructor(){
        super();

    }

    render(){
        return(
            <div className='MainJoueur'>
            <div className='Card'>
                <p
                    style={{'color': this.props.color}}
                
                >
                    {this.props.value}</p>
            </div>
            </div>
        )
    }

}