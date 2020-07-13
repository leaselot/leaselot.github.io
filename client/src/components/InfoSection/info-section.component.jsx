import React from 'react';
import '../../style/info-section.style.css';

export const InfoSection = (props) => {
    return(
        <div className="info-section">
        <h2 className="info-title">{props.content.title}</h2>
        <div className="info-grid">
            {props.content.info.map((contentSection, index) => (
                <div className="info-row">
                    <div className="info-image-container">
                        <img className="info-image" src={require("../../" + props.content.images[index])} alt="Increase in Volume Icon"/>
                    </div>
                    <div className="info-content">
                        <h3 className="info-content-subhead">
                            {contentSection.subhead}
                        </h3>
                        <p className="info-content-para">
                            {contentSection.content}
                        </p>
                    </div>
                </div>
            ))}
        </div>        
        </div>
    );
}