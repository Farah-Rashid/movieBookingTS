export const imgUrl = "https://image.tmdb.org/t/p/w500/";
export const placeholderImg = "http://via.placeholder.com/350x374";
export const apiKey = "api_key=" + process.env.REACT_APP_API_KEY;
export const baseUrl = "https://api.themoviedb.org/3";
export const apiUrl =
  baseUrl + "/discover/movie?sort_by=popularity.desc&" + apiKey;
export const searchUrl = baseUrl + "/search/movie?" + apiKey + "&query=";
export const data = {
  id: ["A", "B", "C", "D"],
  seats: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
};
