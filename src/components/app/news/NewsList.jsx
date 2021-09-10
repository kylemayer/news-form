import React from 'react';
import PropTypes from 'prop-types';
import News from './News';

const NewsList = ({ news }) => (
  <ul aria-label="news">
    {news.map(({ title, author, description }) => (
      <li key={author}>
        <News
          title={title}
          author={author}
          description={description}
        />
      </li>
    ))}
  </ul>
);

NewsList.propTypes = {
  news: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default NewsList;
