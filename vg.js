const grandmaText = document.getElementById("text");

const newText = document.getElementById("newText");

let texts = ["text 1", "text 2", "text 3", "text 4", "text 5"];
grandmaText.textContent = texts[Math.floor(Math.random() * texts.length)];

newText.addEventListener('click', ()=>{
  grandmaText.textContent = texts[Math.floor(Math.random() * texts.length)];
})
