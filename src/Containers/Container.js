import React from 'react';
import LeftYoda from '../Components/LeftYoda';
import RightYoda from '../Components/RightYoda';
import Header from '../Components/Header';
import List from '../Containers/List';
import styled from 'styled-components';

const StyledDiv = styled.div`
    background: #111;
`;

const Container = () => (
    <StyledDiv>
        <Header/>
        <div style={{display:'flex'}}>
            <LeftYoda/>
            <List/>
            <RightYoda/>
        </div>
    </StyledDiv>
);

export default Container;
