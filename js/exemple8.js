function client (x){

    if (x<= 200) {
        return "Petit client"
    } else if (x>200 && x<=2000) {
        return "Client"
    } else if (x>2000 && x<=10000) {
        return "Client à potentiel"
    } else {
        return "Gros client"
    }
   
}
   
   
function random(min, max){
    return Math.round(Math.random() * (max-min) + min) ;
}
//   console.log(random(0, 20000))
   
   
   
let tableau = [];
for (let i=0; i<10; i++){
    // tableau[i] = random(0, 20000);

    tableau.push(random(0,20000));

    // console.log(tableau[i]);
}
   
   
let result = "";
let fnl = "";
for (let j=0; j<tableau.length; j++) {

    try {
        result = client(tableau[j]);
        // console.log(result);

        fnl += "Client " + (j+1) + " a son chiffre d'affaire qui est de: " + tableau[j] + ". C'est un " + client(tableau[j]) + ".<br>";

        if (tableau[j] > 15000) {
            // Générer une erreur utilisateur

            throw new Error(`Vérifier le client n°${j+1} qui a un CA très important !`);
        }
    }
    catch (error) {
        // console.log(error);
        alert(error);
    }

}

document.getElementById("affaire").innerHTML = fnl;
   
   
   