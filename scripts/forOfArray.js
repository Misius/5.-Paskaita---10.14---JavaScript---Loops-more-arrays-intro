'use strict';
console.log('forOfArray.js');

// let teigiami =[];

// teigiami.push(5);
// teigiami.push(7);

let numbers = [50, 15, -10, 0, 40, 7, 13, 2, -14, -27]
// 1. Iskonsolinti visas reiksmes su for of

// let visuma = '';
// for (const reiksmes of numbers) {
//   visuma =`${visuma}  ${reiksmes}`;
//   console.log(reiksmes);

// }
// console.log(visuma);



// 2. Atspausdinti visus teigiamus skaicius su for of

// for (const reiksmes of numbers) {
//     if (reiksmes >= 0) {
//         console.log(`${reiksmes}`);
//     }
// }


// 3. pakeisti 40 į 37 pagal indeksa

// numbers[4] = 37;
// console.log(numbers[4]);

// 4. Atspausdinti visas reikšmes didesnes už 10

for (const reiksmes of numbers) {
    if (reiksmes >= 10) {
        console.log(`${reiksmes}`);
    }
}

// 5. atspausdinti paskutini elementa padauginta is 2 nenaudojant rankinio indexo.

