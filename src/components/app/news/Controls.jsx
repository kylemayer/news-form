/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ newsTitle, onSubmit, onTitleChange }) => (
  <form onSubmit={onSubmit}>
    <input id="newsTitle" type="text" value={newsTitle} onChange={onTitleChange} />
    <button>Submit</button>
  </form>
);

Controls.protoTypes = {
  newsTitle: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onTitleChange: PropTypes.func.isRequired,
};

export default Controls;