import React  from 'react';
import styled from 'styled-components';
import leftYodaImg from '../img/LeftYodaImg.jpg'; // Tell webpack this JS file uses this image

const StyledDiv = styled.div`
    @media (max-width: 768px) {
        display: none;
    }
`;

const LeftYoda = () => (
    <StyledDiv>
        <img src={leftYodaImg} alt="Image of Yoda" style={{maxWidth: '20vw'}}/>
    </StyledDiv>
);

export default LeftYoda;