const formButton = document.getElementById("form-button");

const ynList = document.querySelectorAll(".yn");
const gnList = document.querySelectorAll(".gn");


var name = sessionStorage.getItem("name");
var gma  = sessionStorage.getItem("gma");
console.log(name);
console.log(gma);


ynList.forEach((item) => {
      item.textContent = name;
  });
gnList.forEach((item) => {
    item.textContent = gma;
});


const grandmaText = document.getElementById("text");

const newText = document.getElementById("newText");

let texts = ["text 1", "text 2", "text 3", "text 4", "text 5"];
grandmaText.textContent = texts[Math.floor(Math.random() * texts.length)];

newText.addEventListener('click', ()=>{
  grandmaText.textContent = texts[Math.floor(Math.random() * texts.length)];
})
