import React, { Component } from 'react';
import Search from '../components/app/news/Search';
import ArticleList from '../components/app/news/ArticleList';
export default class NewsContainer extends Component {
  state = {
    loading: true,
    news: [],
    newsAuthor: '',
  };

  render() {

    const { news, newsTitle } = this.state;

    return (
      <>
        <Search
          newsTitle={newsTitle}
          onAuthorChange={this.handleAuthorChange}
          onSubmit={this.handleSubmit}
        />
        <ArticleList news={news} />
      </>
    );
  }
}
