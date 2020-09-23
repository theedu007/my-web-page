import React from 'react';

import ContenContainer from '../../components/content-container/content-container.component';
import PortfolioItem from '../../components/portfolio-item/portfolio-item.component';

const Portfolio = () => (
    <ContenContainer>
        <PortfolioItem
        title="Mudanzas Tecleñas"
        years="2019 - 2020"
        websiteLink = "https://www.mudanzasteclenas.com/"
        websiteLabel = "www.mudanzasteclenas.com">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in ullamcorper nibh. Ut tempor finibus ex, vitae efficitur odio malesuada nec. Mauris elit felis, pellentesque ac dolor eu, venenatis porta eros. Sed ullamcorper vestibulum sodales. Fusce sit amet ipsum mi. Donec quis neque ac dolor scelerisque convallis a ut ligula. Nulla laoreet interdum imperdiet. Suspendisse eget fermentum neque, et facilisis ipsum. Aliquam nec pulvinar ipsum, a tristique turpis. Aliquam pretium nulla tellus, non aliquet lorem sodales sit amet. Nullam finibus neque elit, vitae suscipit turpis feugiat quis.
            </p>
            <p>
            Vestibulum interdum, leo eu ultricies faucibus, metus augue mattis sapien, vitae ornare dui urna a mauris. Suspendisse non scelerisque nulla. Fusce id lacinia ante. Sed elit orci, vestibulum a lectus sed, fermentum fermentum velit. Sed et tempus risus, posuere accumsan nulla. Suspendisse ornare, magna et aliquet faucibus, orci orci luctus erat, sit amet pellentesque felis lacus id mi. Vestibulum blandit felis nec consectetur euismod. Praesent lorem eros, vestibulum quis urna eu, elementum gravida libero. Pellentesque luctus justo eget commodo porttitor.
            </p>
        </PortfolioItem>
    </ContenContainer>
);

export default Portfolio;