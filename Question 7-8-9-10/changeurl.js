/*
Question 7 :
Quelle structure de données vue en C serait-il possible d’utiliser pour simplifier ce mécanisme ?
Réponse :
En C, on peut utiliser un tableau pour stocker les urls à parcourir. Un tableau est une structure de données qui permet de stocker une succession d'éléments de même nature.

Question 8 :
Quel algorithme utilisant un tableau peut-on proposer pour simplifier le changement automatiquement de page web ?
Réponse :
On met les urls à parcourir dans un tableau.
On a un compteur pour indiquer quelle url il faut voir.
Toutes les x secondes, on visualise l'url courante et on augmente de 1 pour passer à la suivante.
On s'arrête quand le compteur a atteint le nombre d'éléments du tableau.

Question 9 :
Sachant que les tableaux en JavaScript sont semblables aux tableaux de C, quelle est la position du
premier élément du tableau « t » et comment peut-on y accéder ?
Réponse :
En JavaScript, les tableaux commencent à l'index 0. Pour accéder au premier élément du tableau "t", on utilise la notation t[0].
*/

$(function() { // Cette fonction est appelée une fois que la page est prête
    const urls = ["http://isis.unice.fr", "https://www.univ-cotedazur.fr", "http://perdu.com"]; // Tableau des urls à ouvrir
    var i = 0; // Compteur pour indiquer quelle url il faut voir
    var fenetreOuverte;
    const action = setInterval(() => { // Toutes les 5 secondes, on visualise l'url courante et on augmente de 1 pour passer à la suivante
        if (i < urls.length) {
            i == 0 ? fenetreOuverte = window.open(urls[i]) : fenetreOuverte.location = urls[i]; // On vérifie si c'est la première itération pour ouvrir la fenêtre ou sinon on change l'url
            // Equivalent à :
            // if (i == 0) {
            //     fenetreOuverte = window.open(urls[i]);
            // } else {
            //     fenetreOuverte.location = urls[i];
            // }
            i++;
        } else {
            clearInterval(action); // On s'arrête quand le compteur a atteint le nombre d'éléments du tableau
        }
    }, 5000);
});