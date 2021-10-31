import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '76d7cb4bbfc6710cab35d56c193859e0';

const api = {
  GetTrending() {
    axios
      .get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`)
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log('API error' + error);
      });
    //   .then(function () {
    //     // always executed
    //   });
  },

  //   searchMovie() {},
  //   GetMovieDetails() {},
  //   GetMovieCredits() {},
  //   GetMovieReviews() {},
};
export default api;
