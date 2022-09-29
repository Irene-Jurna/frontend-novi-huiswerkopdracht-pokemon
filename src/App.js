import React, {useEffect, useState} from 'react';
import './App.css';
import Pokemon from "./components/Pokemon";
import axios from "axios";

function App() {
    const [endpoint, setEndpoint] = useState('');

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get("https://pokeapi.co/api/v2/pokemon");
                console.log(result.data.results);
                setEndpoint(result.data.results);

            } catch(error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);

    return (
        <div className = "pokemon-set">
            {endpoint && endpoint.map((poke) => {
                return <Pokemon name={poke.name} url={poke.url} key={poke.name}/>
            })}
        </div>
    );
}

export default App;
