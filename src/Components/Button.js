import React  from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    font-size: 20px;
    color: blue;
`;

const Button = props => (
    <StyledButton type='button' onClick={props.clicked}>LOAD MORE</StyledButton>
);

export default Button;