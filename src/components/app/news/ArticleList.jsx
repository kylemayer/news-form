import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

const ArticleList = ({ articles }) => (
  <ul aria-label="article">
    {articles.length && articles.map(({ title, author, description }) => (
      <li key={`${title}`}>
        <Article
          title={title}
          author={author}
          description={description}
        />
      </li>
    ))}
  </ul>
);


ArticleList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string,
      description: PropTypes.string
    })
  ).isRequired,
};

export default ArticleList;
