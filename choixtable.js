var multiplicateurNumber = Number;
var minMultiplicateurNumber = 0;
var maxMultiplicateurNumber = 10;
var result = Number;




function multiplication() {
    // Sélectionner l'élément input et récupérer sa valeur
    var input = document.getElementById("tableNumber").value;
    // Afficher la valeur
    //alert(input);
    //var result = input *4;
    //alert(result);
    var multiplicateurNumber = minMultiplicateurNumber + Math.floor(Math.random() * (maxMultiplicateurNumber - minMultiplicateurNumber));
    prompt(`Combien font ${input} fois ${multiplicateurNumber} ?`);
    var result = input * multiplicateurNumber;
    alert(result);
}
