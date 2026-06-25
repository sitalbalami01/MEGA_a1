console.log("js connected!!")

// const divs = document.querySelectorAll("div");
// console.log(divs);

// // for(let i = 0 ; i < divs.length ; i++){
// //     console.log(divs[i]);
// // }

// const parent_div = document.querySelector("#parent");
// console.log(parent_div);
// parent_div.style.backgroundColor = "purple";

// const child_divs = document.querySelectorAll(".child")
// console.log(child_divs);

// const child_div1 = document.querySelector("#div1")
// child_div1.style.color = "green";

// for(let i = 1 ; i < child_divs.length ; i++){
//     child_divs[i].style.color = "white";
// }

const divs = document.getElementsByTagName("div");
console.log(divs);

const div1 = divs[1];
console.log(div1);
div1.textContent = "new text content";

const parent_div = document.getElementById("parent");
console.log(parent_div);

const child_divs = document.getElementsByClassName("child");
console.log(child_divs);

const paragraph = document.createElement('p');
paragraph.textContent = "this is paragraph text content";
parent_div.appendChild(paragraph);

// paragraph.remove();