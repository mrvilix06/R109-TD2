
$(function () { // Cette fonction est appelée une fois que la page est prête
    const urls = ["http://isis.unice.fr", "https://www.univ-cotedazur.fr", "http://perdu.com"]; // Tableau des urls à ouvrir
    var i = 0; // Compteur pour indiquer quelle url il faut voir
    var fenetreOuverte = window.open(); // On ouvre une fenêtre vide pour pouvoir la changer plus tard


    const action = setInterval(() => { // Toutes les 5 secondes, on visualise l'url courante et on augmente de 1 pour passer à la suivante
        fenetreOuverte.location = urls[i]; // On change l'url de la fenêtre ouverte avec l'url courante du tableau on le fait comme ça pour évité de créer une nouvelle fenêtre quand on revient à la première url
        i++;
        if (i % urls.length === 0) { // On repart à 0 quand on a parcouru toutes les urls
            i = 0;
        }
    }, 5000);
});