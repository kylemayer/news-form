import React, { Component } from 'react';
import Controls from '../components/news/Controls';
import NewsList from '../components/news/NewsList';
export default class NewsContainer extends Component {
  state = {
    loading: true,
    news: [],
    newsAuthor: '',
  };

  render() {

    const { news, newsAuthor } = this.state;

    return (
      <>
        <Controls
          newsAuthor={newsAuthor}
          onTitleChange={this.handleTitleChange}
          onSubmit={this.handleSubmit}
        />
        <NewsList news={news} />
      </>
    );
  }
}
