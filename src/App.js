import React, {useEffect, useState} from 'react';
import './App.css';
import Pokemon from "./components/Pokemon";
import logo from "./assets/logo.png"
import axios from "axios";

function App() {
    const [endpoint, setEndpoint] = useState('');
    const [next, setNext] = useState('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20');

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(`${next}`);
                console.log(result.data);
                setEndpoint(result.data);

            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, [next]);

    return (
        <>
            <article className="page-logo">
                <img src={logo} alt="Pokemon logo" className="logo"/>
            </article>
            <article className="button-set">
                <button
                    type="button"
                    className="page-button"
                    disabled={!endpoint.previous}
                    onClick={() => setNext(endpoint.previous)}
                >Vorige
                </button>
                <button
                    type="button"
                    className="page-button"
                    disabled={!endpoint.next}
                    onClick={() => setNext(endpoint.next)}
                >Volgende
                </button>
            </article>
            <div className="pokemon-set">
                {endpoint.results && endpoint.results.map((poke) => {
                    return <Pokemon name={poke.name} url={poke.url} key={poke.name}/>
                })}
            </div>
        </>
    );
}

export default App;
