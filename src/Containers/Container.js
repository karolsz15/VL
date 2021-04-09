import React from 'react';
import LeftYoda from '../Components/LeftYoda';
import RightYoda from '../Components/RightYoda';
import Header from '../Components/Header';
import List from '../Containers/List';

const Container = () => (
    <React.Fragment>
        <Header/>
        <div style={{display:'flex'}}>
            <LeftYoda/>
            <List/>
            <RightYoda/>
        </div>
    </React.Fragment>
);

export default Container;
