import React, {useState}  from 'react';
import styled from 'styled-components';

const Div = styled.div`
    border:solid black 1px;
`;

const SingleCharacter = props => {

    //local state in order to show details for a single character on click, not a whole list
    const [showDetails, setShowDetails] = useState(false);

    const details = (
        <React.Fragment>
            Age: {props.age} Height: {props.height} Films: {props.films}
        </React.Fragment>
    );

    return (
        <Div onClick={() => setShowDetails(!showDetails)}>
            Name: {props.name} Gender: {props.gender} Birth Year: {props.year}
            {showDetails ? details : null} 
        </Div>   
    );
};

export default SingleCharacter;