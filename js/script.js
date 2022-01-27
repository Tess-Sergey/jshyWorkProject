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
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },

    rememberMyFilms: function () {
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
    },

    detectPersonalLevel: function () {
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
    },

    showMyDb: function (hidden) {
        if (!hiddenlog) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDb: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat= false;
        }else{
            personalMovieDB.privat= true;
        }
    },
    writwYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        if (genre == "" || genre == null) {
            console.log("вы не ввели данные");
            i--;
        }else{
            personalMovieDB.genre[i - 1 ] = genre;
        }
            
        }
        personalMovieDB.generes.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
    
};




// rememberMyFilms(); 


// detectPersonalLevel();


// showMyDb(personalMovieDB, privat);
 
// writwYourGenres(); 