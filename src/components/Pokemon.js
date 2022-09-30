import React, {useEffect, useState} from "react";
import axios from "axios";

function Pokemon( {name, url} ) {
const [pokemon, setPokemon] = useState('');

    useEffect(() => {
        async function fetchPokemons() {
            try {
                const response = await axios.get(`${url}`);
                setPokemon(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchPokemons();
    }, []);

    return (
        <section
            className="pokemon-card"
        >
            {pokemon && <>
                <h4>{pokemon.species.name}</h4>
                <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.species.name} className="pokemon-image"/>
                <p>Moves: {pokemon.moves.length}</p>
                <p>Weight: {pokemon.weight}</p>
                <p>Abilities:</p>
                <div>{pokemon.abilities.map((ability) => {
                    return <ul className="ability-list">
                        <li key={name}>{ability.ability.name}</li>
                    </ul>
                })}</div>
            </>
            }
        </section>
    );
}

export default Pokemon;