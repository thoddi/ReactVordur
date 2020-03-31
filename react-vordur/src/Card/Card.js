import React from 'react';
import './Card.css';
import Dropdown from './Dropdown/Dropdown';

class Card extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            active: true,
            value: "35000000",
            dropdown: false
        };

        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.changeValue = this.changeValue.bind(this);
    }

    toggleDropdown(){
        let newState = {...this.state};
        newState.dropdown = !newState.dropdown;
        this.setState(newState);
    }

    changeValue(value){
        let newState = {...this.state};
        newState.value = value;
        this.setState(newState);
    }

    render(){

        const cardClass = "card " + (this.state.dropdown ? "changing" : "")

        return (
            <div className={cardClass}>
                <div className="title">
                    <p className="kt">010107-2038</p>
                    <p className="name">Tómas Atli Björgvinsson</p>
                </div>
                <div className="options">
                    <div className="valueChanger">
                        <div>
                            <small>Bótafjárhæð</small>
                        </div>
                        <div>
                            <strong>{(Number(this.state.value)).toLocaleString("is-IS")} kr</strong>
                        </div>
                        <div onClick={this.toggleDropdown}>
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
                <Dropdown active={this.state.dropdown} value={this.state.value} onChange={this.changeValue} />
                <div className="summary">
                    <small>Iðgjöld</small>
                    <span><strong>1,038 kr.</strong> mán</span>
                </div>
            </div>
          );
    }  
}

export default Card;
