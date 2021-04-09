import React  from 'react';
import styled from 'styled-components';
import leftYodaImg from '../img/LeftYodaImg.png';
import Crawl from './UI/Crawl';

const StyledDiv = styled.div`
    @media (max-width: 768px) {
        display: none;
    }
`;

const LeftYoda = () => (
    <StyledDiv>
        <img src={leftYodaImg} alt="drawing of Yoda from StarWars" style={{maxWidth: '20vw'}}/>
    </StyledDiv>
);

export default LeftYoda;