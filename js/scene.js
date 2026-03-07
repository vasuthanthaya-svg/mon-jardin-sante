let myPlant = localStorage.getItem("myPlant");
let city = localStorage.getItem("city") || "Ta ville";

document.getElementById("cityName").innerText = city;

const circle = document.getElementById("circle");

/* =========================
PLANTES
========================= */

const types = [
"herbe",
"jeune",
"fleur",
"arbre",
"chene",
"cactus",
"palmier",
"champignon"
];

function createPlant(type,x,y){

const img = document.createElement("img");

img.src = "images/"+type+".png";

img.style.left = x+"px";
img.style.top = y+"px";

img.onclick = () => alert("Profil : " + type);

circle.appendChild(img);

}

/* Ta plante */

createPlant(myPlant,210,210);

/* Autres plantes */

for(let i=0;i<9;i++){

let type = types[Math.floor(Math.random()*types.length)];

let angle = (i/9)*2*Math.PI;

let x = 210 + 200*Math.cos(angle);
let y = 210 + 200*Math.sin(angle);

createPlant(type,x,y);

}

/* =========================
CHAT
========================= */

function send(){

let msg = document.getElementById("msgInput").value;

if(msg.trim()==="") return;

let messages = JSON.parse(localStorage.getItem("chat")) || [];

messages.push(msg);

localStorage.setItem("chat", JSON.stringify(messages));

displayChat();

document.getElementById("msgInput").value="";

}

function displayChat(){

let messages = JSON.parse(localStorage.getItem("chat")) || [];

let div = document.getElementById("messages");

div.innerHTML="";

messages.forEach(m=>{

let p = document.createElement("p");

p.innerText = m;

div.appendChild(p);

});

div.scrollTop = div.scrollHeight;

}

displayChat();

/* =========================
ACTIVITÉS
========================= */

function addActivity(){

let title = document.getElementById("actTitle").value;

let time = document.getElementById("actTime").value;

let place = document.getElementById("actPlace").value;

if(title=="" || time=="" || place==""){

alert("Remplis tous les champs");

return;

}

let activities = JSON.parse(localStorage.getItem("activities")) || [];

activities.push({
title:title,
time:time,
place:place
});

localStorage.setItem("activities", JSON.stringify(activities));

displayActivities();

document.getElementById("actTitle").value="";
document.getElementById("actTime").value="";
document.getElementById("actPlace").value="";

}

function displayActivities(){

let activities = JSON.parse(localStorage.getItem("activities")) || [];

let list = document.getElementById("activityList");

list.innerHTML="";

activities.forEach(a=>{

let div = document.createElement("div");

div.className="activity";

div.innerHTML = "📌 "+a.title+" — "+a.time+" — "+a.place;

list.appendChild(div);

});

}

displayActivities();

/* =========================
TUTORIEL
========================= */

let step = 0;

const tutorialSteps = [

{
title:"🌱 Bienvenue dans le Jardin Santé",
text:"Voici votre jardin santé. Ici vous pouvez rencontrer des personnes de votre ville et découvrir leurs profils."
},

{
title:"🌿 Le jardin",
text:"Chaque plante représente une personne ayant fait le questionnaire.",
highlight:"circle"
},

{
title:"👥 Profils",
text:"Cliquez sur une plante pour voir le profil d'une personne."
},

{
title:"📅 Activités",
text:"Vous pouvez proposer ou rejoindre des activités avec les personnes de votre ville.",
highlight:"activities"
}

];

function showTutorial(){

const t = tutorialSteps[step];

document.getElementById("tutoTitle").innerText = t.title;
document.getElementById("tutoText").innerText = t.text;

document.querySelectorAll(".highlight").forEach(e=>{
e.classList.remove("highlight");
});

if(t.highlight){
document.getElementById(t.highlight).classList.add("highlight");
}

}

function nextTutorial(){

step++;

if(step >= tutorialSteps.length){

document.getElementById("tutorial").style.display="none";
return;

}

showTutorial();

}

showTutorial();
