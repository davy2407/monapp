import React from 'react';
import './Card.css';



export default class Card extends React.Component {
    constructor(){
        super();

    }

    render(){
        console.log(this.props.backgroundImage)
        return(
            <div className='MainJoueur'>
            <div className='Card' style={{}}>

            <img src={this.props.backgroundImage
                    } 
                
                />

                <p
                    style={{'color': this.props.color}
                }

                
                
                >
                    {this.props.value}</p>
            </div>
            </div>
        )
    }

}