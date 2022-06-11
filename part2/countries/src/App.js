import { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all').then(res => {
            setCountries(res.data)
        });
    }, [])

    const handleOnChange = (e) => {
        setSearch(e.target.value);
        setCountries(countries.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase())));
    }

    return (
        <div>

            <h1>Countries</h1>
            <div>
                Find Country: <input type='text' onChange={handleOnChange}/>
            </div>

            <h3>Search Results:</h3>
            {
                countries.length > 10 ? <p>Too many matches, try limiting your search</p> :
                    countries.map((country) => <p key={country.name.common}>{country.name.common}</p>)
            }
        </div>
    );
}

export default App;
