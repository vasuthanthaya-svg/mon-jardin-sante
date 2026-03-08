let sport = parseInt(localStorage.getItem("sport")) || 0;
let food = parseInt(localStorage.getItem("food")) || 0;
let sleep = parseInt(localStorage.getItem("sleep")) || 0;

/* score global */

let global = (sport + food + sleep) / 3;

/* déterminer la plante */

function determinePlant(){

/* profils spéciaux */

if(sport >= 8 && food <= 3){
return "cactus";
}

if(sleep >= 8 && sport >= 7){
return "palmier";
}

/* score global */

if(global < 3){
return "herbe";
}

if(global < 5){
return "jeune";
}

if(global < 6.5){
return "fleur";
}

if(global < 8){
return "arbre";
}

return "chene";

}

let result = determinePlant();

/* profils plantes */

const profiles = {

herbe:{
image:"images/herbe.png",
title:"🌾 Herbe libre",
desc:"Tu es au tout début de ton évolution santé, là où chaque décision peut tout changer. Comme une jeune pousse qui émerge, tu construis tes bases. À ce stade, les plus petites actions ont les effets les plus puissants : mieux t’hydrater, bouger un peu plus, améliorer ton sommeil, faire un choix alimentaire plus conscient. Il ne s’agit pas d’aller vite, mais d’avancer régulièrement. Chaque effort, même discret, renforce tes racines et prépare une transformation durable. Commence à semer de bonnes habitudes — ta vitalité ne fera que grandir. 🌱"
},

jeune:{
image:"images/jeune.png",
title:"🌿 Jeune pousse",
desc:"Tu as déjà amorcé ton évolution santé et ton potentiel est bien réel. Tes efforts commencent à porter leurs fruits, même si ton rythme reste parfois irrégulier. Avec un peu plus de constance et de régularité, tu peux progresser rapidement. Continue à renforcer tes bonnes habitudes : chaque action répétée consolide tes bases et accélère ta croissance. 🌱"
},

fleur:{
image:"images/fleur.png",
title:"🌻 Fleur solaire",
desc:"Tu as trouvé un équilibre encourageant entre activité, alimentation et repos. Tes habitudes sont bien ancrées et ton énergie commence à refléter cette harmonie. Continue à nourrir cet équilibre avec régularité et écoute de toi-même. Tu es sur une très belle dynamique — ta vitalité rayonne déjà. 🌞"
},

arbre:{
image:"images/arbre.png",
title:"🌳 Arbre stable",
desc:"Tes habitudes sont solides, régulières et bien ancrées. Tu as construit une base saine et durable qui soutient ton énergie au quotidien. Ta constance fait ta force : tu avances avec équilibre et stabilité. Continue ainsi, tu es un véritable pilier de vitalité. 🌿"
},

chene:{
image:"images/chene.png",
title:"🌲 Chêne enraciné",
desc:"Ta discipline est forte et ta constance remarquable. Tu as développé des habitudes puissantes, profondément ancrées dans ton quotidien. Rien n’est laissé au hasard : tu avances avec maîtrise, régularité et détermination. Ta stabilité inspire et ta vitalité repose sur des fondations solides."
},

cactus:{
image:"images/cactus.png",
title:"🌵 Cactus urbain",
desc:"Tu es résistant et capable d’avancer même dans des conditions imparfaites. Ta force est réelle, mais certains piliers — activité, alimentation ou repos — manquent encore d’équilibre. Avec quelques ajustements ciblés, tu peux transformer cette résistance en véritable harmonie. Un meilleur équilibre renforcera durablement ton énergie. 🌞"
},

palmier:{
image:"images/palmier.png",
title:"🌴 Palmier zen",
desc:"Tu as trouvé un très bel équilibre, porté par un sommeil de grande qualité. Ta récupération est un véritable atout et soutient efficacement ton énergie, ton humeur et ta régularité. En préservant cette harmonie entre repos, activité et alimentation, tu continues à renforcer une vitalité stable et durable. 🌞"
}

};

/* afficher résultat */

document.getElementById("plantResult").src = profiles[result].image;
document.getElementById("resultTitle").innerText = profiles[result].title;
document.getElementById("resultText").innerText = profiles[result].desc;

/* sauvegarder la plante */

localStorage.setItem("myPlant", result);

/* afficher les scores */

document.getElementById("resultText").innerHTML +=
"<br><br>Sport : "+sport+"/10"+
"<br>Sommeil : "+sleep+"/10"+
"<br>Alimentation : "+food+"/10";

/* bouton vers la scène */

function goScene(){
window.location.href="scene.html";
}
