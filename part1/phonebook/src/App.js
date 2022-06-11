import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import People from "./components/People";


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
            <Filter searchTerm={searchTerm} filterNumbers={filterNumbers}/>

            <h3>Add a New Number</h3>

            <PersonForm newName={newName} newPhone={newPhone} handleOnChange={handleOnChange}
                        handleOnChangePhone={handleOnChangePhone} handleOnSubmit={handleOnSubmit}/>

            <h2>Numbers</h2>

            <People people={people}/>
        </div>
    );
}

export default App;
