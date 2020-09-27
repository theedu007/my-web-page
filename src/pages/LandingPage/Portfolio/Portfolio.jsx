import React from 'react';

import ContenContainer from '../../../components/content-container/content-container.component';
import PortfolioItem from '../../../components/portfolio-item/portfolio-item.component';

import imgPage from '../../../components/img/tecle.png'

const Portfolio = () => (
    <ContenContainer>
        <PortfolioItem
        title="Mudanzas Tecleñas"
        years="2019 - 2020"
        websiteLink = "https://www.mudanzasteclenas.com/"
        websiteLabel = "www.mudanzasteclenas.com"
        pageImg = {imgPage}
        tags={['C#', '.NET Core', 'ASP.NET', 'Bootstrap', 'Javascript', 'Jquery', 'KnockoutJS']}>
            <p className="text">
                Pagina web para un negocio, cuenta con las siguientes caracteristicas: 
            </p>
            <ul>
                <li>Diseño responsivo</li>
                <li>Galeria</li>
                <li>Formulario de contacto</li>
            </ul>
            <p className="text">
                Tambien se me pidio crear un sistema que permitiera guardar, modificar y visualizar las mudanzas que se les pide realizar, cuenta con las siguientes caracteristicas: 
            </p>
            <ul>
                <li>Poder agendar las diferentes mudanzas que se les contrata para realizar</li>
                <li>Poder tener un registro de los camiones que cuentas y las mudanzas que realizan</li>
                <li>Que pueda crear documentos de uso interno de manera automatica</li>
                <li>Visualizar en una agenda semanal las mudanzas que tienen agendadas</li>
            </ul>
        </PortfolioItem>
    </ContenContainer>
);

export default Portfolio;