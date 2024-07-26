
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokemonCard = ({ name }) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        setPokemon(result.data);
      } catch (error) {
        console.error('Error fetching Pokémon data:', error);
      }
    };

    fetchPokemonData();
  }, [name]);

  if (!pokemon) return null;

  return (
    <div className="pokemon-card border p-6 m-4 rounded-lg shadow-xl text-center bg-white">
      <img src={pokemon.sprites.front_default} alt={name} className="w-32 h-32 mx-auto mb-4" />
      <h3 className="text-2xl font-bold mb-4">{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
      <p className="text-md font-medium text-gray-700 mb-2">Types:</p>
      <div className="flex flex-wrap justify-center gap-3 mb-4">
        {pokemon.types.map((type, index) => (
          <span key={index} className="px-4 py-2 bg-gray-200 rounded-full text-gray-800 text-sm font-medium">
            {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
          </span>
        ))}
      </div>
      <p className="text-md font-medium text-gray-700 mb-2">Abilities:</p>
      <div className="flex flex-wrap justify-center gap-3 mb-4">
        {pokemon.abilities.map((ability, index) => (
          <span key={index} className="px-4 py-2 bg-gray-200 rounded-full text-gray-800 text-sm font-medium">
            {ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1)}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;

