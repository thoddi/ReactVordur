import React from 'react';
import './Card.css';

class Card extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            active: true,
            value: 35000000
        };

        this.changeValue = this.changeValue.bind(this);
    }

    changeValue(){
        alert("change!")
    }

    render(){
        return (
            <div className="card">
                <div className="title">
                    <p className="kt">010107-2038</p>
                    <p className="name">Tómas Atli Björgvinsson</p>
                </div>
                <div className="options">
                    <div>
                        <div>
                            <small>Bótafjárhæð</small>
                        </div>
                        <div>
                            <strong>{this.state.value} kr.</strong>
                        </div>
                        <div onClick={this.changeValue}>
                            <span>&rsaquo;</span><strong>&emsp;Breyta</strong>
                        </div>
                    </div>
                    <div>
                        <div>
                            <small>Tegund</small>
                        </div>
                        <div>
                            <strong>Barnatrygging 1</strong>
                        </div>
                        <div>
                            <span>&rsaquo;</span><strong>&emsp;Nánar</strong>
                        </div>
                    </div>
                </div>
                <div className="summary">
                    <small>Iðgjöld</small>
                    <span><strong>1,038 kr.</strong> mán</span>
                </div>
            </div>
          );
    }  
}

export default Card;
