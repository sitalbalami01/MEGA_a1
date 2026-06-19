let array1 = [1, 2, 3, 4];
let array2 = new Array(5, 6, 7, 8);

let array3 = [...array1, ...array2];
let array4 = [1, 2, 3, 4, ...array2];
let array5 = [...array1, 5, 6, 7, 8];

console.log(array1);
console.log(array2);
console.log(array3);
console.log(array4);
console.log(array5);


function logger(...items){
    for(item of items){
        console.log(item);
    }
}

logger(1, 2, 3);