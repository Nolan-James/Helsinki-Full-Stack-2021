import React from 'react';

const Total = ({ parts }) => {
    const numberOfParts = parts.length;

    return (
        <div>
            <p>There are {numberOfParts} parts</p>
        </div>
    );
};

export default Total;