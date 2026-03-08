const questions = [

/* =========================
PROFIL PERSONNEL (STATS)
========================= */

{
text:"Quel âge as-tu ?",
type:"number",
category:"personal",
scored:false
},

{
text:"Dans quelle ville habites-tu ?",
type:"text",
category:"personal",
scored:false
},

{
text:"Quel est ton mode de vie principal ?",
type:"choice",
category:"personal",
options:[
"Travail de bureau",
"Travail physique",
"Étudiant",
"Mixte",
"Autre"
],
scored:false
},

{
text:"Tu te décrirais comme :",
type:"choice",
category:"personal",
options:[
"Plutôt sédentaire",
"Modérément actif",
"Très actif",
"Super actif"
],
scored:false
},

{
text:"Si ta semaine était une météo :",
type:"choice",
category:"personal",
options:[
"🌧 Pluvieuse",
"🌥 Variable",
"☀️ Ensoleillée",
"🌈 Arc-en-ciel"
],
scored:false
},

/* =========================
SPORT
========================= */

{
text:"À quelle fréquence fais-tu du sport par semaine ?",
type:"choice",
category:"sport",
options:[
"0 — je connais pas le sport",
"1 fois",
"2-3 fois",
"4+ je suis accro"
],
score:[0,1,2,3],
scored:true
},

{
text:"Quel est ton sport principal ?",
type:"text",
category:"sport",
scored:false
},

{
text:"Combien de pas fais-tu par jour ?",
type:"choice",
category:"sport",
options:[
"Moins de 1000",
"1000 - 5000",
"5000 - 10000",
"+10000",
"Je ne sais pas"
],
score:[0,1,2,3,1],
scored:true
},

{
text:"Combien de temps peux-tu rester chez toi sans sortir ?",
type:"choice",
category:"sport",
options:[
"Toute ma vie",
"Une semaine",
"1-2 jours",
"Je sors tous les jours"
],
score:[0,1,2,3],
scored:true
},

{
text:"Sortir dehors pour toi c'est :",
type:"choice",
category:"sport",
options:[
"Une contrainte",
"Je préfère rester chez moi",
"J'aime bien sortir",
"J'en ai besoin"
],
score:[0,1,2,3],
scored:true
},

{
text:"Quel type de sport pratiques-tu le plus ?",
type:"choice",
category:"sport",
options:[
"Je n'en pratique pas",
"Musculation",
"Cardio",
"Sport collectif",
"Autre"
],
score:[0,2,2,2,1],
scored:true
},

{
text:"Quelle est ta raison principale de faire du sport ?",
type:"text",
category:"sport",
scored:false
},

{
text:"Sinon qu'est-ce qui t'empêche de faire plus de sport ?",
type:"choice",
category:"sport",
options:[
"Temps",
"Motivation",
"Premier pas difficile",
"Pas de partenaire"
],
scored:false
},

{
text:"Comment te déplaces-tu le plus souvent ?",
type:"choice",
category:"sport",
options:[
"Voiture",
"Transport",
"Vélo",
"A pied"
],
score:[0,1,2,3],
scored:true
},

{
text:"Combien d'heures par jour passes-tu assis ?",
type:"choice",
category:"sport",
options:[
"8h+",
"6-7h",
"3-5h",
"<3h"
],
score:[0,1,2,3],
scored:true
},

/* =========================
SOMMEIL
========================= */

{
text:"Combien d'heures dors-tu en moyenne ?",
type:"choice",
category:"sleep",
options:[
"Je dors pas (Batman)",
"5-7h",
"7-8h",
"+8h"
],
score:[0,1,3,2],
scored:true
},

{
text:"Te sens-tu reposé le matin ? (0 = jamais, 10 = toujours)",
type:"scale",
category:"sleep",
min:0,
max:10,
scored:true
},

/* =========================
ALIMENTATION
========================= */

{
text:"Combien de fast-food manges-tu par semaine ?",
type:"choice",
category:"food",
options:[
"Tous les jours",
"2-3 fois",
"1 fois ou moins",
"Jamais"
],
score:[0,1,2,3],
scored:true
},

{
text:"Combien de fois cuisines-tu par semaine ?",
type:"choice",
category:"food",
options:[
"Je cuisine pas",
"1-3 fois",
"3-5 fois",
"Tous les jours"
],
score:[0,1,2,3],
scored:true
},

{
text:"Combien de repas manges-tu par jour ?",
type:"choice",
category:"food",
options:[
"1 ou moins",
"2",
"3",
"4+"
],
score:[0,1,2,2],
scored:true
},

{
text:"Grignotes-tu entre les repas ?",
type:"choice",
category:"food",
options:[
"Souvent",
"Parfois",
"Rarement",
"Jamais"
],
score:[0,1,2,3],
scored:true
},

{
text:"Combien d'eau bois-tu par jour ?",
type:"choice",
category:"food",
options:[
"<1L",
"1L",
"1.5L",
"+2L",
"Je ne sais pas"
],
score:[0,1,2,3,1],
scored:true
},

{
text:"Manges-tu des fruits ou légumes chaque jour ?",
type:"choice",
category:"food",
options:[
"Jamais",
"Parfois",
"Souvent",
"Tous les jours"
],
score:[0,1,2,3],
scored:true
},

{
text:"Prends-tu des compléments alimentaires ?",
type:"choice",
category:"food",
options:[
"Non",
"Parfois",
"Oui régulièrement"
],
scored:false
},

{
text:"À quelle fréquence bois-tu de l'alcool ?",
type:"choice",
category:"food",
options:[
"Tous les jours",
"3-5 fois/semaine",
"1-2 fois/semaine",
"Jamais"
],
score:[0,1,2,3],
scored:true
}

];
