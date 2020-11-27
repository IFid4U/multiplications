var multiplicateurNumber = Number;
var minMultiplicateurNumber = 0;
var maxMultiplicateurNumber = 10;
var resultat = Number;
var valeurTable = Number;
var minValeurTable = 0;
var maxValeurTable = 10;
var saisie = Text;
var reponse = Number;
var questions = 0;
var reponse = Number;
var input = Text;

function multiplication() {
  for (let questions = 0; questions < 10; questions++){
    //quelle que soit l'option, le nombre multiplicateur est donné au hasard, on déclare sa variable
    var multiplicateurNumber = minMultiplicateurNumber + Math.floor(Math.random() * (maxMultiplicateurNumber - minMultiplicateurNumber));
    // Sélectionner l'élément input et récupérer sa valeur
    
    var input = document.getElementById("valeurTable").value;
    
    // Nommer la valeur de retour de table choisie
    
    //valeurTable = input;
    
    //test de bon retour
    //alert(valeurTable); 
    //cas numéro 1 : si pas d'input de l'utilisateur, on click : version full random des tables

    //var saisie= input;
    parseInt(input);
    //alert(saisie);


      if (valeurTable = input) {
        parseInt(input);
        resultat = multiplicateurNumber * valeurTable;
        
        var reponse = prompt(`Combien font ${valeurTable} fois ${multiplicateurNumber} ?`);
        parseInt(reponse);
        //alert(saisie);
        resultat = valeurTable * multiplicateurNumber;
      } else 
      if (input = "toutes"){
        valeurTable = minValeurTable + Math.floor(Math.random() * (maxValeurTable - minValeurTable));
        resultat = multiplicateurNumber * valeurTable;
        
        var reponse = prompt(`Combien font ${valeurTable} fois ${multiplicateurNumber} ?`);
        parseInt(reponse);
        //alert(saisie);
        resultat = valeurTable * multiplicateurNumber;
      }

    if (reponse != resultat) {
      alert("Essaie encore");
      var reponse = prompt(`Combien font ${valeurTable} fois ${multiplicateurNumber} ?`);
      if (reponse != resultat) {
        alert(innerText = "❌");
      }
        //❌
    } else {
      alert(innerText = "✅");
      //document.body.innerText = "😀";
      //✅
      //questions++;
    }
  }
}



//DONEfaire en sorte de ne pas avoir à recocher le boutton OK du choix de la table entre chaque réponse
//DONE prochaine étape : initialiser un compteur de demandes aléatoires, de zéro à 10 exclus ie 10 questions
//DONEstep suivant : implémenter une fenêtre de réponses au fur et à mesure, Y=OK, N=KO
//DONE step chronomètre : lancé au click du OK du choix de la table, arrêté à la 10e réponse
// mémoriser les temps 
// créér un champ d'authentification par prénom, et mdp qui est mémorisé
//faire apparaitre un hall of fame des meilleurs temps pour 10 bonnes réponses consécutives, avec le prénom

//créer une fenêtre d'affichage au fur et à mesure des réponses, des logos cross mark ou check mark
//IMPORTANT : créer une option multi tables aléatoire si aucun choix de table n'est fait, ce qui palliera le problème d'undifined
// bosser sur le CSS


//var result = input * 4;
//alert(result);

/*
prompt(`Combien font ${input} fois ${multiplicateurNumber} ?`);
var result = input * multiplicateurNumber;
alert(result);*/
