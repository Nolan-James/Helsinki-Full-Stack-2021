import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import People from "./components/People";
import numbers from "./services/numbers";

function App() {

    useEffect(() => {
        numbers.getAll()
            .then((people) => {
                setPeople(people);
            })
    }, [])

    const [newName, setNewName] = useState('');
    const [newPhone, setNewPhone] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [people, setPeople] = useState([]);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const person = {
            name: newName,
            phone: newPhone
        }

        if (newName === '') return;

        if (people.some((p) => p.name === newName)) {
            const exists = window.confirm(`${newName} is already in the phonebook, replace the old number with a new number?`);
            if (exists) {
                const existingPerson = people.find(p => p.name === newName);
                existingPerson.number = newPhone;
                numbers.updateNumber(existingPerson).then(returnedPerson => {
                    setPeople(people.map(p => p.id !== returnedPerson.id ? p : existingPerson));
                    setNewName('');
                    setNewPhone('');
                })
            }
        } else {
            numbers.create(person).then(returnedPerson => {
                setPeople(people.concat(returnedPerson))
                setNewName('');
                setNewPhone('');
            })
        }
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

    const handleDelete = (id) => {
        const { name } = people.find(p => p.id === id);
        const res = window.confirm(`Delete ${name}`)

        return res
            ? numbers.deleteNumber(id).then((res) => {
                setPeople(people.filter((person) => person.id !== id));
            })
            : '';
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter searchTerm={searchTerm} filterNumbers={filterNumbers}/>

            <h3>Add a New Number</h3>

            <PersonForm newName={newName} newPhone={newPhone} handleOnChange={handleOnChange}
                        handleOnChangePhone={handleOnChangePhone} handleOnSubmit={handleOnSubmit}/>

            <h2>Numbers</h2>

            <People people={people} handleDelete={handleDelete}/>
        </div>
    );
}

export default App;
