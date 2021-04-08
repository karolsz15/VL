import React  from 'react';

const SingleCharacter = (props) => {
    return (
        <div>
            Hello from SingleCharacter! 
            Name: {props.name}
            Gender: {props.gender}
            Birth Year: {props.year}
        </div>   
    );
};

export default SingleCharacter;