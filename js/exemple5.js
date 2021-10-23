
/* Fonction pour générer une table de multiplication :

(1) Récupérer la valeur qui servira pour générer la table

        = récupérer la valeur du champ INPUT de la page HTML qui a l'id nombre

(2) Calculer la table de multiplication

(3) Afficher la table

*/

function Multiplication() {

    // Etape 1 : récupération de la valeur

    let nb = document.getElementById('nombre').value ;

    // Etape 2 : table de mutiplication (de 0 à 10)

    let resultat = "";

    for(let i=0; i<=10; i++) {

        resultat = resultat + nb + " x " + i + " = "+ nb*i +"</br>";

    }

    // Etape 3 : affichage de la table de multiplication

    document.getElementById('affichage').innerHTML = resultat;


    // SOLUTION 2 pour les étapes 2 et 3 confondues :

    document.getElementById('affichage').innerHTML = "";

    for(let i=0; i<=10; i++) {

        document.getElementById('affichage').innerHTML += nb + " x " + i + " = "+ nb*i +"</br>";

    }


}























function Multi()
{   
    let nombre = document.getElementById('nombre').value;
    let affichage = "<table><tr><th>Table de " + nombre + "</th></tr>";

    for(var i = 0; i <= 10; i++)
    {
        affichage += "<tr><td>" + nombre + " x " + i + " = " + nombre*i + "</td></tr>";
    }

    affichage += "</table>";

    document.getElementById('affichage').innerHTML = affichage;
}