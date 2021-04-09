import React  from 'react';
import styled from 'styled-components';
import leftYodaImg from '../img/LeftYodaImg.jpg';

const StyledDiv = styled.div`
    @media (max-width: 768px) {
        display: none;
    }
    font-family: 'Starjedi', serif;
`;

const LeftYoda = () => (
    <StyledDiv>
        <img src={leftYodaImg} alt="drawing of Yoda from StarWars" style={{maxWidth: '20vw'}}/>
        TEST TEST
    </StyledDiv>
);

export default LeftYoda;