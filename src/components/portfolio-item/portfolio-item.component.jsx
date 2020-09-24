import React from 'react';
import './portfolio-item.styles.css'

import TechTag from '../tecnologies-tags/tecnologies-tags'

const PortfolioItem = props => (
    <div className="portfolio-item">
        <div className="portfolio-time">
            <span>{props.years}</span>
        </div>
        <div className="portfolio-line">
            <span className="timeline-dot"></span>
            <div className="portfolio-content">
                <div className="portfolio-tile">
                    <h2>{props.title}</h2>
                </div>
                <div className="portfolio-link">
                    <a href={props.websiteLink}>{props.websiteLabel}</a>
                </div>
                <div className="portfolio-info">
                    <div className="porfolio-info-text">
                        {props.children}
                        <div className="porfolio-tech-tags">
                            <p>Las tecnologias usadas fueron:</p>
                            {props.tags.map((tag, index) => <TechTag key={index} tagContent={tag} />)}
                        </div>
                    </div>
                    <div className="porfolio-info-image">
                        <img src={ props.pageImg } alt="screencapture-mudanzasteclenas" />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default PortfolioItem;