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
`;

const Button = props => (
    <StyledButton type='button' onClick={props.clicked}>
        load more young padawan
        <span style={{marginLeft:'.5em'}}>{props.showSpinner ? <SmallSpinner/> : <i class="fas fa-jedi"></i>}</span>
    </StyledButton>
);

export default Button;