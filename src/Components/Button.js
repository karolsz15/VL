import React  from 'react';

const Button = props => (
    <input type="button" name='button' value='LOAD MORE' onClick={props.clicked} />
);

export default Button;