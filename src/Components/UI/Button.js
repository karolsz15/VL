import React  from 'react';
import styled from 'styled-components';
import SmallSpinner from './SmallSpinner';

const StyledButton = styled.button`
    font-family: 'Starjedi', serif;
    font-size: 1.5em;
    color: blue;
    display: flex;
    justify-content: center;
    padding: .5em;
    &:hover {
        cursor: pointer;
    }
    @media (max-width: 425px) {
        font-size: .8em;
    }
`;

const Button = props => (
    <StyledButton type='button' onClick={props.clicked}>
        load more young padawan
        <span style={{marginLeft:'.5em'}}>{props.showSpinner ? <SmallSpinner/> : <i className="fas fa-jedi"></i>}</span>
    </StyledButton>
);

export default Button;