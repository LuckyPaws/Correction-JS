function fonction_exo2()
{
    let nom =    document.getElementById('nom').value;
    let prenom = document.getElementById('prenom').value;

    nom = nom.toUpperCase();
    prenom = prenom.toLowerCase();

    let resultat = "<h1>Bonjour " + nom + " " + prenom + " !<h1>";
    document.getElementById('affichage').innerHTML = resultat;  
    
    
}
