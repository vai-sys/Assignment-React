import React from 'react';

const SearchInput = ({ search, handleSearchChange }) => (
  <input
    type="text"
    placeholder="Search Pokémon"
    onChange={handleSearchChange}
    value={search}
    className="p-2 m-4 border rounded-lg w-full max-w-sm mx-auto"
  />
);

export default SearchInput;
