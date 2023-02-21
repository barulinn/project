"use strict";

const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Какой один из посл фильмов вы посмотрели?', ''),
      b = prompt("Какую оценку вы бы ему поставили?", ''),
      c = prompt('Какой один из посл фильмов вы посмотрели?', ''),
      d= prompt("Какую оценку вы бы ему поставили?", '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);