
const numberOfFilms = alert( "Сколько фильмов уже посмотрели?");


const personalMovieDB = {
    count :  numberOfFilms,
    movies: {},
    actors: {},
    janres: [],
    privat: false

};

const a = prompt("Один из последних фильмов");
const b = prompt("На сколько оценитие его");
const с = prompt("Один из последних фильмов");
const d  = prompt("На сколько оценитие его");


personalMovieDB.movies[a] = b;
personalMovieDB.movies[b] = d;
console.log(personalMovieDB);
