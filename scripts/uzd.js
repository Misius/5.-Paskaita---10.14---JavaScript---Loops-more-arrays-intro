'use strict';
console.log('uzd.js');



// 13. atspausdinti konsoleje skaicius nuo 12 iki 24 padaugintus is 3

// for (let i = 12; i <= 24; i++) {
//     let daug3 = i * 3;
//     console.log(daug3);
// }


// 20. sudauginti skaiciu nuo kintamojo min iki kintamojo max

// min 5. max 10


// sudauginti ir aspausdinti skaiciu daugybos rezultata
// let min = 5;
// let max = 10;
// for (let i = 0; i <= 10; i++) {
//     // let random = Math.trunc((Math.random() * min) + 1)
//     let random = Math.trunc((Math.random() * max2 )+ min);
//     console.log(random);
//     // console.log(i * random);
// }

// let min = 5;
// let max = 10;
// let total = 1;
// for ( let i = min; i <= max; i++) {
//     total *= i;
//     console.log(i * max);
    
// }
// console.log(total);

// 21. Sudeti skaicius nuo 17 iki 33. ir atspausdinti suma ir kiek buvo ciklu

// let min = 17;
// let max = 33;
// let suma = 0;
// let ciklai = 0;
// for (let i = min; i <= max; i++) {
//     ciklai++
//     suma += i;
// }
// console.log(suma);
// console.log(ciklai);

// 22. sudauginti skaicius nuo -4 iki 7 ir rezultata atspausdinti padalinta is 3.

// let min = -4;
// let max = 7;
// let daugyba = 0;
// let dalyba = 0;
// for (let i = min; i <= max; i++) {
//     daugyba = i * max;
//     dalyba = daugyba / 3;
// }
// console.log(dalyba);

// 23. atspausdinti skaicius stringe nuo 44 iki 66 atskirtus "|| " zenklu


// let min = 44;
// let max = 66;
// let string = '';
// for (let i = min; i <= max; i++) {
//     // string ;
//     // console.log(string);
    
//     if (i === max) { 
//        string = string + i;
//     } else  {
//         string = string + i + ' || ';
//     }
    
// }
// console.log(string);


// 24. Suskaiciuoti kie yra skaiciau 3 kartotiniu nuo 12 iki 57

// let min = 12;
// let max = 57;
// let total = 0;
// for (let i = min; i <= max; i++) {
//     if (i % 3 === 0) {
//         total++
//     }
    
// }
// console.log(total);

// 25. suskaiciuoti koks butu vidurkis skaiciu nuo 45 iki 87

let min = 45;
let max = 87;
let total = 0;
let ciklai = 0;
for (let i = min; i <= max; i++) {
    ciklai++
    total += i; 
}
console.log(total / ciklai);

// 26. sugeneruoti 3 random skaicius nuo 1 iki 10 ir pranesti:
// a: ar buvo skaicius didesnis uz 7?

// let random = 0;
// for (let i = 0; i <= 3; i++) {
//     let random = Math.trunc((Math.random() * 10) + 1 );
//     if (random > 7) {
//         console.log('Skaičius didesnis už 7');
//     }
//     if (random < 3) {
//         console.log('Skaičius mažesnis už 3');
//     }   
// }

// b: ar buvo skaicius mazesnis uz 3?