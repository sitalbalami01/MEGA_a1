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

//rest operator euta function ma euta matra huna parxa
//fucntion function_name(...rest1, ...rest2);
//rest operator chai last parameter nai huna paryo
function team(captain, vice_captain, ...teams){
    console.log(captain);
    console.log(vice_captain);
    for(team of teams){
        console.log(team);
    }
}

team("ram", "shyam", "member1", "member2", "memeber3", "member4");     