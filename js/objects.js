const user = {
    name: 'ram',
    roll_no: 1,
    gpa: "2.95",
    greet(){
        console.log("this is user object's function.")
    }
};

for(let [key, value] in user){
    console.log(key + ": " + value)
}

const obj1 = {};

obj1.name = "name1";
console.log(obj1["name"]);

const user2 = Object.create(user);
user2.name = "hari";
user2.roll_no = 3,
user2.gpa = "4.00"
console.log(user2);

//hamile "user" ma . use garera jun access gariraxam tyo user instance ko methods/property haru bhayo
user.name = "shyam";
user.roll_no = 2;
user.gpa = "3.9";
user.section = "A";

let name = user.name;

console.log(user.name);
console.log(user.roll_no);
console.log(user.gpa);

user.greet();

console.log(user);


