import React  from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
    font-family: 'Starjedi', serif;
    color: #fcd000;
    font-size: 3em;
    text-align: center;
    margin: .5em;
    @media (max-width: 768px) {
        font-size: 2em;
    }
    @media (max-width: 425px) {
        font-size: 1.5em;
    }
`;

const Header = () => (
    <StyledHeader>
        star wars characters catalogue
    </StyledHeader>
);

export default Header;