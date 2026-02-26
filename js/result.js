let sport = parseInt(localStorage.getItem("sport")) || 0;
let food = parseInt(localStorage.getItem("food")) || 0;
let sleep = parseInt(localStorage.getItem("sleep")) || 0;

function determinePlant(s,f,sl){

  let avg = (s+f+sl)/3;

  if(s>=8 && sl<=3) return "champignon";
  if(sl>=8 && s>=6 && f>=6) return "palmier";
  if(s>=8 && f<=3) return "cactus";
  if(s>=8 && f>=8 && sl>=8) return "chene";
  if(s>=6 && f>=6 && sl>=6) return "arbre";
  if(avg>=6) return "fleur";
  if(avg>=4) return "jeune";

  return "herbe";
}

let result = determinePlant(sport,food,sleep);

const profiles = {

herbe:{image:"images/herbe.png",
title:"🌾 Herbe libre",
desc:"Tu es au début de ton évolution santé. Chaque petit changement aura un grand impact."},

jeune:{image:"images/jeune.png",
title:"🌿 Jeune pousse",
desc:"Bon potentiel mais encore irrégulier. Tu peux progresser rapidement."},

fleur:{image:"images/fleur.png",
title:"🌻 Fleur solaire",
desc:"Équilibre global encourageant entre activité, alimentation et repos."},

arbre:{image:"images/arbre.png",
title:"🌳 Arbre stable",
desc:"Habitudes solides et régulières. Base saine durable."},

chene:{image:"images/chene.png",
title:"🌲 Chêne enraciné",
desc:"Discipline forte et constance remarquable."},

cactus:{image:"images/cactus.png",
title:"🌵 Cactus urbain",
desc:"Résistant mais certains piliers sont déséquilibrés."},

palmier:{image:"images/palmier.png",
title:"🌴 Palmier zen",
desc:"Très bon équilibre avec excellent sommeil."},

champignon:{image:"images/champignon.png",
title:"🍄 Champignon nocturne",
desc:"Sportif mais rythme de vie chamboulax."}
};

document.getElementById("plantResult").src = profiles[result].image;
document.getElementById("resultTitle").innerText = profiles[result].title;
document.getElementById("resultText").innerText = profiles[result].desc;

localStorage.setItem("myPlant", result);

function goScene(){
  window.location.href = "scene.html";
}