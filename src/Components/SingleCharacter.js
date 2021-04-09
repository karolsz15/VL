import React, {useState}  from 'react';
import styled from 'styled-components';

const Div = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: solid black .1em;
    font-size: .8em;
    padding: .5em;
    &:hover {
        cursor: pointer;
        background-color: #f4f4f4;
    }
`;

const StyledDetails = styled.ul``;

const SingleCharacter = props => {

    //local state instead of global Redux state (in order to show details for a single character on click)
    //otherwise it would expand details for all characters on a click on a single character
    const [showDetails, setShowDetails] = useState(false);

    let listOfFilms;
    if (props.films) {
        listOfFilms = props.films.map(el => (
            <li key={el}>
                {el}
            </li>
        ));
    };

    const details = (
        <StyledDetails>
            <li>Height: {props.height}</li>
            <li>Mass: {props.mass}</li>
            <li>Hair color: {props.hair}</li>
            <li>Skin color: {props.skin}</li>
            <li>Films: <ol>{listOfFilms}</ol></li>
        </StyledDetails>
    );

    return (
        <Div onClick={() => setShowDetails(!showDetails)}>
            <div>
                <div>Name: {props.name}</div>
                <div>Gender: {props.gender}</div>
                <div>Birth Year: {props.year}</div>  
                {showDetails ? details : null} 
            </div>
            {!showDetails ? 
            <i className="fa fa-angle-down" style={{fontSize:'2em', fontWeight: '900'}} /> :
            <i className="fa fa-angle-up" style={{ fontSize: '2em', fontWeight: '900' }} /> }
        </Div>   
    );
};

export default SingleCharacter;