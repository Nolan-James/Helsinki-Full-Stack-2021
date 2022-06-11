import React from 'react';

const People = ({ people }) => {
    return (
        <>
            {
                people.map((person) => (
                    <p key={person.name}>{person.name} - {person.phone}</p>
                ))

            }
        </>
    );
};

export default People;