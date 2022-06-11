import React from 'react';

const People = ({ people, handleDelete }) => {
    return (
        <>
            {
                people.map((person) => (
                    <p key={person.name}>{person.name} - {person.number}
                        <button onClick={() => handleDelete(person.id)}>Delete</button>
                    </p>
                ))

            }
        </>
    );
};

export default People;