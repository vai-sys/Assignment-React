import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import PokemonCard from './components/PokemonCard';
import SearchInput from './components/SearchInput';

const App = () => {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
        setPokemon(result.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearchChange = (event) => {
    setSearch(event.target.value.toLowerCase());
  };

  const filteredPokemon = pokemon.filter(p => p.name.includes(search));

  return (
    <div className="App text-center">
      <h1 className="text-4xl font-bold my-4">Pokémon Gallery</h1>
      <SearchInput search={search} handleSearchChange={handleSearchChange} />
      <div className="pokemon-cards flex flex-wrap justify-center">
        {filteredPokemon.map((p, index) => (
          <PokemonCard key={index} name={p.name} />
        ))}
      </div>
    </div>
  );
};

export default App;
