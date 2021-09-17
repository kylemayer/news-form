import React, { Component } from 'react';
import Search from '../components/app/news/Search';
import ArticleList from '../components/app/news/ArticleList';
import { fetchArticles, fetchArticlesByWord } from '../services/newsApi';
export default class NewsSearch extends Component {
  state = {
    loading: false,
    articles: [],
    searchWord: '',
  };

  async componentDidMount() {
    const articles = await fetchArticles();
    this.setState({ articles, loading: false });
  }

  handleSearchChange = (event) => {
    this.setState({ searchWord: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    this.setState({ loading: true });
    const articles = await fetchArticlesByWord(this.state.searchWord);
    this.setState({ articles, loading: false });
  };

  render() {

    const { loading, searchWord, articles  } = this.state;

    if(loading) return <h3>Loading...</h3>;

    return (
      <>
        <Search
          searchWord={searchWord}
          onSearchChange={this.handleSearchChange}
          onSubmit={this.handleSubmit}
        />
        <ArticleList articles={articles} />
      </>
    );
  }
}
