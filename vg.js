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


newText.addEventListener('click', ()=>{
  grandmaText.textContent = texts[Math.floor(Math.random() * texts.length)];
})

const texts = ["Hi " + name + ". Thinking of you!",
"Thoughts for the day: I am successful at everything I do",
"Thoughts for the day: my creativity is always in demand",
"Thoughts for the day: I release the need to criticize myself",
"Hi " + name + "! Remember that you are lovable because you exist!",
"Hi " + name + "! I am so proud of all your accomplishments!",
"Hi " + name + "! Remember to stand up for yourself!",
"Mantra for the week: I am self confident",
"Hi " + name + "! You are a wonderful person and don't forget it!",
"Repeat this to yourself: I like myself today!",
"Hey " + name + "! Happy Day!",
"Hi " + name + ". Have a wonderful day! Love your self!",
"Hi " + name + "! Have a great day!",
"Hi " + name + "! Be grateful for something today. I am grateful for you!",
"" + name + " you are a wonderful person!",
"Hi " + name + "! I hope you have a great day",
 name + "! You are loved!",
"Hi " + name + "! Thinking of you! Hugs and kisses!",
 name + ": remember to love and approve of yourself!",
 name + ", believe in yourself! You can do anything!",
"You are an awesome person!",
name + " remember your own genuine self is the best self you can be!",
"Hi " + name + "! Have you seen this cute brave rat? https://people.com/pets/hero-rat-awarded-gold-medal-for-detecting-landmines-cambodia/"]

grandmaText.textContent = texts[Math.floor(Math.random() * texts.length)];
