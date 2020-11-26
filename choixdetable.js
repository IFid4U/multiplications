var multiplicateurNumber = Number;
var minMultiplicateurNumber = 0;
var maxMultiplicateurNumber = 10;
var resultat = Number;
var valeurTable = Number;
var saisie = Number;
var reponse = Number;
var questions = 0;

function multiplication() {
    for (let questions = 0; questions < 10; questions++){
      // Sélectionner l'élément input et récupérer sa valeur
      var input = document.getElementById("valeurTable").value;
      // Afficher la valeur
      valeurTable = input;
      //alert(valeurTable); 
      var multiplicateurNumber = minMultiplicateurNumber + Math.floor(Math.random() * (maxMultiplicateurNumber - minMultiplicateurNumber));
      var saisie = prompt(`Combien font ${valeurTable} fois ${multiplicateurNumber} ?`);
      parseInt(saisie);
      //alert(saisie);
      resultat = valeurTable * multiplicateurNumber;
      //alert(resultat);
      if (saisie != resultat) {
        alert("Essaie encore");
        //prompt(questions-);
      } else {
        alert("Bravo!");
        //questions++;
      }
    }
}



// faire en sorte de ne pas avoir à recocher le boutton OK du choix de la table entre chaque réponse
//prochaine étape : initialiser un compteur de demandes aléatoires, de zéro à 10 exclus ie 10 questions
//step suivant : implémenter une fenêtre de réponses au fur et à mesure, Y=OK, N=KO
//step chronomètre : lancé au click du OK du choix de la table, arrêté à la 10e réponse
// mémoriser les temps 
// créér un champ d'authentification par prénom, et mdp qui est mémorisé
//faire apparaitre un hall of fame des meilleurs temps pour 10 bonnes réponses consécutives, avec le prénom

   


//var result = input * 4;
//alert(result);

/*
prompt(`Combien font ${input} fois ${multiplicateurNumber} ?`);
var result = input * multiplicateurNumber;
alert(result);*/
