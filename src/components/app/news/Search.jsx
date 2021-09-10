/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ newsTitle, onSubmit, onTitleChange }) => (
  <form onSubmit={onSubmit}>
    <input id="newsTitle" type="text" value={newsTitle} onChange={onTitleChange} />
    <button>Submit</button>
  </form>
);

Search.protoTypes = {
  newsTitle: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onTitleChange: PropTypes.func.isRequired,
};

export default Search;
