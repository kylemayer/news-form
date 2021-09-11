/* eslint-disable max-len */
export const formatArticles = (json) =>
  json.map((article) => ({
    title: article.title,
    author: article.author,
    description: article.description,
  }));

export const fetchArticles = async () => {
  const response = await fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=a5bb6384dbe143e49ab13e067894a099');
  const json = await response.json();

  return formatArticles(json);
};

export const fetchArticlesByWord = async () => {
  const response = await fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=a5bb6384dbe143e49ab13e067894a099');
  const json = await response.json();

  return formatArticles(json);
};
