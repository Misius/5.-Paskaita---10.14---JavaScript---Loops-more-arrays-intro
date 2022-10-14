'use strict';
console.log('array.js');


let a = 5;
let b = 8;
let c = 10;

//  Objekto pvc:

let vidObj = {
    pirmas: 5,
    antras: 8,
    trecias: 10,
};

//  Masyvas, array 
// i 0  1  2....
//  [5, 8, 10]


// let vidurkiai = [5, 8, 10];
// let spalvos = ['red', 'green', 'blue'];
// let mixed = ['red', 50, null];


// vidurkiai[0]; //bus 5
// vidurkiai[0] = 20; //bus 20
// vidurkiai[5] = 20; //bus 5, 8, 10, nieko, 20

let vidurkiai = [5, 8, 10, 9];
// console.log('vidurkiai ===', vidurkiai);
// console.log(vidurkiai[0]); //0
// console.log(vidurkiai[1]); //1
// console.log(vidurkiai[2]); //2
// console.log(vidurkiai[3]); //3

// let string = '';
// for (let i = 0; i < 4; i++) {
//     string = string + vidurkiai[i] + ' ';
// }
// console.log(string);

for (let i = 0; i < vidurkiai.length; i++) {
    const skaicius = vidurkiai[i];
    console.log(skaicius * 2);
}

for (let skaicius of vidurkiai) {
    console.log(skaicius * 2);
}