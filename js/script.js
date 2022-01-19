'use strict';

let numberOfFilms;

function start() {
    while (numberOfFilms == ''|| numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt( "Сколько фильмов уже посмотрели?");
    }
}

start();

const personalMovieDB = {
    count :  numberOfFilms,
    movies: {},
    actors: {},
    janres: [],
    privat: true
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = +prompt("Один из последних фильмов");
        const b = +prompt("На сколько оценитие его");
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}
}

rememberMyFilms();



function detectPersonalLevel() {
    if (personalMovieDB.count <= 10) {
        console.log('Просмотрено много фильмов');
        
    }
     else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log("Вы классический зритель");
    } 
    else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } 
    else {
      console.log("Произошла ошибка");  
    } 
}

detectPersonalLevel();

function showMyDb(hidden) {
    if (!hiddenlog) {
        console.log(personalMovieDB);
    }
}

showMyDb(personalMovieDB, privat);


function writwYourGenres() {
    for (let i = 1; i <= 3; i++) {
    const genre = prompt(`Ваш любимый жанр под номером ${i}`);
    personalMovieDB.genre[i - 1 ] = genre;
        
    }
}

writwYourGenres(); 