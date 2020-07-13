import React from 'react';
import '../../style/card-container.style.css';
import {Card} from '../Card/card.component';

export const CardContainer = (props) => {

    return(
        <section className="card-container">
            {props.content.map((cardContent, index) => (
                <div key={index}>
                    <Card title={cardContent.title} content={cardContent.content} image={cardContent.image}/>
                </div>
            ))}
        </section>
    );

} 