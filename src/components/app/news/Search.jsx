/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchWord, onSubmit, onSearchChange }) => (
  <form onSubmit={onSubmit}>
    <label>
      Search
      <input
        type="text"
        value={searchWord}
        onChange={onSearchChange}
        aria-label="search"
      />
    </label>
    <button aria-label="find-articles">Submit</button>
  </form>
);

Search.propTypes = {
  searchWord: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};

export default Search;
