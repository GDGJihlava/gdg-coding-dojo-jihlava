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
    
    if (this.moviesPromise) {
      return this.moviesPromise;
    }

    // TODO 1 - Cachování požadavku
    this.moviesPromise = fetchMovies();

  };
}

// Načtení dat ze serveru -------------------------------------------------------------------------

function fetchMovies() {
  return fetch("/api/movies").then(function(response) {
    return response.json();
  });
}
