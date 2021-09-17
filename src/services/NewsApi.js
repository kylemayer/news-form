/* eslint-disable max-len */
export const formatArticles = (json) =>
  json.articles.map((article) => ({
    title: article.title,
    author: article.author,
    description: article.description,
  }));


export const fetchArticles = async () => {
  const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_TOKEN}`);
  const json = await response.json();

  return formatArticles(json);
};

export const fetchArticlesByWord = async (query) => {
  const response = await fetch(`https://newsapi.org/v2/everything?apiKey=${process.env.NEWS_TOKEN}&qInTitle=${query}`);
  const json = await response.json();

  return formatArticles(json);
};
