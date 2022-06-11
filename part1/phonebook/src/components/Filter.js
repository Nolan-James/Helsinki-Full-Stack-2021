import React from 'react';

const Filter = ({searchTerm, filterNumbers}) => {
    return (
        <div>
            filter: <input type="text" value={searchTerm} onChange={filterNumbers}/>
        </div>
    );
};

export default Filter;