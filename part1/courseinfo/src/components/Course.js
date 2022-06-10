import React from 'react';

const Course = ({ course }) => {
    const { name, parts } = course;
    return (
        <div>
            <h1>{name}</h1>
            {
                parts.map((part) => {
                    const { name, exercises } = part;
                    return (
                        <p key={name}>{name} {exercises}</p>
                    )
                })
            }
            <p>Total of {parts.reduce((total, part) => total + part.exercises, 0)} exercises</p>
        </div>
    );
};

export default Course;