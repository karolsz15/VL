import React  from 'react';
import styled from 'styled-components';
import rightYodaImg from '../img/RightYodaImg.png';
import Crawl from './UI/Crawl';

const StyledDiv = styled.div`
    text-align: center;
    @media (max-width: 768px) {
        display: none;
    }
`;

const text = (
    <p style={{textTransform:'uppercase'}}>
        <span>CREDITS</span>
        <span>&copy; 2021 Karol Szpek</span>
        <span>Powered by swapi.dev</span>
        <span>Star Jedi font by Boba Fonts - Davide Canavero - canavero@pianeta.net</span>
        <span>Joda vector by nightwolfdezines at vecteezy.com</span>
        <span>May the force</span>
        <span>be with you!</span>
    </p>
);

const RightYoda = () => (
    <StyledDiv>
        <img src={rightYodaImg} alt="drawing of Yoda from StarWars" style={{maxWidth: '20vw'}}/>
        <Crawl displayedText={text} />
    </StyledDiv>
);

export default RightYoda;