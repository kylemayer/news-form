/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchWord, onSubmit, onSearchChange }) => (
  <form onSubmit={onSubmit}>
    <label htmlFor="searchWord">Search</label>
    <input
      id="searchWord"
      type="text"
      value={searchWord}
      onChange={onSearchChange}
    />
    <button aria-label="find-articles">Submit</button>
  </form>
);

Search.protoTypes = {
  searchWord: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};

export default Search;
