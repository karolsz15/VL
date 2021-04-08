import React, {useState}  from 'react';
import styled from 'styled-components';

const Div = styled.div`
    border:solid black 1px;
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
            Name: {props.name} Gender: {props.gender} Birth Year: {props.year}
            {showDetails ? details : null} 
        </Div>   
    );
};

export default SingleCharacter;