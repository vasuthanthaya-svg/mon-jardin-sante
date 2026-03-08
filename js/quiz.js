let index = 0;
let sport = 0;
let food = 0;
let sleep = 0;

showQuestion();

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

btn.onclick = () => answer(i);

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

localStorage.setItem("age",input.value);

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
QUESTION ÉCHELLE 0-10
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

/* score normalisé sur 3 */

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

/* normalisation */

let sportScore = Math.round((sport / 20) * 10);
let foodScore = Math.round((food / 20) * 10);
let sleepScore = Math.round((sleep / 6) * 10);

localStorage.setItem("sport", sportScore);
localStorage.setItem("food", foodScore);
localStorage.setItem("sleep", sleepScore);

window.location.href="result.html";

}

}
