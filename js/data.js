const questions = [

/* =========================
   PROFIL PERSONNEL
   ========================= */

{
  text: "Quel âge as-tu ?",
  type: "number",
  category: "personal",
  scored: false
},

{
  text: "Dans quelle ville habites-tu ?",
  type: "text",
  category: "personal",
  scored: false
},

{
  text: "Quel est ton mode de vie principal ?",
  type: "choice",
  category: "personal",
  options: [
    "Travail de bureau",
    "Travail physique",
    "Étudiant",
    "Mixte",
    "Autre"
  ],
  scored: false
},

{
  text: "Tu te décrirais comme :",
  type: "choice",
  category: "personal",
  options: [
    "Plutôt sédentaire",
    "Modérément actif",
    "Très actif",
    "Hyperactif"
  ],
  scored: false
},

{
  text: "Si ta semaine était une météo :",
  type: "choice",
  category: "personal",
  options: [
    "🌧 Pluvieuse (fatigue)",
    "🌥 Variable",
    "☀️ Ensoleillée",
    "🌈 Pleine d'énergie"
  ],
  scored: false
},

/* =========================
   SPORT
   ========================= */

{
  text: "À quelle fréquence fais-tu du sport par semaine ?",
  type: "choice",
  category: "sport",
  options: ["0", "1", "2-3", "4+"],
  score: [0,1,2,3],
  scored: true
},

{
  text: "As-tu un sport de cœur ?",
  type: "choice",
  category: "sport",
  options: ["Non", "Oui mais irrégulier", "Oui régulier", "Oui passionné"],
  score: [0,1,2,3],
  scored: true
},

{
  text: "Combien de pas fais-tu par jour ?",
  type: "choice",
  category: "sport",
  options: ["<4000", "4000-7000", "7000-10000", "10000+"],
  score: [0,1,2,3],
  scored: true
},

{
  text: "Sortir dehors est pour toi :",
  type: "choice",
  category: "sport",
  options: ["Une contrainte", "Ça dépend", "Une nécessité", "Un plaisir quotidien"],
  score: [0,1,2,3],
  scored: true
},

{
  text: "Comment te déplaces-tu le plus souvent ?",
  type: "choice",
  category: "sport",
  options: ["Voiture", "Transports", "Vélo", "À pied"],
  score: [0,1,2,3],
  scored: true
},

{
  text: "Combien d'heures es-tu assis par jour ?",
  type: "choice",
  category: "sport",
  options: ["8h+", "6-8h", "4-6h", "<4h"],
  score: [0,1,2,3],
  scored: true
},

{
  text: "Si le sport était une série Netflix :",
  type: "choice",
  category: "sport",
  options: [
    "📺 Bande-annonce",
    "🎬 1 épisode/semaine",
    "🔥 3 séances",
    "🏆 Saison complète"
  ],
  scored: false
},

{
  text: "Qu'est-ce qui t'empêche de faire plus de sport ?",
  type: "choice",
  category: "sport",
  options: ["Temps", "Motivation", "Fatigue", "Rien"],
  scored: false
},

/* =========================
   SOMMEIL
   ========================= */

{
  text: "Combien d'heures dors-tu en moyenne ?",
  type: "choice",
  category: "sleep",
  options: ["<5h", "5-6h", "7-8h", "8h+"],
  score: [0,1,3,2],
  scored: true
},

{
  text: "À quelle heure te couches-tu ?",
  type: "choice",
  category: "sleep",
  options: ["Après 1h", "Minuit", "22-23h", "Avant 22h"],
  score: [0,1,2,3],
  scored: true
},

{
  text: "Ton téléphone au lit :",
  type: "choice",
  category: "sleep",
  options: ["Toujours", "Souvent", "Parfois", "Jamais"],
  score: [0,1,2,3],
  scored: true
},

{
  text: "Au réveil tu es :",
  type: "choice",
  category: "sleep",
  options: ["Épuisé", "Fatigué", "Correct", "En forme"],
  score: [0,1,2,3],
  scored: true
},

/* =========================
   ALIMENTATION
   ========================= */

{
  text: "Combien de fast-food par semaine ?",
  type: "choice",
  category: "food",
  options: ["3+", "2", "1", "0"],
  score: [0,1,2,3],
  scored: true
},

{
  text: "Combien de fois cuisines-tu par semaine ?",
  type: "choice",
  category: "food",
  options: ["0-1", "2-3", "4-5", "6+"],
  score: [0,1,2,3],
  scored: true
},

{
  text: "Manges-tu des fruits/légumes chaque jour ?",
  type: "choice",
  category: "food",
  options: ["Jamais", "Parfois", "Souvent", "Tous les jours"],
  score: [0,1,2,3],
  scored: true
},

{
  text: "Combien de litres d'eau bois-tu par jour ?",
  type: "choice",
  category: "food",
  options: ["<1L", "1L", "1.5L", "2L+"],
  score: [0,1,2,3],
  scored: true
},

{
  text: "Grignotes-tu entre les repas ?",
  type: "choice",
  category: "food",
  options: ["Souvent", "Parfois", "Rarement", "Jamais"],
  score: [0,1,2,3],
  scored: true
},

{
  text: "Consommation d'alcool :",
  type: "choice",
  category: "food",
  options: ["Fréquente", "Hebdomadaire", "Occasionnelle", "Rarement"],
  score: [0,1,2,3],
  scored: true
},

{
  text: "Comptes-tu tes calories ?",
  type: "choice",
  category: "food",
  options: ["Jamais", "Parfois", "Souvent", "Toujours"],
  scored: false
},

{
  text: "Prends-tu des compléments alimentaires ?",
  type: "choice",
  category: "food",
  options: ["Non", "Occasionnellement", "Oui régulièrement"],
  scored: false
}

];
