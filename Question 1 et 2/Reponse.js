/* Question 1 */
// En justifiant votre réponse, dire quelles sont les déclarations de variables qui sont correctes en JavaScript :
var x;
var bonjourToutLeMonde;
var x1;
//var 2xy ; Faux car il commence par un chiffre
var x_ou_y;
var x; var X;

// Réponse :
/* En JavaScript, un identifiant doit commencer par une lettre, un tiret bas (_) ou un dollar ($),
 il ne peut pas commencer par un chiffre. Seuls les caractères après le premier peuvent être des chiffres. */

/* Question 2 */
/*En vous fondant sur vos connaissances vues en C, quelle est la différence entre une variable locale et une variable globale ?*/
// Réponse :

/*Une variable globale est déclarée en dehors de toute fonction et est accessible partout dans le script.*/
// Exemple :
var z = 5; // z est une variable globale
function maFonction() {
    console.log("Je suis une variable global qui affiche : " + z);
}
maFonction(); // 5
console.log("Je suis hors de la fonction donc z est défini car variable global " + z); // 5

/*Une variable locale est déclarée à l'intérieur d'une fonction et n'est accessible que dans cette fonction.*/
// Exemple :
function maFonctionLocal() {
    var y = 10; // y est une variable locale
    console.log("Je suis une variable local qui affiche : " + y);
}
maFonctionLocal(); // 10
console.log("Je suis hors de la fonction donc y n'est pas défini car variable local " + y); // y n'est pas défini
