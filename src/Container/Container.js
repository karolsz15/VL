import React  from 'react';
import { useSelector, useDispatch } from 'react-redux';
//import axios from 'axios';
import SingleCharacter from '../Components/SingleCharacter';

const Container = () => {
    const testMessage = useSelector((state) => state.testMessage);
    return (
        <div>
            <SingleCharacter name='first' gender='male' year='1991' age='22' height='173' films='listOfFilms' />
            <SingleCharacter name='second' gender='female' year='1992'age='22' height='173' films='listOfFilms' />
            <SingleCharacter name='third' gender='female' year='1993' age='22' height='173' films='listOfFilms' />
            {testMessage}
        </div>   
    );
};

export default Container;