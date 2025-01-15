/* Question 3 */

$(function () { // Fonction qui permet de charger le code après le chargement de la page

    var defaultColor; // variable global pour stocker la couleur par défaut permettant d'y accéder dans les 2 fonctions suivantes

    $("tr").mouseover(function () { // Fonction qui permet de changer la couleur de la ligne survolée
        defaultColor = $(this).css("background-color"); // Variable local pour stocker la couleur par défaut de la ligne survolée
        $(this).css("background-color", "blue"); // Changer la couleur de la ligne survolée
    });

    $("tr").mouseout(function () { // Fonction qui permet de remettre la couleur par défaut de la ligne survolée
        $(this).css("background-color", defaultColor); // Remettre la couleur par défaut de la ligne survolée grace à la variable global
    });
});