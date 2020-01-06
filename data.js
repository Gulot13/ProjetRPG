const mission = {
  speech:[
    "Bonjour, jeune aventurie. Te voila dans le donjon de la difficulté, je pense que si tu est ici c'est pour regler la difficulté du monde... Par contre fais attention donjon est spécial il faut avancé pas a pas. par exemple en dessous deux choix se présente a toi. Fais le bon ;)",
    "J'admire ton courage ! Maintenant on va tester tes technique de combat. Je te présente EPOUVANTAIL D'ENTRAÎNEMENT, bon courage ! Ensuite tu devras choisir entre descendre par le wagon de la mort ou l'escalier de la glissade.",
    "<h1>GAME OVER !</h1>Dommage mais c'était le mauvais choix... Je t'invite a mieux réfléchir une prochaine fois...",
    "Ouf ! Bon choix ! Maintenant je crois que le reglage de difficulté est vers la droite... ou la gauche... euh je sais plus mais fais attention dans une des deux il y a un monstre terrifiant !",
    "J'ai nommé cet escalier car quand j'étais petit a chaque passage je tombais mais je me rappelle plus pourquoi.... Oh non! Ca y est je m'en rappelle ! Regarde là ! Derrière Toi ! Cette araignée géante me terrifier.",
    "Aller c'est parti tu peux tuer cette araignée géante !", // 5
    "C'est un vrai labyrinthe! Il faudrait peut être monté? Je me perds a chaque fois...",
    "Oups, c'est le mauvais chemin... Je te présente pas beau un des monstre les plus gros et fort de ce donjon... Fallait bien que ca arrive un jour... De plus c'ets une impasse",
    "Je me rappelle pas que c'était aussi long a monter dans cette salle... Je pense qu'on devrait aller sur la Gauche, ça me dis un truc...",
    "C'est une impasse. <span class='desc'>La porte se referme et un petit trou se forme au fond de la salle.</span> Hum j'ai l'impression on est tombé dans un piège... Regarde dans le mur au fond il y a un bouton, je vois que ca pour continuer a avancer...",
    "<span id='desc'>Le sol s'ouvre en deux et vous tombé dans devant la première intersection</span> AAAHHHH j'ai eu la peur de ma vie je pensais qu'on allais y rester. Bon nous revoila au début, dommage...", // 10
    "<h1>GAME OVER !</h> vous êtes mort de faim !", // 11
    "Nous voici dans un long couloir, on voit pas le fond mais on devrait avancer pour voir... <span class='desc'>Au bout d'une bonne heure de marche vous ne voyez toujours pas le bon du couloir.</span> Je pense que c'est un couloir sans fin on devrait faire demi-tours. AAAAHH REGARDE DERRIERE il y a un serpent énorme qui nous empêche de faire marche arrière!",
    "Bien joué! Maintenant on peut revenir en arrière !",
    "Enfin arrivé ! Tu as réussi a atteindre le reglage de difficulté ! Bien jouer n'hésite pas a revenir !"
  ],
  reponse:[
    [["Continuer d'avancé", "Reculé et sortir"], [1,2]],
    [["Wagon de la mort", "Escalier de la glissade"], [3,4]],
    [],
    [["Droite","Passer derrière les lièrre en face", "Gauche"], [6,12,7]],
    [["Courir", "Se retourner et l'affronté"], [3,5]],
    [["Continuer d'avancé"], [3]], // 5
    [["Monter", "Retourner en arrière"], [8,3]],
    [["Retourner en arrière"], [3]],
    [["Gauche","Tout droit", "Retourner a la première intersection"], [9,14,3]], // 14 = win
    [["Appuyer sur le bouton", "attendre"], [10,11,]],
    [["Droite","Passer derrière les lièrre en face", "Gauche"], [6,8,7]], // 10
    [],
    [["Se retourner et l'affronté", "Continuer d'avancer"], [13,11]],
    [["Retourner en arrière", "Continuer d'avancer"], [3, 11]],
    [] // 14 win
  ],
  perso:[
    ["Guerrier", 100, 2, 1, "Les Guerriers sont entrainer et résistant. Ils ont 100pv, 2 points de résistance et 1 points de force"],
    ["Agile", 80, 0.5, 5, "Les Agile sont rapide et font de gros dégâts mais très fragile. Ils ont 80pv, 0.5 points de résistance et 5 points de force"],
    ["tank", 150, 10, 0.2, "Les tanks sont très solide et résistant mais n'arrive pas a attaquer force. Ils ont 150pv, 10 points de résistances et 0.2 points de force"]
  ],
  combat:[
    [],
    ["EPOUVANTAIL D'ENTRAÎNEMENT", 50, 0.2, 0.1],
    [],
    [],
    [],
    ["ARAIGNÉE GÉANTE", 30, 1, 1.2], // 5
    [],
    ["PAS BEAU", 80, 3, 1.5],
    [],
    [],
    [], // 10
    [],
    [],
    ["SERPENT GÉANT", 70, 0.2, 5],
    [] // win
  ]
};
