import React, { useEffect, useCallback }  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import SingleCharacter from '../Components/SingleCharacter';
import Button from '../Components/Button';

const Container = () => {

    const charactersArray = useSelector((state) => state.charactersArray);
    const buttonClickedCounter = useSelector((state) => state.buttonClickedCounter);

    const dispatch = useDispatch();
    const setData = useCallback((data) => dispatch({ type: 'SET_DATA', data: data}), [dispatch]);
    const setError = useCallback(() => dispatch({ type: 'SET_ERROR' }), [dispatch]);
    const setCounter = useCallback(() => dispatch({ type: 'SET_COUNTER' }), [dispatch]);

    let displayedList;

    useEffect(() => {
        axios
            .get(`http://swapi.dev/api/people/?page=${buttonClickedCounter}`)
            .then((response) => {
                // handle success
                // console.log(response.data.results);
                setData(response.data.results);
            })
            .catch((error) => {
                // handle error
                console.log(error);
                setError();
            });
    }, [buttonClickedCounter]);

    if (charactersArray.length > 0) {
        displayedList = charactersArray.map(el => {
            return (
                <SingleCharacter
                    key={el.name} 
                    name={el.name} 
                    gender={el.gender} 
                    year={el.birth_year} 
                    age='22' 
                    height={el.height} 
                    films={el.films}
                />
            )
        });
    };

    return (
        <div style={{display:'flex',flexDirection:'column',maxWidth: '800px'}}>
            {displayedList}
            <Button clicked={() => setCounter()}/>
        </div>
    );
};

export default Container;