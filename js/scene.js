let myPlant = localStorage.getItem("myPlant");
let city = localStorage.getItem("city") || "Ta ville";

document.getElementById("cityName").innerText = city;

const circle = document.getElementById("circle");

const types = ["herbe","jeune","fleur","arbre","chene","cactus","palmier","champignon"];

function createPlant(type,x,y){
  const img = document.createElement("img");
  img.src = "images/"+type+".png";
  img.style.left = x+"px";
  img.style.top = y+"px";
  img.onclick = () => alert("Profil : "+type);
  circle.appendChild(img);
}

createPlant(myPlant,210,210);

for(let i=0;i<9;i++){
  let type = types[Math.floor(Math.random()*types.length)];
  let angle = (i/9)*2*Math.PI;
  let x = 210 + 200*Math.cos(angle);
  let y = 210 + 200*Math.sin(angle);
  createPlant(type,x,y);
}

/* Chat */
function send(){
  let msg = document.getElementById("msgInput").value;
  if(msg.trim()==="") return;

  let messages = JSON.parse(localStorage.getItem("chat")) || [];
  messages.push(msg);
  localStorage.setItem("chat", JSON.stringify(messages));
  display();
  document.getElementById("msgInput").value="";
}

function display(){
  let messages = JSON.parse(localStorage.getItem("chat")) || [];
  let div = document.getElementById("messages");
  div.innerHTML="";
  messages.forEach(m=>{
    div.innerHTML += "<p>"+m+"</p>";
  });
}

display();