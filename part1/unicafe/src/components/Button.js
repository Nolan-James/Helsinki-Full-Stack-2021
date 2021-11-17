import React from 'react';

const Button = (props) => {
    return (
        <button onClick={props.good}>
            {props.text}
        </button>
    );
};

export default Button;