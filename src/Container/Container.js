import React, { useEffect, useCallback }  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import SingleCharacter from '../Components/SingleCharacter';
import Button from '../Components/Button';

const Container = () => {

    //const testMessage = useSelector((state) => state.testMessage);
    const charactersArray = useSelector((state) => state.charactersArray);
    // const showDetails = useSelector((state) => state.showDetails);

    const dispatch = useDispatch();
    const setData = useCallback((data) => dispatch({ type: 'SET_DATA', data: data }), [dispatch]);
    const setError = useCallback(() => dispatch({ type: 'SET_ERROR' }), [dispatch]);

    let displayedList;

    const handleCharacterClicked = () => {
    
    }

    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/people/`)
            .then((response) => {
                // handle success
                //console.log(response.data.results);
                setData(response.data.results);
            })
            .catch((error) => {
                // handle error
                console.log(error);
                setError();
            });
    }, [setData, setError]);

    if (charactersArray.length !== 0) {
        displayedList = charactersArray.map(el => {
            // console.log(el);
            return (
                <SingleCharacter
                    key={el.name} 
                    name={el.name} 
                    gender={el.gender} 
                    year={el.birth_year} 
                    age='22' 
                    height={el.height} 
                    films={el.films}
                    clicked={handleCharacterClicked} />
            )
        });
    };

    return (
        <div style={{display:'flex',flexDirection:'column',maxWidth: '800px'}}>
            {displayedList}
            {/* {testMessage} */}
            <Button />
        </div>
    );
};

export default Container;