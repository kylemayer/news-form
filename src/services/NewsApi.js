export const wrangleNews = (json) =>
  json.map((news) => ({
    title: news.title,
    author: news.author,
    description: news.description,
  }));

export const getNews = async () => {
  const response = await fetch('');
  const json = await response.json();

  return wrangleNews(json);
};

export const getNewsByAuthor = async (newsAuthor) => {
  const response = await fetch('');
  const json = await response.json();

  return wrangleNews(json);
};
