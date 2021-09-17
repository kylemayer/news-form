/* eslint-disable max-len */
export const fetchArticles = async () => {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_TOKEN}`
  );
  const articles = await response.json();

  return articles;
};

export const fetchArticlesByWord = (param) => {
  return fetch(
    `https://newsapi.org/v2/everything?q=${param}&apiKey=${process.env.NEWS_TOKEN}`
  )
    .then((res) => res.json())
    .then((json) =>
      json.articles.map((article) => ({
        title: article.title,
        author: article.author,
        description: article.description,
      }))
    );
};
