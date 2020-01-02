// pv = point de vie
// pr = point de volonté
// pf = force

const rdn = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const setText = (text) => {
  document.getElementById("text").innerHTML = text;
};
const setChoice = (choices) => {
  let choice = choices.split(";");
  for (var i = 0; i < choice.length; i++) {
    let button = document.createElement("button");
    button.textContent = choice[i];
    document.getElementById("choice").appendChild(button).setAttribute("id", i);
  }
};

class personnage {
  constructor(nom, pv, pr, pf) {
    this.nom = nom;
    this.pv = pv;
    this.pvo = pvo;
    this.pi = pi;
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
  attack(cible){
    if (this.pv > 0){
      if (cible.pv > 0) {
        let hit = (rdn(1,10) * this.pf)/cible.pr;
        console.log(`tu inflige ${hit} a ${cible.nom}`);
        cible.setPv= cible.pv - hit;
      } else {
        console.log("ta cible n'a plus assez de pv");
      }
    }
  }
  desc(){
    return `${this.nom} a ${this.pv}PV, ${this.pr} de point de résistance, ${this.pf} de point de force et ${this.xp}XP.`;
  }
}

const myHero = new personnage("Pas ouf", 100, 0.5, 0.5);
const stremon = new personnage("pas beau", 20, 5, 1);


myHero.attack(stremon);
