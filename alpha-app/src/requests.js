const API_Key="a1acead7890a86d8c95c99fee03b5c92";

const requests={
fetchTrending:`/trending/movie/week?api_key=${API_Key}&language=en-US`,
fetchNetflixOriginals:`/discover/tv?api_key=${API_Key}&with_network=213`,
fetchToprated:`/movie/top_rated?api_key=${API_Key}&language=en-US`,
fetchActionMovies:`/discover/movie?api_key=${API_Key}&with_genres=28`,
fetchComedyMovies:`/discover/movie?api_key=${API_Key}&with_genres=35`,
fetchHorrorMovies:`/discover/movie?api_key=${API_Key}&with_genres=27`,
fetchRomanceMovies:`/discover/movie?api_key=${API_Key}&with_genres=10749`,
fetchDocumentaries:`/discover/movie?api_key=${API_Key}&with_genres=99`,
}
export default requests;