// pv = point de vie
// pr = point de resistance
// pf = force
const perso = {"hero": "none"}

const rdn = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const setText = (text) => {
  document.getElementById("text").innerHTML = text;
};

const setChoice = (choices) => {
    for (let i = 0; i < choices.length; i++) {
      let button = document.createElement("button");
      button.textContent = choices[i];
      document.getElementById("choice").appendChild(button).setAttribute("id", i);
      document.getElementById(i).setAttribute("onclick", `Javascript:ouJeSuis(${i})`);
    }
};

function ouJeSuis(index) {
  document.getElementById("text").innerHTML = "";
  document.getElementById("choice").innerHTML = "";
  setText(mission.speech[index]);
  setChoice(mission.reponse[index]);
  if (mission.combat[index].length === 4){
    let stremon = new personnage(mission.combat[index][0], mission.combat[index][1], mission.combat[index][2], mission.combat[index][3]);
    while (stremon.) {

    }
    perso.hero.attack(stremon);
    stremon.attack(perso.hero);
  }
}

//ouJeSuis(0)

class personnage {
  constructor(nom, pv, pr, pf) {
    this.nom = nom;
    this.pv = pv;
    this.pr = pr;
    this.pf = pf;
    this.xp = 0;
    this.inv = {
      argent: 800,
    };
  }
  set setPv(pv){
    this.pv = pv;
  }
  set setPr(pr){
    this.pr = pr;
  }
  set setPf(pf){
    this.pf = pf;
  }
  getter getPv
  attack(cible){
    if (this.pv > 0){
      if (cible.pv > 0) {
        let hit = (rdn(1,10) * this.pf)/cible.pr;
        console.log(`tu inflige ${hit} a ${cible.nom}`);
        cible.setPv= cible.pv - hit;
        // Systeme d'xp
        this.xp = rdn(2,25);
        // Level up!
        if (this.xp > 50){
          this.pr *= 1.2;
          this.pf *= 1.2;
          this.xp = 0;
        }
      } else {
        console.log("ta cible n'a plus assez de pv");
      }
    }
  }
  desc(){
    return `${this.nom} a ${this.pv}PV, ${this.pr} de point de résistance, ${this.pf} de point de force et ${this.xp}XP.`;
  }
}

document.getElementById("text").innerHTML = mission.perso[0][4]
document.getElementById("text").innerHTML += "<br>" + mission.perso[1][4]
document.getElementById("text").innerHTML += "<br>" + mission.perso[2][4]
let button = document.createElement("button");
button.textContent = mission.perso[0][0];
document.getElementById("choice").appendChild(button).setAttribute("id", 0);
document.getElementById(0).setAttribute("onclick", `Javascript:perso.hero = new personnage("${mission.perso[0][0]}", ${mission.perso[0][1]}, ${mission.perso[0][2]}, ${mission.perso[0][3]}); ouJeSuis(0)`);
let button1 = document.createElement("button");
button1.textContent = mission.perso[1][0];
document.getElementById("choice").appendChild(button1).setAttribute("id", 1);
document.getElementById(1).setAttribute("onclick", `Javascript:perso.hero = new personnage("${mission.perso[1][0]}", ${mission.perso[1][1]}, ${mission.perso[1][2]}, ${mission.perso[1][3]}); ouJeSuis(0)`);
let button2 = document.createElement("button");
button2.textContent = mission.perso[2][0];
document.getElementById("choice").appendChild(button2).setAttribute("id", 2);
document.getElementById(2).setAttribute("onclick", `Javascript:perso.hero = new personnage("${mission.perso[2][0]}", ${mission.perso[2][1]}, ${mission.perso[2][2]}, ${mission.perso[2][3]}); ouJeSuis(0)`);
