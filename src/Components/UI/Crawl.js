import React  from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    @media (max-width: 768px) {
        display: none;
    }
    background: #111;
    perspective: 200px;
    overflow: hidden;
    max-width: 20vw;
    p {
        font-family: sans-serif;
        font-size: 1em;
        color: #fcd000;
        font-weight: bold;
        margin: 0 auto;
        transform: rotateX(30deg);
        animation: animateCrawl 20s ease-in;
        animation-fill-mode: forwards;
    }
    p span { 
        display: block;
        width: 100%;
        text-align: center;
        margin-bottom: 20px;
    }
    @keyframes animateCrawl {
        0%   { transform: rotateX(30deg) translateY(300px); }
        100% { transform: rotateX(30deg) translateY(-50px); }
    }
`;

const Crawl = props => (
    <StyledDiv>
        {props.displayedText}
    </StyledDiv>
);

export default Crawl;