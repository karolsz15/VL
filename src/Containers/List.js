import React, { useEffect, useCallback }  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import SingleCharacter from '../Components/SingleCharacter';
import Button from '../Components/UI/Button';
import LargeSpinner from '../Components/UI/LargeSpinner';
import styled from 'styled-components';

const StyledContainer = styled.main`
    background: white;
    padding: 2em;
    border-radius: 1.5em;
    display: flex;
    flex-direction: column;
    max-width: 500px;
    margin: .5em auto;
    @media (max-width: 768px) {
        padding: .5em;
        border-radius: .5em;
    }
    @media (max-width: 425px) {
        font-size: 1.5em;
        max-width: 90vw;
    }
`;

const Container = () => {

    const charactersArray = useSelector((state) => state.charactersArray);
    const buttonClickedCounter = useSelector((state) => state.buttonClickedCounter);
    const isLoading = useSelector((state) => state.isLoading);

    const dispatch = useDispatch();
    const setData = useCallback((data) => dispatch({ type: 'SET_DATA', data: data}), [dispatch]);
    const setError = useCallback(() => dispatch({ type: 'SET_ERROR' }), [dispatch]);
    const setCounter = useCallback(() => dispatch({ type: 'SET_COUNTER' }), [dispatch]);

    let displayedList = <LargeSpinner/>;

    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/people/?page=${buttonClickedCounter}`)
            .then((response) => {
                setData(response.data.results);
            })
            .catch((error) => {
                console.log(error);
                setError();
            });
    }, [buttonClickedCounter, setData, setError]);

    if (charactersArray.length > 0) {
        displayedList = charactersArray.map(el => {
            return (
                <SingleCharacter
                    key={el.created} 
                    name={el.name} 
                    gender={el.gender} 
                    year={el.birth_year} 
                    height={el.height}
                    mass={el.mass}
                    hair={el.hair_color} 
                    skin={el.skin_color} 
                    films={el.films}
                />
            )
        });
    };

    return (
        <StyledContainer>
            {displayedList}
            <Button 
                clicked={() => setCounter()}
                showSpinner={isLoading} />
        </StyledContainer>
    );
};

export default Container;