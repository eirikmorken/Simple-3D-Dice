import React, { Component } from 'react';
import './dice.css';
//import 'semantic-ui-css/semantic.min.css

class Dice extends Component {
    render() {

        //const value = "dice active-" + this.props.value;

        return (
            <div className="dice-container">
                    <div className={`dice active-${this.props.value}`}>
                        <div className="face front">
                            <div>1</div>
                        </div>
                        <div className="face back">
                            <div>2</div>
                        </div>
                        <div className="face left">
                            <div>3</div>
                        </div>
                        <div className="face right">
                            <div>4</div>
                        </div>
                        <div className="face top">
                            <div>5</div>
                        </div>
                        <div className="face bottom">
                            <div>6</div>
                        </div>
                </div>
            </div>
        );
    }
}

export default Dice;
