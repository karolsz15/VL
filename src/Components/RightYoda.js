import React  from 'react';
import styled from 'styled-components';
import rightYodaImg from '../img/RightYodaImg.jpg'; // Tell webpack this JS file uses this image

const StyledDiv = styled.div`
    @media (max-width: 768px) {
        display: none;
    }
`;

const RightYoda = () => (
    <StyledDiv>
        <img src={rightYodaImg} alt="Image of Yoda" style={{maxWidth: '20vw'}}/>
    </StyledDiv>
);

export default RightYoda;