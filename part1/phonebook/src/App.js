import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import People from "./components/People";
import axios from "axios";


function App() {

    useEffect(() => {
        axios.get('http://localhost:3001/persons').then((res) => {
            setPeople(res.data);
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
