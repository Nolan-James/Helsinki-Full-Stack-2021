import { useState } from "react";


function App() {
    const [people, setPeople] = useState([
        { name: 'Arto Hellas', number: '040-123456', id: 1 },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
    ])

    const [newName, setNewName] = useState('');
    const [newPhone, setNewPhone] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const person = {
            name: newName,
            phone: newPhone
        }

        people.map((p) => {
            return p.name === newName ? alert(`${newName} is already in the phonebook`) : setPeople(people.concat(person));
        })
    }


    const handleOnChange = (e) => {
        setNewName(e.target.value);
    }

    const handleOnChangePhone = (e) => {
        setNewPhone(e.target.value);
    }

    const filterNumbers = (e) => {
        setSearchTerm(e.target.value);
        setPeople(people.filter(person => person.name.toLowerCase().includes(searchTerm.toLowerCase())));
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <div>
                filter: <input type="text" value={searchTerm} onChange={filterNumbers}/>
            </div>

            <div>
                <h3>Add a New Number</h3>
            </div>

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
            <h2>Numbers</h2>
            {
                people.map((person) => (
                    <p key={person.name}>{person.name} - {person.phone}</p>
                ))

            }
        </div>
    );
}

export default App;
