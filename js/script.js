'use strict';


let numb = 5;
console.log(numb);
const persone = "Sugak";
console.log(persone);
const bool = true;

const obj = {
    name: "Vlad",
    age: 24,
    isMar: true
};
console.log(obj.name);
console.log(obj["age"]);

let array = ['1', '2','3'];
console.log(array[1]);

//alert("sugak");

//const result = confirm("are u here?");
//console.log(result);

//const answ = prompt("are u 18?", "18");
//console.log(answ);

const answers = [];

answers[0] = prompt("Ur name", '');
answers[1] = prompt("Ur secname", '');
answers[2] = prompt("Ur age", '');
document.write(answers);

