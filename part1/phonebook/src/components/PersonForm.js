import React from 'react';

const PersonForm = ({ handleOnSubmit, newName, newPhone, handleOnChange, handleOnChangePhone }) => {
    return (
        <form onSubmit={handleOnSubmit}>
            <div>
                name: <input type='text' value={newName} onChange={handleOnChange}/>
            </div>
            <div>
                number: <input type='text' value={newPhone} onChange={handleOnChangePhone}/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    );
};

export default PersonForm;