$(function() { // Cette fonction est appelée une fois que la page est prête
    var lastURL= ""; // variable qui contiendra l'URL de la dernière page ouverte
    var fenetreOuverte; // variable qui contiendra la fenêtre ouverte
    const action = setInterval(() => { // On crée une fonction qui sera appelée toutes les 5 secondes
        if (lastURL === "") { // Si c'est la première fois que la fonction est appelée
            lastURL= "http://isis.unice.fr"; // On initialise la variable lastURL
            fenetreOuverte = window.open("http://isis.unice.fr"); // On ouvre une nouvelle fenêtre
        } else if (lastURL == "http://isis.unice.fr") { // Si la dernière page ouverte est isis.unice.fr
           lastURL= "https://www.univ-cotedazur.fr"; // On change la valeur de lastURL
           fenetreOuverte.location = "https://www.univ-cotedazur.fr"; // On change la page de la fenêtre ouverte
        } else if (lastURL == "https://www.univ-cotedazur.fr") { // Si la dernière page ouverte est univ-cotedazur.fr
            lastURL= "http://perdu.com"; // On change la valeur de lastURL
            fenetreOuverte.location = "http://perdu.com" ; // On change la page de la fenêtre ouverte
            clearInterval(action); // On arrête l'exécution de la fonction
        }
    }, 5000); // 5000 ms = 5 secondes
});