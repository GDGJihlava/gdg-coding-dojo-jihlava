export default class MovieService {
  constructor() {
    this.movies = null;
    this.moviesPromise = null;
  }

  getBestMovies(count) {
    return this.getMovies()
      .then(function(movies) {
        return movies.slice(0, count);
      });
  };

  getMovies() {

    // TODO 1 - Cachování požadavku

    return fetchMovies();
  };
}

// Načtení dat ze serveru -------------------------------------------------------------------------

function fetchMovies() {
  return fetch("/api/movies").then(function(response) {
    return response.json();
  });
}
