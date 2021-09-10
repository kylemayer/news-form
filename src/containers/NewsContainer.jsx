import React, { Component } from 'react';
import Controls from '../components/news/Controls';
import NewsList from '../components/news/NewsList';
export default class NewsContainer extends Component {
  state = {
    loading: true,
    news: [],
    newsTitle: '',
  };

  render() {

    const { news, newsTitle } = this.state;

    return (
      <>
        <Controls
          newsTitle={newsTitle}
          onTitleChange={this.handleTitleChange}
          onSubmit={this.handleSubmit}
        />
        <NewsList news={news} />
      </>
    );
  }
}
