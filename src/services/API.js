import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '76d7cb4bbfc6710cab35d56c193859e0';

const api = {
  GetTrending() {
    return axios
      .get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`)
      .then(function (response) {
        // handle success
        return response;
      })
      .catch(function (error) {
        // handle error
        console.log('API error' + error);
      });
    //   .then(function () {
    //     // always executed
    //   });
  },

  searchMovie(req) {
    return axios
      .get(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${req}&language=en-US&page=1&include_adult=false`,
      )
      .then(function (response) {
        // handle success
        return response;
      })
      .catch(function (error) {
        // handle error
        console.log('API error' + error);
      });
  },

  GetMovieDetails(id) {
    return axios
      .get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`)
      .then(function (response) {
        // handle success
        return response;
      })
      .catch(function (error) {
        // handle error
        console.log('API error' + error);
      });
  },
  //   GetMovieCredits() {},
  //   GetMovieReviews() {},
};
export default api;
