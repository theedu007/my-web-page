import React from 'react';
import './portfolio-item.styles.css'

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
                <div className="porfolio-info">
                    {props.children}
                </div>
            </div>
        </div>
    </div>
);

export default PortfolioItem;