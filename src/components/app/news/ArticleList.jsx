import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

const ArticleList = ({ articles }) => {
  const articleList = articles.map((article, index) => {
    return (
      <li key={index}>
        <Article {...article} />
      </li>
    );
  });

  return <ul>{articleList}</ul>;
};


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
