//normal function syntax
function function_name(parameter){
    //code execution logic
}

//arrow function syntax
const function_name1 = (parameter) => {
    //code execution logic
}

function sum(a, b){
    return a + b;
}

const sum1 = (a, b) => { // const sum1 = (a, b) => a + b;
    return a + b;
}

let result = sum1(2,2);
console.log(result);

function difference(a, b){
    return a - b;
}

function product(a, b){
    return a * b;
}

let sum_result = sum(2, 2);
console.log(sum_result);

let difference_result = difference(4, 2);
console.log(difference_result);

let product_result = product(2, 2);
console.log(product_result);