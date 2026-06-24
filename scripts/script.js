console.log("js connected!");

//result ma html ma j xa tyo store gareu
const header = document.querySelector("h1");
//header ma k xa tyo log gareu
console.log(header);
//header ko text content log gareu
console.log(header.innerText);

//header ko text update: 3ta method bata garna sikeu
header.innerText = "New Header";
header.innerHTML = "<i>New Header</i>"
header.textContent = "New Header Content";

header.style.color = "white"; //color: "white";
header.style.backgroundColor = "blue"; // background-color: "blue";

const paragraph = document.querySelector("p"); //querySelectorAll() , querySelector()[0];
paragraph.style.backgroundColor = "green";