let index = 0;

let sport = 0;
let food = 0;
let sleep = 0;

let sportMax = 0;
let foodMax = 0;
let sleepMax = 0;

let sedentaryLevel = 0;
let age = 0;

/* =========================
CALCUL SCORE MAX AUTO
========================= */

questions.forEach(q => {

if(q.scored){

let maxScore = 0;

if(q.score){
maxScore = Math.max(...q.score);
}

if(q.type === "scale"){
maxScore = 3;
}

if(q.category === "sport") sportMax += maxScore;
if(q.category === "food") foodMax += maxScore;
if(q.category === "sleep") sleepMax += maxScore;

}

});

showQuestion();

/* =========================
AFFICHER QUESTION
========================= */

function showQuestion(){

const q = questions[index];

document.getElementById("question").innerText = q.text;

const answers = document.getElementById("answers");

answers.innerHTML="";

/* =========================
CHOIX CLASSIQUE
========================= */

if(q.type === "choice"){

q.options.forEach((option,i)=>{

const btn = document.createElement("button");

btn.innerText = option;

btn.onclick = () => {

if(q.text.includes("décrirais")){
sedentaryLevel = i;
}

answer(i);

};

answers.appendChild(btn);

});

}

/* =========================
QUESTION NUMÉRIQUE
========================= */

if(q.type === "number"){

const input = document.createElement("input");

input.type = "number";

input.placeholder = "Entre ta réponse";

const btn = document.createElement("button");

btn.innerText = "Valider";

btn.onclick = () => {

if(input.value.trim()===""){
alert("Merci de remplir le champ");
return;
}

age = parseInt(input.value);

localStorage.setItem("age",age);

next();

};

answers.appendChild(input);
answers.appendChild(btn);

}

/* =========================
QUESTION TEXTE
========================= */

if(q.type === "text"){

const input = document.createElement("input");

input.type = "text";

input.placeholder = "Ta réponse";

const btn = document.createElement("button");

btn.innerText = "Valider";

btn.onclick = () => {

if(input.value.trim()===""){
alert("Merci de remplir le champ");
return;
}

if(q.text.includes("ville")){
localStorage.setItem("city",input.value);
}

next();

};

answers.appendChild(input);
answers.appendChild(btn);

}

/* =========================
QUESTION ÉCHELLE
========================= */

if(q.type === "scale"){

const input = document.createElement("input");

input.type="range";

input.min=q.min;
input.max=q.max;
input.value=5;

const label=document.createElement("p");

label.innerText="Valeur : 5";

input.oninput=()=>{

label.innerText="Valeur : "+input.value;

}

const btn=document.createElement("button");

btn.innerText="Valider";

btn.onclick=()=>{

let value=parseInt(input.value);

let score=Math.round((value/10)*3);

if(q.category==="sport") sport+=score;
if(q.category==="food") food+=score;
if(q.category==="sleep") sleep+=score;

next();

};

answers.appendChild(input);
answers.appendChild(label);
answers.appendChild(btn);

}

}

/* =========================
RÉPONSE CHOIX
========================= */

function answer(value){

const q = questions[index];

if(q.scored){

if(q.category==="sport") sport += q.score[value];
if(q.category==="food") food += q.score[value];
if(q.category==="sleep") sleep += q.score[value];

}

next();

}

/* =========================
QUESTION SUIVANTE
========================= */

function next(){

index++;

if(index < questions.length){

showQuestion();

}else{

/* =========================
IMPACT SÉDENTARITÉ
========================= */

if(sedentaryLevel === 0) sport -= 2;
if(sedentaryLevel === 1) sport -= 1;
if(sedentaryLevel === 3) sport += 1;

/* =========================
IMPACT AGE
========================= */

if(age > 50) sport += 1;
if(age < 20) sport -= 1;

/* éviter scores négatifs */

sport = Math.max(0, sport);
food = Math.max(0, food);
sleep = Math.max(0, sleep);

/* =========================
NORMALISATION
========================= */

let sportScore = Math.round((sport / sportMax) * 10);
let foodScore = Math.round((food / foodMax) * 10);
let sleepScore = Math.round((sleep / sleepMax) * 10);

localStorage.setItem("sport", sportScore);
localStorage.setItem("food", foodScore);
localStorage.setItem("sleep", sleepScore);

window.location.href="result.html";

}

}
