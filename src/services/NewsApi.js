export const wrangleNews = (json) =>
  json.map((news) => ({
    title: news.title,
    author: news.author,
    description: news.description,
  }));

export const getNews = async () => {
  const response = await fetch('https://newsapi.org/v2/everything');
  const json = await response.json();

  return wrangleNews(json);
};

// export const getNewsByTitle = async (newsTitle) => {
//   const response = await fetch('https://newsapi.org/v2/everything/${newTitle}/');
//   const json = await response.json();

//   return wrangleNews(json);
// };
