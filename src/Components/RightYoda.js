import React  from 'react';
import styled from 'styled-components';
import rightYodaImg from '../img/RightYodaImg.jpg';

const StyledDiv = styled.div`
    @media (max-width: 768px) {
        display: none;
    }
`;

const RightYoda = () => (
    <StyledDiv>
        <img src={rightYodaImg} alt="drawing of Yoda from StarWars" style={{maxWidth: '20vw'}}/>
    </StyledDiv>
);

export default RightYoda;