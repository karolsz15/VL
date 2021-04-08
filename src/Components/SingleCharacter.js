import React, {useState}  from 'react';

const SingleCharacter = props => {

    //local state in order to show details for a single character on click, not a whole list
    const [showDetails, setShowDetails] = useState(false);

    const details = (
        <React.Fragment>
            Age: {props.age} Height: {props.height} Films: {props.films}
        </React.Fragment>
    );

    return (
        <div style={{border:'solid black 1px'}} onClick={() => setShowDetails(true)}>
            Name: {props.name} Gender: {props.gender} Birth Year: {props.year}
            {showDetails ? details : null} 
        </div>   
    );
};

export default SingleCharacter;