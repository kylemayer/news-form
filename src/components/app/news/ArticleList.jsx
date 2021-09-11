import React from 'react';
import PropTypes from 'prop-types';
import Articles from './Article';

const ArticleList = ({ articles }) => (
  <ul aria-label="article-list">
    {articles.map(({ title, author, description }) => (
      <li key={title}>
        <Articles
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
      author: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ArticleList;
