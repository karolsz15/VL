import React  from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
    font-family: 'Starjedi', serif;
    font-size: 3em;
    text-align: center;
    margin: .5em;

    /* font-size: 1.5em;
    color: blue;
    display: flex;
    justify-content: center;
    padding: .5em;
    &:hover {
        cursor: pointer;
    } */
`;

const Header = () => (
    <StyledHeader>
        star wars characters catalogue
    </StyledHeader>
);

export default Header;