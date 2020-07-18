import React from 'react';
import '../../style/card.style.css';

export const Card = (props) => {
    return(
        <div className="card">
            <div className="image-container">
                <img className="card-image" src={require("../../" + props.image)} alt="Card Icon"/>
            </div>
            <div className="content-container">
                <h2 className="card-title">{props.title}</h2>
                <p className="card-content">{props.content}</p>
            </div>
        </div>
    );
}