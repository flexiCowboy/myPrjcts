'use strict';


// let numb = 5;
// console.log(numb);
// const persone = "Sugak";
// console.log(persone);
// const bool = true;

// const obj = {
//     name: "Vlad",
//     age: 24,
//     isMar: true
// };
// console.log(obj.name);
// console.log(obj["age"]);

// let array = ['1', '2','3'];
// console.log(array[1]);

//alert("sugak");

//const result = confirm("are u here?");
//console.log(result);

//const answ = prompt("are u 18?", "18");
//console.log(answ);

//const answers = [];

//answers[0] = prompt("Ur name", '');
//answers[1] = prompt("Ur secname", '');
//answers[2] = prompt("Ur age", '');
//document.write(answers);


// let incr = 10, decr = 10;


// incr++;
// decr--;
// console.log(incr++, decr--);
// console.log(5%2);


const numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Один из последних просмотренных фильмов", ""),
      b = prompt("НАсклько оцените его?", ""),
      c = prompt("Один из последних просмотренных фильмов", ""),
      d = prompt("НАсклько оцените его?", "");
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

















