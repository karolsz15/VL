import React, {useState}  from 'react';
import styled from 'styled-components';

const Div = styled.div`
    /* display: flex;
    flex-direction:column; */
    border: solid black .1em;
    padding: .2em;

    &:hover {
        cursor: pointer;
        background-color: #f4f4f4;
    }
`;

const StyledDetails = styled.ul``;

const SingleCharacter = props => {

    //local state instead of global Redux state (in order to show details for a single character on click, not a whole list)
    const [showDetails, setShowDetails] = useState(false);

    let listOfFilms;
    if (props.films) {
        listOfFilms = props.films.map(el => (
            <li>{el}</li>
        ));
    };

    // console.log(props);

    const details = (
        <StyledDetails>
            <li>Age: {props.age}</li>
            <li>Height: {props.height}</li>
            <li>Films: <ol>{listOfFilms}</ol></li>
        </StyledDetails>
    );

    // console.log(props.films);

    return (
        <Div onClick={() => setShowDetails(!showDetails)}>
            <div>Name: {props.name}</div>
            <div>Gender: {props.gender}</div>
            <div>Birth Year: {props.year}</div>  
            {showDetails ? details : null} 
        </Div>   
    );
};

export default SingleCharacter;