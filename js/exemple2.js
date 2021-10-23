
let nombre = 200;

let resultat = "";

resultat = parite(nombre);

console.log("Ce nombre est "+resultat);

// 3 lignes ci-dessus peuvent être remplacées ainsi :

console.log("Ce nombre est "+parite(nombre));

console.log("Ce nombre est "+parite("444"));
console.log("Ce nombre est "+parite(385));
console.log("Ce nombre est "+parite(806));



function parite(NbParametre) {

    if ( NbParametre % 2 == 1 ) {
        // impaire
        return "impair";
    }
    else {
        // paire
        return "pair";
    }

}