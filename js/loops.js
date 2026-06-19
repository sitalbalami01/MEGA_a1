let array1 = ["ram", "hari", "shyam", "sita", "gita"];
let array_2d = [["ram", 19], ["hari", 20], ["sita", 21]]
//index bhaneko 0 bata suru hune bhayo, array1[0] = 1
console.log(array1);


let i = 0;
while(i < array1.length){
    console.log(array1[i]);
    i = i + 1;
}

for(let i = 0 ; i < array1.length ; i=i++){
    console.log(array1[i]);
}

//for of, for in, foreach
for(item of array1){
    console.log(item);
}

array1.forEach((a) => {
    console.log(a);
})

console.log(array1);