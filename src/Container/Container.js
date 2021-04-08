import React, { useEffect, useCallback }  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import SingleCharacter from '../Components/SingleCharacter';
import Button from '../Components/Button';

const Container = () => {

    const testMessage = useSelector((state) => state.testMessage);
    // const error = useSelector((state) => state.error);

    const dispatch = useDispatch();
    // const setUsernamesArray = useCallback(() => dispatch({ type: 'SET_DATA' }), [dispatch]);
    const setError = useCallback(() => dispatch({ type: 'SET_ERROR' }), [dispatch]);

    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/people/`)
            .then((response) => {
                // handle success
                // const newDataArray = response.data.items.map((el) => el.login);
                // setUsernamesArray(newDataArray);
                console.log(response.data)
            })
            .catch((error) => {
                // handle error
                console.log(error);
                setError();
            });
    }, []);

    return (
        <div>
            <SingleCharacter name='first' gender='male' year='1991' age='22' height='173' films='listOfFilms' />
            <SingleCharacter name='second' gender='female' year='1992'age='22' height='173' films='listOfFilms' />
            <SingleCharacter name='third' gender='female' year='1993' age='22' height='173' films='listOfFilms' />
            {testMessage}
            <Button />
        </div>
    );
};

export default Container;