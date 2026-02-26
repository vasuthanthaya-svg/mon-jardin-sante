let index = 0;
let sport = 0;
let food = 0;
let sleep = 0;

showQuestion();

function showQuestion(){
  const q = questions[index];
  document.getElementById("question").innerText = q.text;
  const answers = document.getElementById("answers");
  answers.innerHTML = "";

  /* =========================
     QUESTION À CHOIX
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
      if(input.value.trim() === ""){
        alert("Merci de remplir le champ");
        return;
      }

      // Sauvegarde âge
      localStorage.setItem("age", input.value);
      next();
    };

    answers.appendChild(input);
    answers.appendChild(btn);
  }

  /* =========================
     QUESTION TEXTE (VILLE)
  ========================= */
  if(q.type === "text"){
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Entre ta ville";

    const btn = document.createElement("button");
    btn.innerText = "Valider";

    btn.onclick = () => {
      if(input.value.trim() === ""){
        alert("Merci de remplir le champ");
        return;
      }

      // Sauvegarde ville
      localStorage.setItem("city", input.value);
      next();
    };

    answers.appendChild(input);
    answers.appendChild(btn);
  }
}

function answer(value){
  const q = questions[index];

  if(q.scored){
    if(q.category === "sport") sport += q.score[value];
    if(q.category === "food") food += q.score[value];
    if(q.category === "sleep") sleep += q.score[value];
  }

  next();
}

function next(){
  index++;

  if(index < questions.length){
    showQuestion();
  }else{
    localStorage.setItem("sport", sport);
    localStorage.setItem("food", food);
    localStorage.setItem("sleep", sleep);

    window.location.href = "result.html";
  }
}