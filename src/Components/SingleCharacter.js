import React  from 'react';

const SingleCharacter = (props) => {
    return (
        <div style={{border:'solid black 1px'}}>
            Name: {props.name} Gender: {props.gender} Birth Year: {props.year}
        </div>   
    );
};

export default SingleCharacter;